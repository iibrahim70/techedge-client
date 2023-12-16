import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["bn", "en"],

  // Used when no locale matches
  defaultLocale: "bn",
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(bn|en)/:path*"],
};
