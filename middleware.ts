import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  console.log('Middleware triggered for:', request.url);
  return NextResponse.next(); // Allow the request to continue
}

export const config = {
  matcher: '/:path*', // Apply middleware to all routes
};
