import Head from "next/head";
import styles from "@/styles/Home.module.css";
import {
  AboutCard,
  BirthdayCard,
  EmailCard,
  GithubCard,
  LanguagueCard,
  OnlineCard,
  Playgorund,
  Skills,
  SpotifyCard,
  TaplyCard,
  ThemeCard,
  TwitterCard,
} from "@/components";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Head>
        <title>Orlando Mina</title>
        <meta name="description" content="Orlando Mina personal website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col m-5">
        <div className="grid grid-cols-3 gap-2 md:grid-cols-4 md:gap-4 mt-5 container mx-auto xl:px-20">
          <AboutCard />
          <LanguagueCard />
          <ThemeCard />
          <BirthdayCard />
          <OnlineCard />
          <SpotifyCard />
          <GithubCard />
          <Skills />
          <TwitterCard />
          <EmailCard />
        </div>
      </div>
      <Script
        src="https://kit.fontawesome.com/00a734f883.js"
        crossOrigin="anonymous"
      ></Script>
    </>
  );
}
