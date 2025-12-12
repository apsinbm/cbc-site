import { Hero } from "@/components/features/Hero";
import { Gallery } from "@/components/features/Gallery";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Calendar, MapPin, Users, Utensils, Crown, Waves } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        subtitle="Welcome to"
        title="Coral Beach & Tennis Club"
        description="Bermuda's premier private beach and tennis club, offering world-class amenities and hospitality since 1931."
        primaryCta={{
          text: "Explore Membership",
          href: "/membership"
        }}
        secondaryCta={{
          text: "Plan Your Visit",
          href: "/stay"
        }}
        backgroundImage="/images/aerial-overview.jpg"
      />

      {/* Quick Links Section */}
      <section className="py-16 bg-brand-sand">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">Experience CBC</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover all that our club has to offer, from luxury accommodations to world-class dining and recreational activities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-brand-pink rounded-lg flex items-center justify-center mb-4">
                  <Crown className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Luxury Accommodations</CardTitle>
                <CardDescription>
                  Experience comfort and elegance in our beautifully appointed rooms, suites, and private cottages.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/stay">Explore Accommodations</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-brand-blue rounded-lg flex items-center justify-center mb-4">
                  <Utensils className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Exceptional Dining</CardTitle>
                <CardDescription>
                  Savor exquisite cuisine at our renowned restaurants, featuring fresh local ingredients and international flavors.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/dine">View Dining Options</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-brand-green rounded-lg flex items-center justify-center mb-4">
                  <Waves className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Beach & Recreation</CardTitle>
                <CardDescription>
                  Enjoy our pristine private beach, championship tennis courts, spa services, and fitness facilities.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/play">Discover Activities</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-brand-pink rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Events & Weddings</CardTitle>
                <CardDescription>
                  Create unforgettable memories with our stunning venues and personalized event planning services.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/gather">Plan Your Event</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-brand-blue rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <CardTitle>What&apos;s On</CardTitle>
                <CardDescription>
                  Stay updated with our exciting events, activities, and special occasions happening at the club.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/whats-on">View Calendar</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-brand-green rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Our Location</CardTitle>
                <CardDescription>
                  Perfectly situated on Bermuda's stunning south shore, offering breathtaking ocean views and easy access.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/about/contact">Get Directions</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">Experience the Beauty of CBC</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From our pristine pink sand beach to our elegant facilities, discover the stunning views and luxurious amenities that make CBC special.
            </p>
          </div>
          
          <Gallery 
            images={[
              {
                src: "/images/aerial-overview.jpg",
                alt: "Aerial view of Coral Beach & Tennis Club",
                caption: "Stunning aerial view of our 26-acre oceanfront property"
              },
              {
                src: "/images/tennis-courts.jpg", 
                alt: "Tennis courts and facilities",
                caption: "Professional tennis courts with ocean views"
              },
              {
                src: "/images/beach-umbrellas.jpg",
                alt: "Beach with umbrellas and pink sand",
                caption: "Our famous pink sand beach with premium beach service"
              },
              {
                src: "/images/beachfront-aerial.jpg",
                alt: "Beachfront aerial view",
                caption: "2,000 feet of pristine pink sand coastline"
              },
              {
                src: "/images/pool-area.jpg",
                alt: "Pool and recreational areas", 
                caption: "Pool area and recreational facilities"
              },
              {
                src: "/images/sunset-view.jpg",
                alt: "Sunset view of the club",
                caption: "Golden hour at Coral Beach & Tennis Club"
              }
            ]}
            columns={3}
            className="mb-8"
          />
          
          <div className="text-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/about/gallery">View Full Gallery</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
            Ready to Experience CBC?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our exclusive community and discover the ultimate in luxury, recreation, and hospitality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-brand-blue-dark hover:bg-brand-blue-dark/90" asChild>
              <Link href="/membership">Become a Member</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/about/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
