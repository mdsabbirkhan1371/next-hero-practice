import { NextResponse } from 'next/server';

export const middleware = request => {
  return NextResponse.redirect(new URL('/about/vision', request.url));
};

export const config = {
  matcher: '/about',
};
