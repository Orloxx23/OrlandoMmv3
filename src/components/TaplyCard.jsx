import React from "react";
import taply from "@/assets/images/taply.png";
import Image from "next/image";

export default function TaplyCard() {
  return (
    <a
      href="https://orloxx23.github.io/Taply-page/"
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col justify-center items-center bg-[#0E1922] rounded-3xl relative overflow-hidden col-span-1 aspect-square shadow-sm cursor-pointer hover:scale-105 transition duration-300 ease-in-out"
    >
      <Image
        className="w-2/3 h-2/3 object-cover"
        src={taply}
        width={256}
        height={256}
        draggable="false"
        alt="Taply"
      />
    </a>
  );
}
