import React from "react";
import { MdEmail, MdOpenInNew } from "react-icons/md";

export default function EmailCard() {
  return (
    <a
      href="mailto:orminamadro@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Email"
      className="flex flex-col justify-center items-center bg-[#4032ff9c] dark:bg-[#7785ff56] rounded-3xl relative overflow-hidden col-span-1 aspect-square shadow-sm cursor-pointer hover:scale-[103%] transition duration-300 ease-in-out"
    >
      <MdOpenInNew className="absolute right-4 bottom-4 top-auto md:right-8 md:top-8 text-xl text-white dark:text-[#ffffffaa]" />
      <MdEmail className="text-4xl md:text-7xl lg:text-9xl text-white dark:text-[#ffffffaa]" />
    </a>
  );
}
