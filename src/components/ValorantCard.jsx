import axios from "axios";
import React from "react";
import useSWR from "swr";
import valorant from "../assets/images/valorant.webp";
import Image from "next/image";
// import { useTranslation } from "react-i18next";

export default function ValorantCard() {
  const [gradientStyle, setGradientStyle] = React.useState({});
  const [available, setAvailable] = React.useState(false);
  // const [t, i18n] = useTranslation("global");

  const { data, isLoading } = useSWR("/api/valorant", (url) =>
    axios
      .post(url, {
        params: {
          language: "es",
        },
      })
      .then((res) => {
        setAvailable(true);
        return res.data;
      })
      .catch((err) => {
        setAvailable(false);
      })
  );

  const handlePlay = () => {
    document.getElementById("agent-audio").play();
  };

  React.useEffect(() => {
    if (data) {
      const colors = data.agent?.backgroundGradient?.map(
        (color) => `#${color}`
      );
      const colorjoin = colors?.join(", ");
      const gradientStyle = {
        background: `linear-gradient(to bottom, ${colorjoin})`,
      };
      setGradientStyle(gradientStyle);
    }
  }, [data]);

  if (isLoading || !available) {
    return (
      <a
        href="https://tracker.gg/valorant/profile/riot/Nikkeey%2360HZ/overview"
        target="_blank"
        className="flex flex-col group rounded-3xl bg-red-700/50 relative col-span-1 aspect-square shadow-sm cursor-pointer hover:scale-[103%] transition duration-300 ease-in-out"
      >
        <Image src={valorant} className="animate-pulse" alt="valorant" />
      </a>
    );
  }

  return (
    <a
      href="https://tracker.gg/valorant/profile/riot/Nikkeey%2360HZ/overview"
      target="_blank"
      className={`text-white flex flex-col group rounded-3xl overflow-hidden md:overflow-hidden relative col-span-1 aspect-square shadow-sm cursor-pointer hover:scale-[103%] transition duration-300 ease-in-out`}
      style={gradientStyle}
      onClick={handlePlay}
    >
      
      <audio src={data?.agent?.audio} id="agent-audio"></audio>
      <img
        alt="agent"
        src={data?.agent?.image}
        className="absolute -left-5 md:-left-16 2xl:-left-24 scale-[1.9] -bottom-10 md:-bottom-36 z-[5] group-hover:scale-[2.1] transition duration-300 ease-in-out delay-[60ms]"
      />
      <div className="rounded-tl-3xl rounded-tr-3xl overflow-hidden w-full relative z-[3]">
        <img alt="card" src={data?.card?.wide} className="object-cover opacity-70" />
      </div>
      <div className="flex relative w-full p-2">
        <div className="absolute md:relative w-1/2 md:w-[40%] h-full md:bottom-0 top-0 left-0 z-0">
          <img
            alt="background"
            src={data?.agent?.background}
            className="absolute scale-200 opacity-30 object-cover"
          />
        </div>
        <img
          alt="rank"
          src={data?.rank?.icon}
          className="block md:hidden absolute right-1 z-10 md:static w-1/2"
        />
        <div className="w-full md:w-[60%] h-full flex flex-col overflow-hidden md:-translate-y-0 relative z-10">
          <p className="hidden md:block font-bold text-[0.70rem] md:text-lg 2xl:text-2xl text-center md:text-right">{`${data?.name}#${data?.tag}`}</p>
          <p className="hidden md:block text-xs text-right">{`lvl ${data?.level}`}</p>
          <div className="reltive w-full h-full flex flex-col justify-center items-center overflow-hidden">
            <img
              alt="rank"
              src={data?.rank?.icon}
              className="hidden md:block w-3/4 group-hover:drop-shadow-[0_0px_14px_#ffffff22] transition duration-300 ease-in-out "
            />
            <p className="hidden md:block text-xs md:text-base font-bold">
              {data?.rank?.name}
            </p>
          </div>
        </div>
      </div>
      <div className="valorant-back absolute top-0 left-0 w-full h-full opacity-40 blur-sm"></div>
    </a>
  );
}
