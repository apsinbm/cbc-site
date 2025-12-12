import { client, previewClient } from './client'
import { 
  eventsQuery,
  eventBySlugQuery,
  roomTypesQuery,
  roomTypeBySlugQuery,
  cottagesQuery,
  cottageBySlugQuery,
  diningVenuesQuery,
  diningVenueBySlugQuery,
  menusQuery,
  menuByIdQuery,
  venuesQuery,
  venueBySlugQuery,
  reciprocalClubsQuery,
  reciprocalClubsByCountryQuery,
  staffQuery,
  announcementsQuery,
  publicAnnouncementsQuery,
  siteSettingsQuery,
  clinicsQuery,
  clinicsByTypeQuery
} from './queries'

const getClient = (preview = false) => (preview ? previewClient : client)

// Event functions
export async function getEvents(preview = false) {
  return getClient(preview).fetch(eventsQuery)
}

export async function getEventBySlug(slug: string, preview = false) {
  return getClient(preview).fetch(eventBySlugQuery, { slug })
}

// Room type functions
export async function getRoomTypes(preview = false) {
  return getClient(preview).fetch(roomTypesQuery)
}

export async function getRoomTypeBySlug(slug: string, preview = false) {
  return getClient(preview).fetch(roomTypeBySlugQuery, { slug })
}

// Cottage functions
export async function getCottages(preview = false) {
  return getClient(preview).fetch(cottagesQuery)
}

export async function getCottageBySlug(slug: string, preview = false) {
  return getClient(preview).fetch(cottageBySlugQuery, { slug })
}

// Dining venue functions
export async function getDiningVenues(preview = false) {
  return getClient(preview).fetch(diningVenuesQuery)
}

export async function getDiningVenueBySlug(slug: string, preview = false) {
  return getClient(preview).fetch(diningVenueBySlugQuery, { slug })
}

// Menu functions
export async function getMenus(preview = false) {
  return getClient(preview).fetch(menusQuery)
}

export async function getMenuById(id: string, preview = false) {
  return getClient(preview).fetch(menuByIdQuery, { id })
}

// Venue functions
export async function getVenues(preview = false) {
  return getClient(preview).fetch(venuesQuery)
}

export async function getVenueBySlug(slug: string, preview = false) {
  return getClient(preview).fetch(venueBySlugQuery, { slug })
}

// Reciprocal club functions
export async function getReciprocalClubs(preview = false) {
  return getClient(preview).fetch(reciprocalClubsQuery)
}

export async function getReciprocalClubsByCountry(country: string, preview = false) {
  return getClient(preview).fetch(reciprocalClubsByCountryQuery, { country })
}

// Staff functions
export async function getStaff(preview = false) {
  return getClient(preview).fetch(staffQuery)
}

// Announcement functions
export async function getAnnouncements(preview = false) {
  return getClient(preview).fetch(announcementsQuery)
}

export async function getPublicAnnouncements(preview = false) {
  return getClient(preview).fetch(publicAnnouncementsQuery)
}

// Site settings functions
export async function getSiteSettings(preview = false) {
  return getClient(preview).fetch(siteSettingsQuery)
}

// Clinic functions
export async function getClinics(preview = false) {
  return getClient(preview).fetch(clinicsQuery)
}

export async function getClinicsByType(type: string, preview = false) {
  return getClient(preview).fetch(clinicsByTypeQuery, { type })
}

// Utility functions for filtering and sorting
export function filterEventsByCategory(events: any[], category: string) {
  if (category === 'All' || !category) return events
  return events.filter(event => event.category === category)
}

export function filterEventsByDateRange(events: any[], startDate: Date, endDate: Date) {
  return events.filter(event => {
    const eventDate = new Date(event.start)
    return eventDate >= startDate && eventDate <= endDate
  })
}

export function getEventsForToday(events: any[]) {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const tomorrow = new Date(today)
  tomorrow.setDate(tomorrow.getDate() + 1)
  
  return filterEventsByDateRange(events, today, tomorrow)
}

export function getEventsForWeek(events: any[]) {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const nextWeek = new Date(today)
  nextWeek.setDate(nextWeek.getDate() + 7)
  
  return filterEventsByDateRange(events, today, nextWeek)
}

export function getUpcomingEvents(events: any[], limit?: number) {
  const now = new Date()
  const upcoming = events.filter(event => new Date(event.start) > now)
  return limit ? upcoming.slice(0, limit) : upcoming
}