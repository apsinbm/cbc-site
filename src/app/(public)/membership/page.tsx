import { Hero } from "@/components/features/Hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Crown, Users, Globe, Shield, Star, Heart } from "lucide-react";

const membershipTiers = [
  {
    name: "Full Membership",
    description: "Complete access to all club facilities and privileges",
    benefits: [
      "Unlimited beach and pool access",
      "Priority tennis court reservations", 
      "Full dining privileges",
      "Spa and fitness facilities",
      "Event hosting privileges",
      "Guest privileges",
      "Reciprocal club access worldwide",
      "Preferred accommodation rates"
    ],
    featured: true
  },
  {
    name: "Tennis Membership",
    description: "Focus on our world-class tennis facilities and programs",
    benefits: [
      "Tennis court access and reservations",
      "Professional instruction",
      "Tournament participation",
      "Limited dining privileges",
      "Fitness center access",
      "Guest tennis privileges"
    ],
    featured: false
  },
  {
    name: "Social Membership", 
    description: "Enjoy our dining, events, and social amenities",
    benefits: [
      "Full dining privileges",
      "Event attendance",
      "Beach and pool access",
      "Limited reciprocal privileges",
      "Guest dining privileges",
      "Member events access"
    ],
    featured: false
  }
];

const reciprocalClubs = [
  { name: "Royal Bermuda Yacht Club", location: "Hamilton, Bermuda" },
  { name: "New York Yacht Club", location: "New York, USA" },
  { name: "Royal Thames Yacht Club", location: "London, UK" },
  { name: "Chicago Yacht Club", location: "Chicago, USA" },
  { name: "Royal Sydney Yacht Squadron", location: "Sydney, Australia" },
  { name: "Club de Mar", location: "Mallorca, Spain" }
];

export default function MembershipPage() {
  return (
    <>
      <Hero
        subtitle="Join Our Exclusive Community"
        title="CBC Membership"
        description="Experience the ultimate in luxury, recreation, and hospitality as a member of Bermuda's premier private club."
        primaryCta={{
          text: "Apply for Membership",
          href: "/membership/apply"
        }}
        secondaryCta={{
          text: "Schedule Tour",
          href: "/membership/tour"
        }}
        backgroundImage="https://images.unsplash.com/photo-1544966503-7cc5ac882d5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      />

      {/* Membership Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">Membership Benefits</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the exclusive privileges and world-class amenities that come with CBC membership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-brand-coral rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Crown className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Exclusive Access</CardTitle>
                <CardDescription>
                  Enjoy privileged access to our pristine private beach, championship tennis courts, and luxury facilities.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-brand-sea rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Community</CardTitle>
                <CardDescription>
                  Connect with like-minded individuals and families in an atmosphere of warmth and sophistication.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-brand-coral rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Global Network</CardTitle>
                <CardDescription>
                  Access reciprocal privileges at prestigious clubs worldwide through our extensive network.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-brand-sea rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Priority Service</CardTitle>
                <CardDescription>
                  Receive priority reservations, personalized service, and exclusive member-only events.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-brand-coral rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Premium Amenities</CardTitle>
                <CardDescription>
                  World-class spa services, fitness facilities, and recreational activities at your fingertips.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-brand-sea rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Legacy</CardTitle>
                <CardDescription>
                  Create lasting memories and traditions for your family in a setting of timeless elegance.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Membership Types */}
      <section className="py-16 bg-brand-sand">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">Membership Categories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the membership level that best suits your lifestyle and interests.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {membershipTiers.map((tier, index) => (
              <Card key={index} className={`hover:shadow-lg transition-shadow ${tier.featured ? 'ring-2 ring-brand-coral' : ''}`}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>{tier.name}</CardTitle>
                    {tier.featured && (
                      <Badge className="bg-brand-coral text-white">Most Popular</Badge>
                    )}
                  </div>
                  <CardDescription>{tier.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {tier.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center space-x-2 text-sm">
                        <div className="w-2 h-2 bg-brand-coral rounded-full"></div>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${tier.featured ? 'bg-brand-coral hover:bg-brand-coral/90' : ''}`}
                    variant={tier.featured ? 'default' : 'outline'}
                    asChild
                  >
                    <Link href="/membership/apply">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reciprocal Clubs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">Reciprocal Club Network</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Enjoy privileges at prestigious clubs around the world as part of our extensive reciprocal network.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {reciprocalClubs.map((club, index) => (
              <Card key={index} className="text-center p-4">
                <h3 className="font-semibold">{club.name}</h3>
                <p className="text-sm text-muted-foreground">{club.location}</p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link href="/membership/reciprocity">View All Reciprocal Clubs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-brand-sand">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">How to Apply</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join our exclusive community through our straightforward application process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-brand-coral rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                1
              </div>
              <h3 className="font-semibold mb-2">Submit Application</h3>
              <p className="text-sm text-muted-foreground">Complete our membership application form</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-brand-coral rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                2
              </div>
              <h3 className="font-semibold mb-2">Club Tour</h3>
              <p className="text-sm text-muted-foreground">Schedule a personal tour of our facilities</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-brand-coral rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                3
              </div>
              <h3 className="font-semibold mb-2">Review Process</h3>
              <p className="text-sm text-muted-foreground">Application review by membership committee</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-brand-coral rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                4
              </div>
              <h3 className="font-semibold mb-2">Welcome</h3>
              <p className="text-sm text-muted-foreground">Enjoy all the privileges of membership</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-brand-coral hover:bg-brand-coral/90" asChild>
              <Link href="/membership/apply">Start Your Application</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
            Have Questions?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our membership team is here to help you learn more about the benefits and application process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-brand-coral hover:bg-brand-coral/90" asChild>
              <Link href="/membership/faqs">View FAQs</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/about/contact">Contact Membership</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}