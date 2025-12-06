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
      className={`relative min-h-[80vh] flex items-center justify-center ${backgroundImage ? '' : 'bg-brand-sand'} ${className}`}
      style={backgroundImage ? {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      } : {}}
    >
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {subtitle && (
            <p className="text-lg md:text-xl text-white/90 font-medium mb-4 tracking-wide">
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
                  className="bg-brand-blue-dark hover:bg-brand-blue-dark/90 text-white px-8"
                  asChild
                >
                  <Link href={primaryCta.href}>{primaryCta.text}</Link>
                </Button>
              )}
              
              {secondaryCta && (
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white bg-transparent text-white hover:bg-white hover:text-brand-ink px-8 font-medium"
                  asChild
                >
                  <Link href={secondaryCta.href}>{secondaryCta.text}</Link>
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
      
    </section>
  )
}