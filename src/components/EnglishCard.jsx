import React from "react";
import { useTranslation } from "react-i18next";
import { MdOpenInNew } from "react-icons/md";

export default function EnglishCard() {
  const [t, i18n] = useTranslation("global");
  
  return (
    <a
      href="https://www.efset.org/cert/Y5Zk3T"
      target="_blank"
      rel="noopener noreferrer"
      className="text-white relative rounded-3xl flex overflow-hidden aspect-square shadow-sm bg-[#2ab9adb9] p-4 justify-center items-center hover:scale-[103%] transition duration-500 ease-in-out cursor-pointer"
    >
      <MdOpenInNew className="absolute right-4 bottom-4 top-auto md:right-8 md:top-8 text-xl text-white dark:text-[#ffffffaa]"/>
      <div className="">
        <div className="flex justify-center items-center flex-col">
          <p className="text-xs hidden md:block md:text-lg text-center uppercase font-base">
            {t("certificates.enlvl")}
          </p>
          <p className="text-4xl md:text-9xl font-bold">B2</p>
          <p className="text-xs md:text-xl uppercase font-semibold text-center">
            EF SET
          </p>
        </div>
      </div>
    </a>
  );
}
