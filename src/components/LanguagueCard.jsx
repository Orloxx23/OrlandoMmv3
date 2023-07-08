import moment from "moment";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function LanguagueCard() {
  const [t, i18n] = useTranslation("global");

  const [language, setLanguage] = React.useState("en");

  useEffect(() => {
    const item = localStorage.getItem("language");
    if (item) {
      setLanguage(item);
      changeLanguage(item);
    } else {
      localStorage.setItem("language", "en");
      setLanguage("en");
      changeLanguage("en");
    }
  }, []);

  const toggleLanguage = () => {
    if (language === "en") {
      changeLanguage("es");
    } else {
      changeLanguage("en");
    }
  };

  const changeLanguage = (lng) => {
    if (lng === language) return;

    moment.locale(lng);
    i18n.changeLanguage(lng);
    setLanguage(lng);
    localStorage.setItem("language", lng);
  };

  useEffect(() => {
    changeLanguage(i18n.language);
  }, [i18n.language]);

  return (
    <div
      onClick={toggleLanguage}
      className="flex flex-col justify-center items-center bg-[#1c053a9c] dark:bg-[#af72ff56] rounded-3xl relative overflow-hidden col-span-1 aspect-square shadow-sm cursor-pointer hover:scale-[103%] transition duration-300 ease-in-out"
    >
      <p className="font-semibold uppercase text-white dark:text-white text-5xl md:text-8xl">
        {language}
      </p>
      <p className="font-bold transition duration-300 ease-in-out ">
        <span className={language === "en" ? "text-purple-400" : "text-white"}>EN</span>{" "}
        <span className={language === "es" ? "text-purple-400" : "text-white"}>ES</span>
      </p>
    </div>
  );
}
