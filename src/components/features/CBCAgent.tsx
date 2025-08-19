'use client'

import React, { useEffect } from 'react'

interface CBCAgentProps {
  context?: string
  className?: string
}

export function CBCAgent({ context = 'general', className = '' }: CBCAgentProps) {
  useEffect(() => {
    // Only load the agent if enabled
    if (process.env.NEXT_PUBLIC_CBC_AGENT_ENABLED !== 'true') {
      return
    }

    const src = process.env.NEXT_PUBLIC_CBC_AGENT_SRC
    if (!src) {
      console.warn('CBC Agent is enabled but no source URL provided')
      return
    }

    // Check if script is already loaded
    if (document.querySelector(`script[src="${src}"]`)) {
      return
    }

    const script = document.createElement('script')
    script.src = src
    script.async = true
    script.onload = () => {
      console.log('CBC Agent loaded successfully')
    }
    script.onerror = () => {
      console.error('Failed to load CBC Agent')
    }

    document.head.appendChild(script)

    return () => {
      // Cleanup if needed
      const existingScript = document.querySelector(`script[src="${src}"]`)
      if (existingScript) {
        document.head.removeChild(existingScript)
      }
    }
  }, [])

  // Don't render if not enabled
  if (process.env.NEXT_PUBLIC_CBC_AGENT_ENABLED !== 'true') {
    return null
  }

  return (
    <div 
      id="cbc-agent" 
      data-context={context}
      className={className}
    />
  )
}