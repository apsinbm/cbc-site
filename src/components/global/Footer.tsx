import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-brand-ink text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded-full bg-brand-coral"></div>
              <div className="font-serif text-lg font-semibold">
                <span className="cbc-gradient">CBC</span>
              </div>
            </Link>
            <p className="text-sm text-white/80 mb-4">
              Bermuda's premier private beach and tennis club, offering world-class amenities and hospitality since 1931.
            </p>
            <div className="flex space-x-4">
              <Button size="sm" variant="ghost" className="text-white hover:text-brand-coral">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" className="text-white hover:text-brand-coral">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" className="text-white hover:text-brand-coral">
                <Twitter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/stay" className="text-white/80 hover:text-brand-coral transition-colors">Accommodations</Link></li>
              <li><Link href="/dine" className="text-white/80 hover:text-brand-coral transition-colors">Dining</Link></li>
              <li><Link href="/play/tennis" className="text-white/80 hover:text-brand-coral transition-colors">Tennis</Link></li>
              <li><Link href="/play/spa" className="text-white/80 hover:text-brand-coral transition-colors">Spa</Link></li>
              <li><Link href="/gather" className="text-white/80 hover:text-brand-coral transition-colors">Events</Link></li>
              <li><Link href="/membership" className="text-white/80 hover:text-brand-coral transition-colors">Membership</Link></li>
            </ul>
          </div>

          {/* Member Services */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Member Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/member/today" className="text-white/80 hover:text-brand-coral transition-colors">Today at CBC</Link></li>
              <li><Link href="/member/calendar" className="text-white/80 hover:text-brand-coral transition-colors">Calendar</Link></li>
              <li><Link href="/member/reciprocal" className="text-white/80 hover:text-brand-coral transition-colors">Reciprocal Clubs</Link></li>
              <li><Link href="/member/reservations" className="text-white/80 hover:text-brand-coral transition-colors">Reservations</Link></li>
              <li><Link href="/member/profile" className="text-white/80 hover:text-brand-coral transition-colors">My Profile</Link></li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-sm text-white/80 mb-6">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span>Southampton, Bermuda</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+1 (441) 234-5678</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>hello@coralbeachclub.com</span>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Stay Updated</h4>
              <div className="flex space-x-2">
                <Input 
                  placeholder="Enter email" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
                <Button size="sm" className="bg-brand-coral hover:bg-brand-coral/90">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-white/60 mb-4 md:mb-0">
            © 2024 Coral Beach & Tennis Club. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link href="/privacy" className="text-white/60 hover:text-brand-coral transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-white/60 hover:text-brand-coral transition-colors">
              Terms of Service
            </Link>
            <Link href="/about/careers" className="text-white/60 hover:text-brand-coral transition-colors">
              Careers
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}