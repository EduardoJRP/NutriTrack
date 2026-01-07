import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { createServerClient } from '@supabase/ssr';

export async function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;
  const res = NextResponse.next();

  // Paths that require login
  const protectedPaths = ['/recipes', '/profile', '/intakeLog', '/help'];

  // Supabase SSR client reads cookies from request and can write to response
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll: () => req.cookies.getAll(), // read cookies from request
        setAll: (cookiesToSet) => {
          cookiesToSet.forEach(({ name, value, options }) =>
            res.cookies.set(name, value, options) // write cookies to response
          );
        },
      },
    }
  );

  const { data: { user } } = await supabase.auth.getUser();

  // Redirect logged-in users away from /login
  if (user && pathname === '/login') {
    return NextResponse.redirect(new URL('/', req.url));
  }

  // Redirect logged-out users from protected paths to /login
  if (!user && protectedPaths.some((path) => pathname.startsWith(path))) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return res;
}

export const config = {
  matcher: [
    '/login',
    '/recipes/:path*',
    '/profile/:path*',
    '/intakeLog/:path*',
    '/help/:path*',
  ],
};
