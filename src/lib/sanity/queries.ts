import { groq } from 'next-sanity'

// Event queries
export const eventsQuery = groq`
  *[_type == "event"] | order(start asc) {
    _id,
    title,
    slug,
    category,
    start,
    end,
    image,
    location,
    audience,
    description,
    rsvpLink,
    recurrence
  }
`

export const eventBySlugQuery = groq`
  *[_type == "event" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    category,
    start,
    end,
    image,
    location,
    audience,
    description,
    rsvpLink,
    recurrence
  }
`

// Room type queries
export const roomTypesQuery = groq`
  *[_type == "roomType"] | order(name asc) {
    _id,
    name,
    slug,
    blurb,
    images,
    occupancy,
    amenities,
    memberPriority
  }
`

export const roomTypeBySlugQuery = groq`
  *[_type == "roomType" && slug.current == $slug][0] {
    _id,
    name,
    slug,
    blurb,
    images,
    occupancy,
    amenities,
    memberPriority
  }
`

// Cottage queries
export const cottagesQuery = groq`
  *[_type == "cottage"] | order(name asc) {
    _id,
    name,
    slug,
    bedrooms,
    blurb,
    images,
    locationNotes,
    amenities
  }
`

export const cottageBySlugQuery = groq`
  *[_type == "cottage" && slug.current == $slug][0] {
    _id,
    name,
    slug,
    bedrooms,
    blurb,
    images,
    locationNotes,
    amenities
  }
`

// Dining venue queries
export const diningVenuesQuery = groq`
  *[_type == "diningVenue"] | order(name asc) {
    _id,
    name,
    slug,
    images,
    hours,
    reservationInstructions,
    menus[]-> {
      _id,
      name,
      effectiveFrom,
      effectiveTo,
      items
    }
  }
`

export const diningVenueBySlugQuery = groq`
  *[_type == "diningVenue" && slug.current == $slug][0] {
    _id,
    name,
    slug,
    images,
    hours,
    reservationInstructions,
    menus[]-> {
      _id,
      name,
      effectiveFrom,
      effectiveTo,
      items
    }
  }
`

// Menu queries
export const menusQuery = groq`
  *[_type == "menu"] | order(name asc) {
    _id,
    name,
    effectiveFrom,
    effectiveTo,
    items
  }
`

export const menuByIdQuery = groq`
  *[_type == "menu" && _id == $id][0] {
    _id,
    name,
    effectiveFrom,
    effectiveTo,
    items
  }
`

// Venue queries
export const venuesQuery = groq`
  *[_type == "venue"] | order(name asc) {
    _id,
    name,
    slug,
    images,
    capacity,
    siteFees,
    rainPlan,
    description
  }
`

export const venueBySlugQuery = groq`
  *[_type == "venue" && slug.current == $slug][0] {
    _id,
    name,
    slug,
    images,
    capacity,
    siteFees,
    rainPlan,
    description
  }
`

// Reciprocal club queries
export const reciprocalClubsQuery = groq`
  *[_type == "reciprocalClub"] | order(country asc, city asc) {
    _id,
    name,
    city,
    country,
    url,
    notes,
    image,
    tags
  }
`

export const reciprocalClubsByCountryQuery = groq`
  *[_type == "reciprocalClub" && country == $country] | order(city asc) {
    _id,
    name,
    city,
    country,
    url,
    notes,
    image,
    tags
  }
`

// Staff queries
export const staffQuery = groq`
  *[_type == "staff"] | order(name asc) {
    _id,
    name,
    role,
    email,
    phone,
    headshot
  }
`

// Announcement queries
export const announcementsQuery = groq`
  *[_type == "announcement" && starts <= now() && ends >= now()] | order(starts desc) {
    _id,
    title,
    body,
    starts,
    ends,
    audience
  }
`

export const publicAnnouncementsQuery = groq`
  *[_type == "announcement" && audience == "Public" && starts <= now() && ends >= now()] | order(starts desc) {
    _id,
    title,
    body,
    starts,
    ends,
    audience
  }
`

// Site settings query
export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    _id,
    siteName,
    brand,
    whatsappNumber,
    pressLogos
  }
`

// Clinic queries
export const clinicsQuery = groq`
  *[_type == "clinic"] | order(title asc) {
    _id,
    title,
    type,
    level,
    coach,
    schedule,
    price,
    slots
  }
`

export const clinicsByTypeQuery = groq`
  *[_type == "clinic" && type == $type] | order(title asc) {
    _id,
    title,
    type,
    level,
    coach,
    schedule,
    price,
    slots
  }
`