import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import useSWR from "swr";

import styles from "@/styles/TimeCard.module.css";

export default function DayComponent() {
  const { data, isLoading } = useSWR(`/api/weather`, (url) =>
    axios.get(url).then((res) => res.data)
  );

  const [time, setTime] = useState("");

  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Bogota",
    hour12: true,
    hour: "2-digit",
    minute: "2-digit",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(formatter.format(new Date()));
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="bg-[#089cffa4] w-full flex overflow-hidden bg-clip-padding text-white py-2 px-4 md:p-8">
      <div className="flex flex-col w-2/3 absolute z-10">
        <div className="flex items-center">
          <p className="text-lg md:text-9xl font-bold">{data?.main.temp + "°"}</p>
          <Image
            src={`https://openweathermap.org/img/wn/${data?.weather[0].icon}@2x.png`}
            width={100}
            height={100}
            className="w-5 h-5 md:w-28 md:h-28"
          />
        </div>
        <p className="capitalize text-xs md:text-4xl font-semibold md:mb-4">{data?.weather[0].description}</p>
        <p className="text-xs md:text-3xl">{time}</p>
        <p className="text-xs md:text-3xl">{data?.name}</p>
      </div>
      <div className="absolute right-0 top-0 flex justify-end pr-5 z-0 items-center w-full h-full ">
        <Sun />
      </div>
    </div>
  );
}

function Sun() {
  return (
    <div className={`${styles.hot} ${styles.container} w-20 h-20 md:w-56 md:h-56 right-5`}>
      <span className={`${styles.sun} w-10 h-10 md:w-24 md:h-24`}></span>
      <span className={styles.sunx}></span>
    </div>
  );
}
