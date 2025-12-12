import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { nanoid } from 'nanoid'

// Rate limiting (in production, use Redis or similar)
const requestCounts = new Map<string, { count: number; resetTime: number }>()

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const limit = 10 // 10 requests per hour
  const window = 60 * 60 * 1000 // 1 hour

  const entry = requestCounts.get(ip)
  if (!entry || now > entry.resetTime) {
    requestCounts.set(ip, { count: 1, resetTime: now + window })
    return false
  }

  if (entry.count >= limit) {
    return true
  }

  entry.count++
  return false
}

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Please enter a valid email address').max(255),
  phone: z.string().optional(),
  subject: z.string().min(1, 'Please select a subject').max(200),
  message: z.string().min(10, 'Message must be at least 10 characters').max(2000),
  honeypot: z.string().optional(),
})

// Mock email sending function (replace with actual email service)
async function sendEmail(data: {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
}) {
  // TODO: Implement with Postmark, SendGrid, or other email service
  console.log('Sending email:', {
    to: process.env.EMAIL_TO,
    from: process.env.EMAIL_FROM,
    subject: `CBC Contact Form: ${data.subject}`,
    text: `
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || 'Not provided'}
Subject: ${data.subject}

Message:
${data.message}
    `,
  })

  // Simulate email sending
  await new Promise(resolve => setTimeout(resolve, 100))
  
  if (process.env.POSTMARK_API_TOKEN) {
    // TODO: Implement actual Postmark integration
    console.log('Postmark integration ready but not implemented')
  }

  return true
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') || 'anonymous'

    // Check rate limiting
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    // Parse and validate request body
    const body = await request.json()
    const validatedData = contactSchema.parse(body)

    // Check honeypot field (bot detection)
    if (validatedData.honeypot) {
      console.warn(`Bot detected from IP ${ip}`)
      // Return success to avoid revealing honeypot
      return NextResponse.json({ success: true, id: nanoid() })
    }

    // Additional spam detection
    const spamKeywords = ['viagra', 'casino', 'lottery', 'bitcoin', 'crypto']
    const content = `${validatedData.subject} ${validatedData.message}`.toLowerCase()
    const hasSpam = spamKeywords.some(keyword => content.includes(keyword))

    if (hasSpam) {
      console.warn(`Potential spam detected from IP ${ip}`)
      // Log but don't block entirely - could be false positive
    }

    // Generate submission ID
    const submissionId = nanoid()

    // Send email
    await sendEmail({
      name: validatedData.name,
      email: validatedData.email,
      phone: validatedData.phone,
      subject: validatedData.subject,
      message: validatedData.message,
    })

    // Log successful submission
    console.log(`Contact form submitted by ${validatedData.email} (ID: ${submissionId})`)

    return NextResponse.json({
      success: true,
      id: submissionId,
      message: 'Thank you for your message. We will get back to you soon!'
    })

  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          error: 'Validation failed', 
          details: error.issues.map(e => ({ field: e.path.join('.'), message: e.message }))
        },
        { status: 400 }
      )
    }

    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  )
}