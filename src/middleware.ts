import { type NextRequest, NextResponse } from "next/server"

export function middleware(req: NextRequest) {
  const token = req.cookies.get("authToken")?.value
  const isProtectedRoute = req.nextUrl.pathname.startsWith("/social")
  const isAuthRoute = ["/signin", "/signup"].includes(req.nextUrl.pathname)

  if (isProtectedRoute && !token) {
    // Redirect to login if trying to access a protected route without a token
    return NextResponse.redirect(new URL("/signin", req.url))
  }

  if (isAuthRoute && token) {
    // Redirect to /social if trying to access auth routes while logged in
    return NextResponse.redirect(new URL("/social", req.url))
  }

  return NextResponse.next()
}

// Apply middleware to all routes
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
}

