import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Autoplay } from "swiper";

import "swiper/css";

import { projects } from "@/data/projects";
import { useTranslation } from "react-i18next";
import Link from "next/link";

export default function ProjectsCard() {
  const [t, i18n] = useTranslation("global");
  return (
    <Link href="/projects" scroll={false} className="relative rounded-3xl col-span-3 aspect-2/1 md:aspect-auto overflow-hidden hover:scale-105 transition duration-500 ease-in-out">
      <i className="fa-solid fa-arrow-up-right-from-square absolute right-4 bottom-4 top-auto md:right-8 md:top-8 text-white dark:text-[#ffffffaa] z-10"></i>
      <div className="w-full h-full absolute top-0 left-0 text-white p-4 md:p-8 z-10 pointer-events-none">
        <p className="font-bold text-xl md:text-3xl lg:text-5xl">{t("projectsandtest.title")}</p>
        <p className="font-base text-md md:text-2xl lg:text-2xl md:w-4/5 lg:w-3/5 lg:mt-4">{t("projectsandtest.description")}</p>
      </div>
      <Swiper
        className="w-full h-full"
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        loop={true}
      >
        {projects.slice(0, 3).map((project, index) => (
          <SwiperSlide key={index}>
            <div className="bg-[#000000] w-full h-full absolute top-0 left-0">
              <Image
                className="h-full w-full object-cover object-center opacity-50 blur-sm"
                src={project.images.main}
                alt=""
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Link>
  );
}
