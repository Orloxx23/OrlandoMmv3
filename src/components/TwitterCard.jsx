import React from "react";
import { BsTwitter } from "react-icons/bs";
import { MdOpenInNew } from "react-icons/md";

export default function TwitterCard() {
  return (
    <a
      href="https://twitter.com/orloxx23"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Twitter"
      className="flex flex-col justify-center items-center bg-[#11dbff9c] dark:bg-[#49d5ff56] rounded-3xl relative overflow-hidden col-span-1 aspect-square shadow-sm cursor-pointer hover:scale-[103%] transition duration-300 ease-in-out"
    >
      <MdOpenInNew className="absolute right-4 bottom-4 top-auto md:right-8 md:top-8 text-xl text-white dark:text-[#ffffffaa]" />
      <BsTwitter className="text-4xl md:text-7xl lg:text-9xl text-white dark:text-[#ffffffaa]" />
    </a>
  );
}
