import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface HeroProps {
  title: string
  subtitle?: string
  description?: string
  primaryCta?: {
    text: string
    href: string
  }
  secondaryCta?: {
    text: string
    href: string
  }
  backgroundImage?: string
  className?: string
}

export function Hero({
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  backgroundImage,
  className = ''
}: HeroProps) {
  return (
    <section 
      className={`relative min-h-[80vh] flex items-center justify-center ${className}`}
      style={backgroundImage ? {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      } : {}}
    >
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {subtitle && (
            <p className="text-lg md:text-xl text-brand-coral font-medium mb-4">
              {subtitle}
            </p>
          )}
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-semibold mb-6 text-white">
            {title}
          </h1>
          
          {description && (
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              {description}
            </p>
          )}
          
          {(primaryCta || secondaryCta) && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {primaryCta && (
                <Button 
                  size="lg" 
                  className="bg-brand-coral hover:bg-brand-coral/90 text-white px-8"
                  asChild
                >
                  <Link href={primaryCta.href}>{primaryCta.text}</Link>
                </Button>
              )}
              
              {secondaryCta && (
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-brand-ink px-8"
                  asChild
                >
                  <Link href={secondaryCta.href}>{secondaryCta.text}</Link>
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}