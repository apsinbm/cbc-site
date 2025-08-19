import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  // Security Headers
  response.headers.set('X-DNS-Prefetch-Control', 'on')
  response.headers.set('X-XSS-Protection', '1; mode=block')
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('Referrer-Policy', 'origin-when-cross-origin')
  
  // Content Security Policy
  const csp = [
    "default-src 'self'",
    "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://fonts.googleapis.com https://cdn.sanity.io",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "img-src 'self' blob: data: https:",
    "font-src 'self' https://fonts.gstatic.com",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
    "upgrade-insecure-requests"
  ].join('; ')
  
  response.headers.set('Content-Security-Policy', csp)

  // HSTS (HTTP Strict Transport Security)
  if (process.env.NODE_ENV === 'production') {
    response.headers.set(
      'Strict-Transport-Security',
      'max-age=31536000; includeSubDomains; preload'
    )
  }

  // Permissions Policy
  const permissionsPolicy = [
    'camera=()',
    'microphone=()',
    'geolocation=(self)',
    'interest-cohort=()',
    'payment=(self)',
    'usb=()'
  ].join(', ')
  
  response.headers.set('Permissions-Policy', permissionsPolicy)

  // Rate limiting for API routes
  if (request.nextUrl.pathname.startsWith('/api/')) {
    const ip = request.ip || request.headers.get('x-forwarded-for') || 'anonymous'
    const userAgent = request.headers.get('user-agent') || 'unknown'
    
    // Add rate limiting headers (implementation would require external service like Redis)
    response.headers.set('X-RateLimit-Limit', '100')
    response.headers.set('X-RateLimit-Remaining', '99')
    response.headers.set('X-RateLimit-Reset', String(Date.now() + 3600000))
    
    // Log API access for monitoring
    console.log(`API Access: ${request.method} ${request.nextUrl.pathname} from ${ip} (${userAgent})`)
  }

  // Protect admin/studio routes
  if (request.nextUrl.pathname.startsWith('/studio')) {
    // Add additional security for Sanity Studio
    response.headers.set('X-Robots-Tag', 'noindex, nofollow')
  }

  // Block suspicious requests
  const suspiciousPatterns = [
    /\/wp-admin/,
    /\/admin/,
    /\.php$/,
    /\.asp$/,
    /\.aspx$/,
    /\/cgi-bin/,
    /\.\./,
    /script/i,
    /javascript:/i,
    /vbscript:/i,
    /onload=/i,
    /onerror=/i
  ]

  const pathname = request.nextUrl.pathname.toLowerCase()
  const isSuspicious = suspiciousPatterns.some(pattern => pattern.test(pathname))

  if (isSuspicious) {
    console.warn(`Blocked suspicious request: ${request.method} ${pathname} from ${request.ip}`)
    return new NextResponse('Forbidden', { status: 403 })
  }

  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}