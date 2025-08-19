import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { nanoid } from 'nanoid'

const eventRsvpSchema = z.object({
  eventId: z.string().min(1),
  memberName: z.string().min(2).max(100),
  memberEmail: z.string().email().max(255),
  memberNumber: z.string().optional(),
  attendeeCount: z.number().min(1).max(10),
  dietaryRequirements: z.string().max(500).optional(),
  specialRequests: z.string().max(500).optional(),
  guestNames: z.array(z.string().max(100)).optional(),
  honeypot: z.string().optional(),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validatedData = eventRsvpSchema.parse(body)

    // Bot detection
    if (validatedData.honeypot) {
      return NextResponse.json({ success: true, id: nanoid() })
    }

    // Validate guest names count matches attendee count
    if (validatedData.guestNames && validatedData.guestNames.length !== validatedData.attendeeCount - 1) {
      return NextResponse.json(
        { error: 'Guest names count does not match attendee count' },
        { status: 400 }
      )
    }

    const submissionId = nanoid()

    // TODO: Check event capacity and member status
    // TODO: Send confirmation email
    // TODO: Update event attendance in database

    console.log('Event RSVP received:', {
      id: submissionId,
      ...validatedData
    })

    return NextResponse.json({
      success: true,
      id: submissionId,
      message: 'Thank you for your RSVP! You will receive a confirmation email shortly.'
    })

  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation failed', details: error.errors },
        { status: 400 }
      )
    }

    console.error('Event RSVP error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}