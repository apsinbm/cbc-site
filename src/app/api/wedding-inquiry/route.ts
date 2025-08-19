import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { nanoid } from 'nanoid'

const weddingInquirySchema = z.object({
  coupleName: z.string().min(2).max(200),
  email: z.string().email().max(255),
  phone: z.string().optional(),
  weddingDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Invalid wedding date'),
  guestCount: z.number().min(1).max(500),
  venuePreference: z.string().max(100).optional(),
  budget: z.enum(['Under $10,000', '$10,000 - $25,000', '$25,000 - $50,000', '$50,000 - $100,000', 'Over $100,000']).optional(),
  serviceType: z.enum(['Ceremony Only', 'Reception Only', 'Ceremony & Reception', 'Multi-Day Event']),
  accommodationNeeded: z.boolean().default(false),
  cateringPreference: z.enum(['Plated Dinner', 'Buffet', 'Cocktail Reception', 'Custom Menu']).optional(),
  specialRequests: z.string().max(2000).optional(),
  honeypot: z.string().optional(),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validatedData = weddingInquirySchema.parse(body)

    // Bot detection
    if (validatedData.honeypot) {
      return NextResponse.json({ success: true, id: nanoid() })
    }

    // Validate wedding date
    const weddingDate = new Date(validatedData.weddingDate)
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    const sixMonthsFromNow = new Date()
    sixMonthsFromNow.setMonth(sixMonthsFromNow.getMonth() + 6)

    if (weddingDate < sixMonthsFromNow) {
      return NextResponse.json(
        { 
          error: 'Wedding date should be at least 6 months in advance for proper planning',
          warning: true
        },
        { status: 400 }
      )
    }

    const submissionId = nanoid()

    // TODO: Send to wedding coordinator
    console.log('Wedding inquiry received:', {
      id: submissionId,
      ...validatedData
    })

    return NextResponse.json({
      success: true,
      id: submissionId,
      message: 'Thank you for considering CBC for your special day! Our wedding coordinator will contact you within 48 hours to discuss your vision.'
    })

  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation failed', details: error.errors },
        { status: 400 }
      )
    }

    console.error('Wedding inquiry error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}