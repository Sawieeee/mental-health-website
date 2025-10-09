import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const auth = req.cookies.get("auth")?.value;
  if (!auth) {
    const loginUrl = new URL("/login", req.url);
    // Optionally capture where the user was headed, for future use
    loginUrl.searchParams.set("returnTo", req.nextUrl.pathname + req.nextUrl.search);
    // Add a small hint message for the login page
    loginUrl.searchParams.set("msg", "login_required");
    return NextResponse.redirect(loginUrl);
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/assessment/:path*",
    "/directory/:path*",
  ],
};
