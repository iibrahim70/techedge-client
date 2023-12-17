import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import ThemeSwitcher from "./ThemeSwitcher";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  const t = useTranslations("Index");

  return (
    <nav className="bg-white text-black">
      {/* first nav */}
      <div className="section-width flex items-center justify-between py-4">
        {/* left */}
        <div className="flex items-center gap-2 w-1/3">
          <Image
            src="/images/hasina-logo.png"
            height={50}
            width={50}
            alt="Hasina Logo"
          />
          <p>
            শিক্ষা নিয়ে গরব দেশ <br /> শেখ হাসিনার বাংলাদেশ
          </p>
        </div>

        {/* middle */}
        <div className="w-1/3 flex justify-center">
          <Image
            src="/images/college-logo.png"
            height={50}
            width={50}
            alt="College Logo"
          />
        </div>

        {/* right */}
        <div className="flex gap-2 justify-end items-center w-1/3">
          <p>মানুষ হওয়ার জন্য শিক্ষা</p>
          <Image
            src="/images/mujib-logo.png"
            height={50}
            width={50}
            alt="Mujib Logo"
          />
        </div>
      </div>

      {/* second nav */}
      <div className="bg-blue text-white">
        <div className="section-width py-4">
          <div className="flex justify-between">
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
            <div className="flex justify-between gap-10">
              <div className="flex items-center gap-2">
                {/* language switcher */}
                <LanguageSwitcher />

                {/* theme switcher */}
                <ThemeSwitcher />
              </div>

              <button>{t("Button.one")}</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
