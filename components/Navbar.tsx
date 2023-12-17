import Image from "next/image";
import StickyNav from "./StickyNav";

const Navbar = () => {
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
          <p className="hidden md:flex">
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
          <p className="hidden md:flex">মানুষ হওয়ার জন্য শিক্ষা</p>
          <Image
            src="/images/mujib-logo.png"
            height={50}
            width={50}
            alt="Mujib Logo"
          />
        </div>
      </div>

      {/* second nav */}
      <StickyNav />
    </nav>
  );
};

export default Navbar;
