'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { MessageCircle } from 'lucide-react'

interface WhatsAppButtonProps {
  number?: string
  message?: string
  className?: string
}

export function WhatsAppButton({ 
  number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '+14412365535', 
  message = 'Hello! I have a question about Coral Beach & Tennis Club.',
  className = ''
}: WhatsAppButtonProps) {
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${number.replace(/[^\d]/g, '')}?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <Button
      onClick={handleClick}
      size="lg"
      className={`fixed bottom-6 right-6 z-50 rounded-full h-14 w-14 bg-green-500 hover:bg-green-600 shadow-lg ${className}`}
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </Button>
  )
}