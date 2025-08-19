export interface SanityImage {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
  alt?: string
}

export interface SanitySlug {
  _type: 'slug'
  current: string
}

export interface Event {
  _id: string
  title: string
  slug: SanitySlug
  category: 'Dining' | 'Tennis' | 'Spa' | 'Fitness' | 'Junior' | 'Social'
  start: string
  end: string
  image?: SanityImage
  location: string
  audience: string
  description: string
  rsvpLink?: string
  recurrence?: string
}

export interface RoomType {
  _id: string
  name: string
  slug: SanitySlug
  blurb: string
  images: SanityImage[]
  occupancy: number
  amenities: string[]
  memberPriority: boolean
}

export interface Cottage {
  _id: string
  name: string
  slug: SanitySlug
  bedrooms: number
  blurb: string
  images: SanityImage[]
  locationNotes: string
  amenities: string[]
}

export interface MenuItem {
  name: string
  description: string
  price: number
  dietary: string[]
}

export interface Menu {
  _id: string
  name: string
  effectiveFrom: string
  effectiveTo: string
  items: MenuItem[]
}

export interface DiningVenue {
  _id: string
  name: string
  slug: SanitySlug
  images: SanityImage[]
  hours: string
  reservationInstructions: string
  menus: Menu[]
}

export interface Venue {
  _id: string
  name: string
  slug: SanitySlug
  images: SanityImage[]
  capacity: number
  siteFees: string
  rainPlan: string
  description: string
}

export interface ReciprocalClub {
  _id: string
  name: string
  city: string
  country: string
  url: string
  notes: string
  image: SanityImage
  tags: string[]
}

export interface Staff {
  _id: string
  name: string
  role: string
  email: string
  phone: string
  headshot: SanityImage
}

export interface Announcement {
  _id: string
  title: string
  body: string
  starts: string
  ends: string
  audience: 'Public' | 'Members'
}

export interface BrandTokens {
  coral: string
  sea: string
  sand: string
  ink: string
  surface: string
}

export interface SiteSettings {
  _id: string
  siteName: string
  brand: BrandTokens
  whatsappNumber: string
  pressLogos: SanityImage[]
}

export interface Clinic {
  _id: string
  title: string
  type: 'Tennis' | 'Fitness' | 'Wellness'
  level: string
  coach: string
  schedule: string
  price: number
  slots: number
}