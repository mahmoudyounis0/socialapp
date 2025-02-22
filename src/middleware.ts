import { NextRequest, NextResponse } from "next/server";

// Define protected routes
const protectedRoutes = ["/dashboard", "/profile", "/settings"];

export function middleware(req: NextRequest) {
  const token = req.cookies.get("authToken")?.value; // Get auth token from cookies
  const isProtectedRoute = protectedRoutes.includes(req.nextUrl.pathname);

  if (isProtectedRoute && !token) {
    // Redirect to login if trying to access a protected route
    return NextResponse.redirect(new URL("/signin", req.url));
  }

  return NextResponse.next(); // Continue to the requested page
}

// Apply middleware only to these routes
export const config = {
  matcher: ["/dashboard", "/profile", "/settings"],
};
