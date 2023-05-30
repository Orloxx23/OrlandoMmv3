import React from "react";
import {
  SiCss3,
  SiDiscord,
  SiElectron,
  SiFirebase,
  SiFlutter,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";
import { DiJava } from "react-icons/di";

export default function Skills() {
  return (
    <div className="grid grid-cols-4 place-content-center place-items-center gap-3 md:gap-8 p-4 md:p-8 bg-[#ff8e329c] dark:bg-[#ffad7756] rounded-3xl relative overflow-hidden col-span-1 aspect-square shadow-sm text-lg md:text-xl lg:text-5xl text-center text-[#ffffffde]">
      <SiHtml5 />
      <SiCss3 />
      <SiJavascript />
      <SiReact />
      <SiNextdotjs />
      <SiElectron />
      <SiTailwindcss />
      <SiNodedotjs />
      <DiJava />
      <SiFirebase />
      <SiFlutter />
      <SiGit/>
    </div>
  );
}
