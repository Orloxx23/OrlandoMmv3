import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import useSWR from "swr";

import styles from "@/styles/TimeCard.module.css";
import { useTranslation } from "react-i18next";

export default function NightComponent() {
  const [t, i18n] = useTranslation("global");
  const { data, isLoading } = useSWR(`/api/weather/${i18n.language}`, (url) =>
    axios.get(url).then((res) => res.data)
  );

  const [time, setTime] = useState("");

  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Bogota",
    hour12: true,
    hour: "numeric",
    minute: "numeric",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(formatter.format(new Date()));
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="bg-[#001324] w-full flex overflow-hidden bg-clip-padding text-white py-2 px-4 lg:p-8">
      <div className="flex flex-col justify-center lg:h-full w-2/3 absolute lg:static z-10">
        <div className="flex items-center">
          <p className="text-lg md:text-5xl lg:text-7xl font-bold">
            {data?.main.temp + "°"}
          </p>
          <Image
            src={`https://openweathermap.org/img/wn/${data?.weather[0].icon}@2x.png`}
            width={100}
            height={100}
            className="w-5 h-5 lg:w-20 lg:h-20"
            draggable="false"
            alt=""
          />
        </div>
        <p className="capitalize text-xs md:text-xl lg:text-2xl font-semibold lg:mb-0">
          {data?.weather[0].description}
        </p>
        <p className="text-xs md:text-md lg:text-xl">{time}</p>
        <p className="text-xs md:text-md lg:text-xl">
          {data?.name + ", " + data?.sys.country}
        </p>
      </div>
      <div className="absolute right-0 top-0 flex justify-end pr-5 z-0 items-center w-full h-full overflow-hidden">
        <Moon />
      </div>
    </div>
  );
}

function Moon() {
  return (
    <div
      className={`${styles.night} ${styles.container} w-20 h-20 lg:w-56 lg:h-56 right-5`}
    >
      <span className={`${styles.moon} w-10 h-10 lg:w-24 lg:h-24`}></span>
      <span className={styles.spot1}></span>
      <span className={styles.spot2}></span>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
}
