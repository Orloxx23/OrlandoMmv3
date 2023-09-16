import axios from "axios";
import React from "react";
import useSWR from "swr";
import valorant from "../assets/images/valorant.webp";
import Image from "next/image";
// import { useTranslation } from "react-i18next";

export default function ValorantCard() {
  const [gradientStyle, setGradientStyle] = React.useState({});
  // const [t, i18n] = useTranslation("global");

  const { data, isLoading } = useSWR("/api/valorant", (url) =>
    axios
      .post(url, {
        params: {
          language: "es",
        },
      })
      .then((res) => res.data)
  );

  const handlePlay = () => {
    document.getElementById("agent-audio").play();
  };

  React.useEffect(() => {
    if (data) {
      const colors = data.agent.backgroundGradient.map((color) => `#${color}`);
      const colorjoin = colors.join(", ");
      const gradientStyle = {
        background: `linear-gradient(to bottom, ${colorjoin})`,
      };
      setGradientStyle(gradientStyle);
    }
  }, [data]);

  if (isLoading) {
    return (
      <a
        href="https://tracker.gg/valorant/profile/riot/Nikkeey%2360HZ/overview"
        target="_blank"
        className="flex flex-col group rounded-3xl bg-red-700/50 relative col-span-1 aspect-square shadow-sm cursor-pointer hover:scale-[103%] transition duration-300 ease-in-out"
      >
        <Image src={valorant} className="animate-pulse" />
      </a>
    );
  }

  return (
    <a
      href="https://tracker.gg/valorant/profile/riot/Nikkeey%2360HZ/overview"
      target="_blank"
      className="text-white flex flex-col group rounded-3xl overflow-hidden md:overflow-hidden relative col-span-1 aspect-square shadow-sm cursor-pointer hover:scale-[103%] transition duration-300 ease-in-out"
      style={gradientStyle}
      onClick={handlePlay}
    >
      <audio src={data?.agent?.audio} id="agent-audio"></audio>
      <img
        src={data?.agent?.image}
        className="hidden md:block absolute md:-left-16 2xl:-left-24 scale-[1.9] -bottom-36 z-[5] group-hover:scale-[2.1] transition duration-300 ease-in-out delay-[60ms]"
      />
      <div className="rounded-tl-3xl rounded-tr-3xl overflow-hidden w-full relative z-[3]">
        <img src={data?.card?.wide} className="object-cover" />
      </div>
      <div className="flex relative w-full p-2">
        <div className="absolute md:relative w-1/2 md:w-[40%] h-full md:bottom-0 top-0 left-0">
          <img
            src={data?.agent?.background}
            className="absolute scale-200 opacity-30 object-cover"
          />
        </div>
        <div className="w-full md:w-[60%] h-full flex flex-col overflow-hidden md:-translate-y-0 relative z-10">
          <p className="font-bold text-[0.70rem] md:text-lg 2xl:text-2xl text-center md:text-right">{`${data?.name}#${data?.tag}`}</p>
          <p className="hidden md:block text-xs text-right">{`lvl ${data?.level}`}</p>
          <div className="w-full h-full flex flex-col justify-center items-center overflow-hidden">
            <img src={data?.rank?.icon} className="w-1/3 md:w-2/3" />
            <p className="text-xs md:text-base font-bold">{data?.rank?.name}</p>
          </div>
        </div>
      </div>
    </a>
  );
}
