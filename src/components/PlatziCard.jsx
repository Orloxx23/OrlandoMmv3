import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";
import ConfettiExplosion from "react-confetti-explosion";

import certificated from "@/assets/images/ej.webp";
import { MdOpenInNew } from "react-icons/md";

export default function PlatziCard() {
  const [t, i18n] = useTranslation("global");
  const [isExploding, setIsExploding] = React.useState(false);

  const handleHover = () => {
    setIsExploding(true);
  };

  return (
    <a
      href="https://platzi.com/p/orlandomm/ruta/100-javascript-full-stack/diploma/detalle/"
      target="_blank"
      rel="noopener noreferrer"
      id="container"
      onMouseEnter={handleHover}
      className="relative flex items-center gap-4 p-3 md:p-7 lg:p-8 rounded-3xl md:col-span-2 col-span-2 row-span-1 overflow-hidden bg-[#96c93ec7] hover:scale-[103%] transition duration-300 ease-in-out"
    >
      <div className="absolute w-full h-full z-20 left-0 flex justify-center items-center pointer-events-none">
        {isExploding && (
          <ConfettiExplosion
            className="absolute left-auto top-auto"
            width={1600}
            force={0.8}
            onComplete={() => setIsExploding(false)}
          />
        )}
      </div>
      <MdOpenInNew className="absolute right-4 bottom-4 top-auto md:right-8 md:top-8 text-xl text-white dark:text-[#ffffffaa]"/>
      <Image src={certificated} className="w-1/3 md:w-6/12" alt=""/>
      <div className="w-full">
        <p className="text-xs md:text-3xl font-bold text-white capitalize">
          {t("certificates.platzi")}
        </p>
        <p></p>
        <p className="text-white text-xs md:text-xl">Platzi - 2023</p>
      </div>
    </a>
  );
}
