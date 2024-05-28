import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const currentUser = request.cookies.getAll();

  // if (currentUser && !request.nextUrl.pathname.startsWith("/customer-order")) {
  //   return Response.redirect(new URL("/customer-order", request.url));
  // }

  // if (!currentUser && !request.nextUrl.pathname.startsWith("/login")) {
  //   return Response.redirect(new URL("/login", request.url));
  // }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
