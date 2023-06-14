import Image from "next/image";
import React from "react";
import { GoBell } from "react-icons/go";

import me from "@/assets/images/me.webp";
import pet from "@/assets/images/me-pet.gif";
import { Chat } from ".";

export default function ClonCard() {
  const random = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
  const [showBadge, setShowBadge] = React.useState(true);
  const [open, setOpen] = React.useState(false);

  const handlerClick = () => {
    setShowBadge(false);
    setOpen(true);
  };

  return (
    <>
      <Chat open={open} setOpen={setOpen}/>
      <div
        onClick={handlerClick}
        className="relative aspect-square top-0 left-0 flex flex-col justify-center items-center bg-purple-500 dark:bg-purple-500 rounded-3xl overflow-hidden col-span-1 hover:scale-[103%] transition duration-500 ease-in-out shadow-sm cursor-pointer"
      >
        {showBadge && (
          <span className="absolute flex justify-center items-center top-2 text-xs md:text-xl right-2 md:top-8 md:right-8 text-[#00000071] dark:text-[#ffffff71]">
            <GoBell /> 1
          </span>
        )}
        {random === 8 ? (
          <>
            <Image
              src={pet}
              width={112}
              height={112}
              alt=""
              className="w-full h-full"
              draggable="false"
            />
          </>
        ) : (
          <span className="w-2/3 h-2/3 bg-[#0E1922] rounded-full hover:animate-pulse overflow-hidden">
            <Image
              src={me}
              width={512}
              height={512}
              alt=""
              className="w-full h-full"
              draggable="false"
            />
          </span>
        )}
      </div>
    </>
  );
}
