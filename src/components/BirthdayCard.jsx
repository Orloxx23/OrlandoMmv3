import React from "react";
import moment from "moment";
import { useTranslation } from "react-i18next";

export default function BirthdayCard() {
  const [t, i18n] = useTranslation("global");

  const getAge = () => {
    let age = moment().diff(moment([2002, 4, 23]), "years");
    return age;
  };

  const getBirthday = () => {
    let year = moment().year();
    let month = moment().month() + 1;
    let day = moment().date();
    console.log("🚀 ~ file: BirthdayCard.jsx:19 ~ getBirthday ~ day:", day);

    if (month > 5 && day > 23) year += 1;

    let birthday = moment([year, 5, 23]);
    return birthday.diff(moment(), "days");
  };

  return (
    <div className="text-white rounded-3xl flex relative overflow-hidden aspect-square shadow-sm bg-[#ff4848d3] p-4 justify-center items-center">
      <div className="">
        {/* <Image src={birthday} alt="" width="100" /> */}
        <div className="flex justify-center items-center flex-col">
          <p className="text-xs md:text-lg uppercase font">
            {t("birthday.age")}
          </p>
          <p className="text-4xl md:text-8xl font-bold">{getAge()}</p>
          <p className="text-xs md:text-xl uppercase font-semibold text-center">
            {t("birthday.years-old")}
          </p>
        </div>
        {/* <p className="text-sm hidden md:flex">{`${getBirthday()} ${t("birthday.time")}`}</p> */}
      </div>
    </div>
  );
}
