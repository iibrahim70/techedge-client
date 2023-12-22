"use client";
import { useTranslations } from "next-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";

const Hero = () => {
  const t = useTranslations("Index");

  const imagePaths = [
    "/images/hero/1.jpg",
    "/images/hero/2.jpg",
    "/images/hero/3.jpg",
    "/images/hero/4.jpg",
    "/images/hero/5.jpg",
    "/images/hero/6.jpg",
    "/images/hero/7.jpg",
    "/images/hero/8.jpg",
    "/images/hero/9.jpg",
    "/images/hero/10.jpg",
  ];

  return (
    <section>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {imagePaths.map((path, index) => (
          <SwiperSlide key={index}>
            <Image
              src={path}
              alt={`College Image ${index + 1}`}
              width="0"
              height="0"
              sizes="100dvw"
              className="h-[50vh] lg:h-[70vh] w-full object-cover object-center"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="bg-black text-white/90">
        <div className="section-width py-5 flex items-center justify-between gap-10 lg:gap-5">
          {/* left */}
          <div className="flex items-center justify-center gap-5">
            <Image
              width={40}
              height={40}
              src="/images/logo/awward-logo.png"
              alt="Awward Logo"
            />
            <p>{t("Awards.InnovativeProject")}</p>
          </div>

          {/* middle */}
          <div className="flex items-center justify-center gap-5">
            <Image
              width={40}
              height={40}
              src="/images/logo/awward-logo.png"
              alt="Awward Logo"
            />
            <p>{t("Awards.SocialProgram")}</p>
          </div>

          {/* right */}
          <div className="flex items-center justify-center gap-5">
            <Image
              width={40}
              height={40}
              src="/images/logo/awward-logo.png"
              alt="Awward Logo"
            />
            <p>{t("Awards.BestUniversity")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
