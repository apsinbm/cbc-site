import { Hero } from "@/components/features/Hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Calendar, Clock, MapPin, Users, Filter } from "lucide-react";

const events = [
  {
    id: 1,
    title: "Afternoon Tea Service",
    category: "Dining",
    date: "2024-08-20",
    time: "3:00 PM - 5:00 PM",
    location: "Garden Terrace",
    description: "Enjoy traditional afternoon tea with a modern twist, featuring locally sourced ingredients.",
    audience: "All Members",
    rsvpRequired: true
  },
  {
    id: 2,
    title: "Tennis Tournament - Mixed Doubles",
    category: "Tennis", 
    date: "2024-08-22",
    time: "9:00 AM - 4:00 PM",
    location: "Championship Courts",
    description: "Annual mixed doubles tournament with prizes for winners and runners-up.",
    audience: "Tennis Members",
    rsvpRequired: true
  },
  {
    id: 3,
    title: "Seafood Buffet Night",
    category: "Dining",
    date: "2024-08-23",
    time: "6:00 PM - 9:00 PM", 
    location: "Ocean View Restaurant",
    description: "Fresh local seafood buffet featuring the best catches from Bermuda waters.",
    audience: "All Members",
    rsvpRequired: true
  },
  {
    id: 4,
    title: "Sunset Yoga Session",
    category: "Fitness",
    date: "2024-08-24",
    time: "6:30 PM - 7:30 PM",
    location: "Beach Pavilion",
    description: "Relax and unwind with a peaceful yoga session as the sun sets over the ocean.",
    audience: "All Members",
    rsvpRequired: false
  },
  {
    id: 5,
    title: "Junior Tennis Clinic",
    category: "Junior",
    date: "2024-08-25",
    time: "10:00 AM - 12:00 PM",
    location: "Practice Courts",
    description: "Professional tennis instruction for juniors aged 8-16.",
    audience: "Junior Members",
    rsvpRequired: true
  },
  {
    id: 6,
    title: "Wine Tasting Evening",
    category: "Social",
    date: "2024-08-26",
    time: "7:00 PM - 9:00 PM",
    location: "Private Dining Room",
    description: "Curated wine tasting featuring premium selections from around the world.",
    audience: "Adult Members",
    rsvpRequired: true
  }
];

const categories = ["All", "Dining", "Tennis", "Spa", "Fitness", "Junior", "Social"];

export default function WhatsOnPage() {
  return (
    <>
      <Hero
        title="What's On at CBC"
        description="Stay updated with our exciting events, activities, and special occasions happening at the club."
        primaryCta={{
          text: "View Full Calendar",
          href: "/whats-on/calendar"
        }}
        secondaryCta={{
          text: "RSVP for Events",
          href: "/whats-on/rsvp"
        }}
        backgroundImage="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80"
      />

      {/* Filters */}
      <section className="py-8 bg-brand-sand">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
                className={category === "All" ? "bg-brand-coral hover:bg-brand-coral/90" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Events List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">Upcoming Events</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join us for exciting activities, dining experiences, and social gatherings designed to enhance your club experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <Card key={event.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-brand-sand text-brand-ink">
                      {event.category}
                    </Badge>
                    {event.rsvpRequired && (
                      <Badge variant="outline" className="text-brand-coral border-brand-coral">
                        RSVP Required
                      </Badge>
                    )}
                  </div>
                  <CardTitle>{event.title}</CardTitle>
                  <CardDescription>{event.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(event.date).toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4" />
                      <span>{event.audience}</span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button size="sm" className="flex-1" asChild>
                      <Link href={`/whats-on/events/${event.id}`}>View Details</Link>
                    </Button>
                    {event.rsvpRequired && (
                      <Button size="sm" variant="outline" className="flex-1" asChild>
                        <Link href={`/whats-on/rsvp/${event.id}`}>RSVP</Link>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Calendar Views */}
      <section className="py-16 bg-brand-sand">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">View Events Your Way</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose how you'd like to browse our events and activities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Today</CardTitle>
                <CardDescription>See what's happening today</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/whats-on/today">View Today</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>This Week</CardTitle>
                <CardDescription>Weekly event overview</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/whats-on/week">View Week</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Monthly</CardTitle>
                <CardDescription>Full calendar view</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/whats-on/month">View Month</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Upcoming</CardTitle>
                <CardDescription>All future events</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/whats-on/upcoming">View All</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
            Never Miss an Event
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Subscribe to our event notifications and stay informed about all the exciting happenings at CBC.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-brand-coral hover:bg-brand-coral/90" asChild>
              <Link href="/newsletter">Subscribe to Updates</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/whats-on/calendar/export">Export Calendar</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}