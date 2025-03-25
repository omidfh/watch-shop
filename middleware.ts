import { auth } from "@/app/_lib/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  const isLoggedIn = !!req.auth;
  const { nextUrl } = req;

  // Protected routes
  const protectedRoutes = ["/profile"];
  const authRoutes = ["/login", "/signup"];

  // Check if trying to access a protected route without authentication
  if (
    protectedRoutes.some((route) => nextUrl.pathname.startsWith(route)) &&
    !isLoggedIn
  ) {
    return NextResponse.redirect(new URL("/login", nextUrl));
  }

  // Redirect logged-in users away from auth routes
  if (authRoutes.includes(nextUrl.pathname) && isLoggedIn) {
    return NextResponse.redirect(new URL("/", nextUrl));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/profile/:path*", "/login", "/signup"],
};
