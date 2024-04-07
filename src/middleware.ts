import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export default authMiddleware({
  publicRoutes: ["/", "/favicon.ico"],
  ignoredRoutes: ["/favicon.ico", "/((?!api|trpc))(_next.*|.+.[w]+$)", "/"],
  // afterAuth(auth, req, evt) {
  //   // Handle users who aren't authenticated
  //   if (!auth.userId && !auth.isPublicRoute) {
  //     return redirectToSignIn({ returnBackUrl: req.url });
  //   }
  //   // Redirect signed in users to organization selection page if they are not active in an organization
  //   if (
  //     auth.userId &&
  //     !auth.orgId &&
  //     req.nextUrl.pathname !== "/org-selection"
  //   ) {
  //     const orgSelection = new URL("/org-selection", req.url);
  //     return NextResponse.redirect(orgSelection);
  //   }
  //   // If the user is signed in and trying to access a protected route, allow them to access route
  //   if (auth.userId && !auth.isPublicRoute) {
  //     return NextResponse.next();
  //   }
  //   // Allow users visiting public routes to access them
  //   return NextResponse.next();
  // },
});

export const config = {
  matcher: [
    // Exclude files with a "." followed by an extension, which are typically static files.
    // Exclude files in the _next directory, which are Next.js internals.
    "/((?!.+\\.[\\w]+$|_next).*)",
    // Re-include any files in the api or trpc folders that might have an extension
    "/(api|trpc)(.*)",
  ],
  ignoredRoutes: ["/favicon.ico"],
};
