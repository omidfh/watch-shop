import { auth } from "./app/_lib/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  const isLoggedIn = !!req.auth;
  const { nextUrl } = req;

  // Check if the user is trying to access a protected route
  const isProtectedRoute = nextUrl.pathname.startsWith("/profile");

  // If trying to access protected route but not logged in, redirect to login
  if (isProtectedRoute && !isLoggedIn) {
    return NextResponse.redirect(new URL("/login", nextUrl));
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    // Match all paths that start with profile
    "/profile/:path*",
    // Add other routes you want to protect
  ],
};
