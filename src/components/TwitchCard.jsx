import Cookies from "js-cookie";
import Link from "next/link";
import React, { use, useEffect, useState } from "react";
import useSWR from "swr";

export default function TwitchCard() {
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const { data, isLoading } = useSWR(`/api/twitch/data`, (url) => getData());

  const getToken = async () => {
    let _token = Cookies.get("access_token");

    if (!_token) {
      await fetchNewToken();
    } else {
      const tokenExpiration = parseInt(
        Cookies.get("token_expiration") || "0",
        10
      );
      const currentTime = new Date().getTime();

      if (tokenExpiration && tokenExpiration <= currentTime) {
        await fetchNewToken();
      } else {
        setToken(_token);
      }
    }

    return _token;
  };

  const fetchNewToken = async () => {
    const res = await fetch("/api/twitch/token");
    const data = await res.json();

    const cookieOptions = {
      expires: new Date(new Date().getTime() + data.expires_in * 1000),
      secure: true,
      //sameSite: "strict",
      httpOnly: true,
    };

    Cookies.set("access_token", data.access_token, cookieOptions);
    Cookies.set(
      "token_expiration",
      (new Date().getTime() + data.expires_in * 1000).toString(),
      cookieOptions
    );

    setToken(data.access_token);

    return data.access_token;
  };

  const getData = async () => {
    const res = await fetch("/api/twitch/data", {
      method: "POST",
      body: JSON.stringify({ token }),
    });
    const data = await res.json();

    return data;
  };

  useEffect(() => {
    (async () => {
      await getToken();
    })();
  }, []);

  useEffect(() => {
    if (token) {
      (async () => {
        await getData();
      })();
    }
  }, [token]);

  return (
    <div className="col-span-2 rounded-3xl overflow-hidden relative">
      {isLoading && (
        <div
          className={`
        absolute top-0 p-4 md:p-8 left-0 w-full h-full bg-purple-600 flex justify-center items-center z-20
        ${isLoading ? "opacity-100" : "opacity-0"}
        transition-all duration-500 ease-in-out
        `}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="128"
            height="128"
            viewBox="0 0 24 24"
            className="animate-pulse"
          >
            <path
              fill="#ffffff"
              d="M11.64 5.93h1.43v4.28h-1.43m3.93-4.28H17v4.28h-1.43M7 2L3.43 5.57v12.86h4.28V22l3.58-3.57h2.85L20.57 12V2m-1.43 9.29l-2.85 2.85h-2.86l-2.5 2.5v-2.5H7.71V3.43h11.43Z"
            />
          </svg>
        </div>
      )}
      <div className="w-full h-full bg-purple-600 dark:bg-purple-800 p-4 md:p-8 flex flex-col">
        {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
        <Link
          href="https://www.twitch.tv/orlando2m"
          target="_blank"
          className="w-fit"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 24 24"
          >
            <path
              fill="#ffffff"
              d="M11.64 5.93h1.43v4.28h-1.43m3.93-4.28H17v4.28h-1.43M7 2L3.43 5.57v12.86h4.28V22l3.58-3.57h2.85L20.57 12V2m-1.43 9.29l-2.85 2.85h-2.86l-2.5 2.5v-2.5H7.71V3.43h11.43Z"
            />
          </svg>
        </Link>
        <div className="flex-1"></div>
        <div className="w-full">
          {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
          {/* <h2 className="text-white text-2xl font-bold">Twitch</h2> */}
          <h2 className="text-white text-md md:text-xl font-bold">
            {data?.user?.status == 401 ? "" : data?.user?.data[0]?.display_name}
          </h2>
          <p className="text-white text-md hidden md:block">
            {data?.user?.status == 401 ? "" : data?.user?.data[0]?.description}
          </p>
        </div>
        {data?.stream?.status == 401 ? (
          ""
        ) : data?.stream?.data[0]?.type == "live" ? (
          <div className="absolute top-4 right-4 md:top-8 md:right-8 z-[1] w-[102px] h-[67px] md:h-[148px] md:w-[280px]">
            <iframe
              src="https://player.twitch.tv/?channel=elspreen&parent=www.orlandomm.net"
              frameborder="0"
              allowFullScreen="true"
              scrolling="no"
              height={37 * 4}
              width={62 * 4}
              className="w-[102px] h-[67px] md:h-[148px] md:w-[280px]"
            ></iframe>
            {/* <img
              src={data?.stream?.data[0]?.thumbnail_url
                ?.replace("{width}", "1280")
                .replace("height", "720")}
              alt=""
              className="absolute w-[102px] h-[67px] md:h-[148px] md:w-[280px] top-0"
            /> */}
          </div>
        ) : (
          <div className="w-[102px] h-[67px] md:h-[148px] md:w-[280px] absolute top-4 right-4 md:top-8 md:right-8 z-[1]  flex justify-center items-center">
            <img
              src={data?.user?.data[0]?.offline_image_url}
              alt="Twitch Offline"
              className="w-[102px] h-[67px] md:h-[148px] md:w-[280px] opacity-100 absolute"
            />
          </div>
        )}
      </div>
    </div>
  );
}
