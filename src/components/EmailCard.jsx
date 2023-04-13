import React from "react";

export default function EmailCard() {
  return (
    <a
      href="mailto:orminamadro@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="flex flex-col justify-center items-center bg-[#4032ff9c] dark:bg-[#7785ff56] rounded-3xl relative overflow-hidden col-span-1 aspect-square shadow-sm cursor-pointer hover:scale-105 transition duration-300 ease-in-out">
        <i class="fa-solid fa-arrow-up-right-from-square absolute right-4 bottom-4 top-auto md:right-8 md:top-8 text-white dark:text-[#ffffffaa]"></i>
        <i className="fa-solid fa-envelope text-4xl md:text-9xl text-white dark:text-[#ffffffaa]"></i>
      </div>
    </a>
  );
}
