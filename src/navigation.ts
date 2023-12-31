import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const locales = ["bn", "en"] as const;

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales });
