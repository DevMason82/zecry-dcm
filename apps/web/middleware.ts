import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher(["/sign-in(.*)"]);
// const isPublicRoute = createRouteMatcher([
//   "/",
//   "/(auth)(.*)", // 인증 라우트 그룹은 공개(사이드바 없음)
//   "/favicon.ico",
//   "/sw.js",
//   "/api/webhooks/(.*)",
//   "/_next/(.*)",
//   "/static/(.*)",
// ]);

export default clerkMiddleware(async (auth, req) => {
  if (!isPublicRoute(req)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
