import React from "react";
import { projects } from "@/data/projects";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Playground() {
  return (
    <div className="bg-[#052e3a9c] dark:bg-[#72d2ff56] rounded-3xl overflow-hidden h-[600px] col-span-3 md:col-span-1 flex flex-col gap-4">
      <div className="w-full pt-8 h-14 flex justify-center items-center flex-col">
        <p className="text-xl md:text-3xl text-white font-bold">Playground</p>
      </div>

      <div className="relative w-full h-full overflow-hidden">
        <div className="w-full h-full flex flex-col justify-center gap-4 absolute -right-20 ">
          {projects.slice(0,3).map((project) => (
            <div key={project.title} className="relative h-full w-full">
              <Image
                src={project.image}
                draggable="false"
                className="absolute left-0 cursor-pointer rounded-2xl object-cover object-left h-44 w-12/12 hover:-left-16 transition-all duration-300 ease-in-out"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
