"use client";
import Link from "next/link";
import ThemeSwitcher from "./switchers/ThemeSwitcher";
import LanguageSwitcher from "./switchers/LanguageSwitcher";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { Button } from "./ui/button";

const StickyNav = () => {
  const t = useTranslations("Index");
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos <= 82) {
        // At or above the height of the top navigation bar
        setIsSticky(false);
      } else if (prevScrollPos > currentScrollPos) {
        // Scrolling up
        setIsSticky(true);
      } else {
        // Scrolling down
        setIsSticky(false);
      }

      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={clsx(
        "bg-blue text-white transition-all duration-700",
        isSticky && "fixed top-0 left-0 right-0"
      )}
    >
      <div className="section-width py-4">
        <div className="flex items-center justify-between flex-wrap gap-y-5">
          {/* left */}
          <div className="flex justify-between gap-5">
            <Link href="#">{t("Nav.Home")}</Link>
            <Link href="#">{t("Nav.Admission")}</Link>
            <Link href="#">{t("Nav.Academic")}</Link>
            <Link href="#">{t("Nav.Gallery")}</Link>
            <Link href="#">{t("Nav.Notice")}</Link>
            <Link href="#">{t("Nav.Management")}</Link>
          </div>

          {/* right */}
          <div className="flex justify-between gap-5">
            <div className="flex items-center gap-2">
              {/* language switcher */}
              <LanguageSwitcher />

              {/* theme switcher */}
              <ThemeSwitcher />
            </div>

            <Button size="sm">{t("Button.one")}</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyNav;
