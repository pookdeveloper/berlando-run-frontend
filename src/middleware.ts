import { NextRequest, NextResponse } from 'next/server';

const LANDING_MODE = process.env.NEXT_PUBLIC_LANDING_MODE !== 'false';

const ALLOWED_PATHS = ['/', '/about', '/contact', '/community'];

export function middleware(request: NextRequest) {
  if (!LANDING_MODE) return NextResponse.next();

  const { pathname } = request.nextUrl;

  const isAllowed =
    ALLOWED_PATHS.some((p) => pathname === p || pathname.startsWith(p + '/')) ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.');

  if (!isAllowed) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
