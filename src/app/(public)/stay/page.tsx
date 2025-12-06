import { Hero } from "@/components/features/Hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Bed, Wifi, Car, Coffee, Users, Bath } from "lucide-react";

const roomTypes = [
  {
    id: 1,
    name: "Ocean View Suite",
    description: "Spacious suites with panoramic ocean views and private balconies",
    occupancy: 4,
    amenities: ["Ocean View", "Private Balcony", "King Bed", "Living Area"],
    image: "/images/beachfront-aerial.jpg"
  },
  {
    id: 2,
    name: "Garden Room",
    description: "Intimate rooms overlooking our beautifully manicured gardens",
    occupancy: 2,
    amenities: ["Garden View", "Queen Bed", "Marble Bathroom", "Mini Bar"],
    image: "/images/club-buildings.jpg"
  },
  {
    id: 3,
    name: "Beach Cottage",
    description: "Private cottages just steps from our pristine beach",
    occupancy: 6,
    amenities: ["Beachfront", "Full Kitchen", "2 Bedrooms", "Private Deck"],
    image: "/images/beach-umbrellas.jpg"
  }
];

export default function StayPage() {
  return (
    <>
      <Hero
        title="Luxury Accommodations"
        description="Experience unparalleled comfort and elegance in our beautifully appointed rooms, suites, and private cottages."
        primaryCta={{
          text: "Check Availability",
          href: "/stay/booking"
        }}
        secondaryCta={{
          text: "Take Virtual Tour",
          href: "/stay/tour"
        }}
        backgroundImage="/images/pool-area.jpg"
      />

      {/* Room Types */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">Choose Your Perfect Stay</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From intimate rooms to spacious suites and private cottages, find the perfect accommodation for your visit.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {roomTypes.map((room) => (
              <Card key={room.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${room.image})` }}></div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {room.name}
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span>{room.occupancy}</span>
                    </div>
                  </CardTitle>
                  <CardDescription>{room.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Amenities</h4>
                    <div className="flex flex-wrap gap-2">
                      {room.amenities.map((amenity) => (
                        <span
                          key={amenity}
                          className="px-2 py-1 bg-brand-sand text-brand-ink text-xs rounded-full"
                        >
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Button className="w-full" asChild>
                    <Link href={`/stay/rooms/${room.id}`}>View Details</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-16 bg-brand-sand">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">World-Class Amenities</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every accommodation includes access to our full range of club amenities and services.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { icon: Wifi, label: "High-Speed WiFi" },
              { icon: Car, label: "Valet Parking" },
              { icon: Coffee, label: "Room Service" },
              { icon: Bath, label: "Luxury Bathrooms" },
              { icon: Bed, label: "Premium Bedding" },
              { icon: Users, label: "Concierge Service" },
            ].map((amenity, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-brand-coral rounded-lg flex items-center justify-center mx-auto mb-3">
                  <amenity.icon className="h-6 w-6 text-white" />
                </div>
                <p className="text-sm font-medium">{amenity.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
            Ready to Book Your Stay?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact our reservations team to secure your perfect accommodation at Coral Beach & Tennis Club.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-brand-coral hover:bg-brand-coral/90" asChild>
              <Link href="/stay/booking">Book Now</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/about/contact">Contact Reservations</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}