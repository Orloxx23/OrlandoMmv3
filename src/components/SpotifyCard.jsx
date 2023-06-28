import React, { useEffect } from "react";
import axios from "axios";
import useSWR from "swr";
import Image from "next/image";
import { motion } from "framer-motion";

import styles from "@/styles/SpotifyCard.module.css";
import noise from "@/assets/images/noise.gif";

import { useTranslation } from "react-i18next";
import { BsFillPauseFill, BsFillPlayFill, BsSpotify } from "react-icons/bs";

export default function SpotifyCard() {
  const [isPlaying, setIsPlaying] = React.useState(false);

  const [t, i18n] = useTranslation("global");

  const { data, isLoading } = useSWR("/api/nowplaying", (url) =>
    axios.get(url).then((res) => res.data)
  );

  const handlePlay = () => {
    setIsPlaying(true);
    document.getElementById("music").play();
    document.getElementById("audio1").style.animationPlayState = "running";
    document.getElementById("audio2").style.animationPlayState = "running";
    document.getElementById("audio3").style.animationPlayState = "running";
    document.getElementById("audio4").style.animationPlayState = "running";
    document.getElementById("audio5").style.animationPlayState = "running";
    document.getElementById("audio6").style.animationPlayState = "running";
    document.getElementById("audio7").style.animationPlayState = "running";
    document.getElementById("audio8").style.animationPlayState = "running";
    document.getElementById("audio9").style.animationPlayState = "running";
  };

  const handlePause = () => {
    setIsPlaying(false);
    document.getElementById("music").pause();
    document.getElementById("audio1").style.animationPlayState = "paused";
    document.getElementById("audio2").style.animationPlayState = "paused";
    document.getElementById("audio3").style.animationPlayState = "paused";
    document.getElementById("audio4").style.animationPlayState = "paused";
    document.getElementById("audio5").style.animationPlayState = "paused";
    document.getElementById("audio6").style.animationPlayState = "paused";
    document.getElementById("audio7").style.animationPlayState = "paused";
    document.getElementById("audio8").style.animationPlayState = "paused";
    document.getElementById("audio9").style.animationPlayState = "paused";
  };

  const handleState = () => {
    setIsPlaying((prev) => !prev);
  };

  const reset = () => {
    setIsPlaying(false);
    document.getElementById("audio1").style.animation = "none";
    document.getElementById("audio2").style.animation = "none";
    document.getElementById("audio3").style.animation = "none";
    document.getElementById("audio4").style.animation = "none";
    document.getElementById("audio5").style.animation = "none";
    document.getElementById("audio6").style.animation = "none";
    document.getElementById("audio7").style.animation = "none";
    document.getElementById("audio8").style.animation = "none";
    document.getElementById("audio9").style.animation = "none";
    document.getElementById("audio1").offsetHeight;
    document.getElementById("audio2").offsetHeight;
    document.getElementById("audio3").offsetHeight;
    document.getElementById("audio4").offsetHeight;
    document.getElementById("audio5").offsetHeight;
    document.getElementById("audio6").offsetHeight;
    document.getElementById("audio7").offsetHeight;
    document.getElementById("audio8").offsetHeight;
    document.getElementById("audio9").offsetHeight;
    document.getElementById("audio1").style.animation = null;
    document.getElementById("audio2").style.animation = null;
    document.getElementById("audio3").style.animation = null;
    document.getElementById("audio4").style.animation = null;
    document.getElementById("audio5").style.animation = null;
    document.getElementById("audio6").style.animation = null;
    document.getElementById("audio7").style.animation = null;
    document.getElementById("audio8").style.animation = null;
    document.getElementById("audio9").style.animation = null;
  };

  useEffect(() => {
    if (isPlaying) {
      handlePlay();
    } else {
      handlePause();
    }
  }, [isPlaying]);

  useEffect(() => {
    if (isPlaying) {
      handlePause();
      reset();
    }
  }, [data]);

  return (
    <div className="relative flex flex-col justify-between p-3 md:p-7 lg:p-8 rounded-3xl md:col-span-2 col-span-2 row-span-1 overflow-hidden bg-[#0000008f]">
      <div className="absolute invisible md:visible md:static">
        <a
          href={data?.external_urls.spotify}
          target="_blank"
          rel="noopener noreferrer"
          className="md:text-4xl text-[#62DBBE] dark:text-[#25ac8c] duration-500 hover:text-[#4cd1b2] dark:hover:text-[#3ca188] ease-in-out"
          aria-label="Spotify"
        >
          <BsSpotify />
        </a>
      </div>

      <div className={styles.card__body}>
        <p className="text-[#ffffff] font-bold text-xs lg:text-2xl md:text-xl">
          {t("spotify.current")}
        </p>
        <div className="flex mb-2 flex-col">
          <p>{isLoading && t("loading")}</p>
          <p className="text-[#ffffff] w-full xl:text-xl lg:text-lg text-xs font-semibold truncate">
            {data?.name}
          </p>
          <p className="text-[#ffffff] w-full xl:text-xl lg:text-lg text-xs truncate">
            {data?.artists.length > 1
              ? data?.artists.map((artist) => artist.name).join(", ")
              : data?.artists[0].name}
          </p>
        </div>
        <div
          id="audiovisual"
          className={styles.audiovisual}
          onClick={handleState}
        >
          <div className=" text-white text-xl">
            {isPlaying ? <BsFillPauseFill /> : <BsFillPlayFill />}
          </div>
          <div className={styles.audiowire} id="audio1"></div>
          <div className={styles.audiowire} id="audio2"></div>
          <div className={styles.audiowire} id="audio3"></div>
          <div className={styles.audiowire} id="audio4"></div>
          <div className={styles.audiowire} id="audio5"></div>
          <div className={styles.audiowire} id="audio6"></div>
          <div className={styles.audiowire} id="audio7"></div>
          <div className={styles.audiowire} id="audio8"></div>
          <div className={styles.audiowire} id="audio9"></div>
        </div>

        <audio src={data?.preview_url} id="music" onEnded={reset}></audio>
      </div>

      <Image
        src={data?.album.images[0].url || noise}
        alt={data?.name || "Song coverpage"}
        width={data?.album.images[0].width}
        height={data?.album.images[0].height}
        className={styles.image}
        loading="lazy"
      />
    </div>
  );
}
