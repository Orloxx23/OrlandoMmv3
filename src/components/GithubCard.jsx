import React from "react";
import Image from "next/image";
import { SiGithub } from "react-icons/si";

import github from "../assets/images/github.gif";
import github2 from "../assets/images/giphy.gif";

export default function GithubCard() {
  return (
    <a
      href="https://github.com/orloxx23"
      target="_blank"
      rel="noopener noreferrer"
      className=" rounded-3xl col-span-2 overflow-hidden cursor-pointer hover:scale-105 transition duration-300 ease-in-out"
    >
      <div className="relative w-full h-full p-4 md:p-8 bg-[#00000077]">
        <Image
          className="absolute w-full h-full object-cover object-center top-0 left-0 -z-10"
          src={github2}
          width={498}
          height={280}
        />
        <i class="fa-solid fa-arrow-up-right-from-square absolute right-4 bottom-4 top-auto md:right-8 md:top-8 text-white dark:text-[#ffffffaa]"></i>
        <div className="w-full h-full flex flex-col justify-between">
          <SiGithub color="white" className="text-xs md:text-5xl hidden md:flex"/>
          <div className="">
            <h1 className="text-white text-sm md:text-2xl font-bold">Github</h1>
            <p className="text-white text-sm md:text-md">
              My Github profile, where I upload my projects.
            </p>
          </div>
        </div>
      </div>
    </a>
  );
}
