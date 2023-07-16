import React, { useEffect } from "react";
import Image from "next/image";
import { SiGithub } from "react-icons/si";
import { useTranslation } from "react-i18next";

import github from "../assets/images/giphy.gif";
import { MdOpenInNew } from "react-icons/md";

export default function GithubCard() {
  const [t, i18n] = useTranslation("global");
  return (
    <a
      href="https://github.com/orloxx23"
      target="_blank"
      rel="noopener noreferrer"
      className=" rounded-3xl col-span-2 overflow-hidden cursor-pointer hover:scale-[103%] transition duration-300 ease-in-out"
    >
      <div className="relative w-full h-full p-4 md:p-8 bg-[#00000077]">
        <Image
          className="absolute w-full h-full object-cover object-center top-0 left-0 -z-10"
          src={github}
          width={498}
          height={280}
          alt=""
          loading="lazy"
        />
        <MdOpenInNew className="absolute right-4 bottom-4 top-auto md:right-8 md:top-8 text-xl text-white dark:text-[#ffffffaa]"/>
        <div className="w-full h-full flex flex-col justify-between">
          <SiGithub
            color="white"
            className="text-xs md:text-5xl hidden md:flex"
          />
          <div className="">
            <h2 className="text-white text-sm md:text-xl lg:text-3xl font-bold">Github</h2>
            <p className="text-white text-sm md:text-md lg:text-2xl">{t("github")}</p>
          </div>
        </div>
      </div>
    </a>
  );
}
