import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const authHeader = req.headers.get('authorization')

  if (authHeader) {
    const encoded = authHeader.split(' ')[1]
    const decoded = atob(encoded)
    const [user, pass] = decoded.split(':')

    if (
      user === process.env.AUTH_USER &&
      pass === process.env.AUTH_PASS
    ) {
      return NextResponse.next()
    }
  }

  return new NextResponse('Authentication required', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Secure Area"',
    },
  })
}

export const config = {
  matcher: '/:path*',
}