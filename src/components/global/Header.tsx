'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Menu, X, ChevronDown } from 'lucide-react'

interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}

const navigation: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Stay',
    href: '/stay',
    children: [
      { label: 'Rooms & Suites', href: '/stay/rooms' },
      { label: 'Cottages', href: '/stay/cottages' },
    ]
  },
  {
    label: 'Dine',
    href: '/dine',
    children: [
      { label: 'Venues', href: '/dine/venues' },
      { label: 'Menus', href: '/dine/menus' },
      { label: 'Reservations', href: '/dine/reservations' },
    ]
  },
  {
    label: 'Play',
    href: '/play',
    children: [
      { label: 'Tennis', href: '/play/tennis' },
      { label: 'Spa', href: '/play/spa' },
      { label: 'Beach & Pool', href: '/play/beach' },
      { label: 'Activities & Fitness', href: '/play/activities' },
    ]
  },
  {
    label: 'Gather',
    href: '/gather',
    children: [
      { label: 'Weddings', href: '/gather/weddings' },
      { label: 'Meetings & Occasions', href: '/gather/meetings' },
      { label: 'Venues', href: '/gather/venues' },
    ]
  },
  { label: "What's On", href: '/whats-on' },
  {
    label: 'Membership',
    href: '/membership',
    children: [
      { label: 'Benefits', href: '/membership/benefits' },
      { label: 'Become a Member', href: '/membership/apply' },
      { label: 'Reciprocity', href: '/membership/reciprocity' },
      { label: 'FAQs', href: '/membership/faqs' },
    ]
  },
  {
    label: 'About',
    href: '/about',
    children: [
      { label: 'Our Story', href: '/about/story' },
      { label: 'Meet the Team', href: '/about/team' },
      { label: 'Press', href: '/about/press' },
      { label: 'Careers', href: '/about/careers' },
      { label: 'Contact', href: '/about/contact' },
    ]
  },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-10 w-10 rounded-full bg-brand-coral"></div>
            <div className="font-serif text-xl font-semibold text-brand-ink">
              <span className="cbc-gradient">CBC</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center space-x-1 text-sm font-medium text-muted-foreground transition-colors hover:text-brand-coral"
                >
                  <span>{item.label}</span>
                  {item.children && <ChevronDown className="h-3 w-3" />}
                </Link>
                
                {item.children && activeDropdown === item.label && (
                  <Card className="absolute left-0 top-full mt-2 w-56 p-2 shadow-lg">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </Card>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <Link href="/login">Member Login</Link>
            </Button>
            <Button asChild className="bg-brand-coral hover:bg-brand-coral/90">
              <Link href="/about/contact">Contact Us</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t py-4">
            <nav className="space-y-2">
              {navigation.map((item) => (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    className="block py-2 text-sm font-medium text-muted-foreground"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="ml-4 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block py-1 text-sm text-muted-foreground/80"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="border-t pt-4 space-y-2">
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                    Member Login
                  </Link>
                </Button>
                <Button className="w-full bg-brand-coral hover:bg-brand-coral/90" asChild>
                  <Link href="/about/contact" onClick={() => setIsMenuOpen(false)}>
                    Contact Us
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}