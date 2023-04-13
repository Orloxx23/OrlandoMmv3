import React from "react";

export default function TwitterCard() {
  return (
    <a
      href="https://twitter.com/orloxx23"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="flex flex-col justify-center items-center bg-[#11b4ff9c] dark:bg-[#49a7ff56] rounded-3xl relative overflow-hidden col-span-1 aspect-square shadow-sm cursor-pointer hover:scale-105 transition duration-300 ease-in-out">
        <i className="fa-solid fa-arrow-up-right-from-square absolute right-4 bottom-4 top-auto md:right-8 md:top-8 text-white dark:text-[#ffffffaa]"></i>
        <i className="fa-brands fa-twitter text-4xl md:text-9xl text-white dark:text-[#ffffffaa]"></i>
      </div>
    </a>
  );
}
