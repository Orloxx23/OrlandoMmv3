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
      className="flex flex-col justify-center items-center bg-[#000000d8] dark:bg-[#242424c0] rounded-3xl relative overflow-hidden col-span-1 aspect-square shadow-sm cursor-pointer hover:scale-[103%] transition duration-300 ease-in-out"
    >
      <MdOpenInNew className="absolute right-4 bottom-4 top-auto md:right-8 md:top-8 text-xl text-white dark:text-[#ffffffaa]" />
      {/* <BsTwitter className="text-4xl md:text-7xl lg:text-9xl text-white dark:text-[#ffffffaa]" /> */}
      <div className="w-1/2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-brand-x"
          width="100%"
          height="100%"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="#ffffff"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
          <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
        </svg>
      </div>
    </a>
  );
}
