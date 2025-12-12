import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { nanoid } from 'nanoid'

const stayInquirySchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email().max(255),
  phone: z.string().optional(),
  checkIn: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Invalid check-in date'),
  checkOut: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Invalid check-out date'),
  guests: z.number().min(1).max(20),
  roomType: z.string().max(100),
  specialRequests: z.string().max(1000).optional(),
  honeypot: z.string().optional(),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validatedData = stayInquirySchema.parse(body)

    // Bot detection
    if (validatedData.honeypot) {
      return NextResponse.json({ success: true, id: nanoid() })
    }

    // Validate date logic
    const checkInDate = new Date(validatedData.checkIn)
    const checkOutDate = new Date(validatedData.checkOut)
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    if (checkInDate < today) {
      return NextResponse.json(
        { error: 'Check-in date cannot be in the past' },
        { status: 400 }
      )
    }

    if (checkOutDate <= checkInDate) {
      return NextResponse.json(
        { error: 'Check-out date must be after check-in date' },
        { status: 400 }
      )
    }

    const nights = Math.ceil((checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 60 * 60 * 24))
    if (nights > 30) {
      return NextResponse.json(
        { error: 'Maximum stay is 30 nights' },
        { status: 400 }
      )
    }

    const submissionId = nanoid()

    // TODO: Send to reservations team
    console.log('Stay inquiry received:', {
      id: submissionId,
      ...validatedData,
      nights
    })

    return NextResponse.json({
      success: true,
      id: submissionId,
      message: 'Thank you for your inquiry. Our reservations team will contact you within 24 hours.'
    })

  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation failed', details: error.issues },
        { status: 400 }
      )
    }

    console.error('Stay inquiry error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}