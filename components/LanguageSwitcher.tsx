"use client";
import { Link } from "@/navigation";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const LanguageSwitcher = () => {
  const pathname = usePathname();

  return (
    <div className="flex gap-2 bg-white text-black py-1 px-2 rounded-xl font-semibold">
      <Link locale="en" href="/">
        <small
          className={clsx(
            pathname.includes("/en") ? "bg-yellow py-1 px-2 rounded-full" : ""
          )}
        >
          ENG
        </small>
      </Link>

      <Link locale="bn" href="/">
        <small
          className={clsx(
            pathname.includes("/bn") ? "bg-yellow py-1 px-2 rounded-full" : ""
          )}
        >
          বাংলা
        </small>
      </Link>
    </div>
  );
};

export default LanguageSwitcher;
