import Head from "next/head";
import { motion } from "framer-motion";
import {
  AboutCard,
  BirthdayCard,
  ClonCard,
  EmailCard,
  GithubCard,
  LanguagueCard,
  OnlineCard,
  Playgorund,
  ProjectsCard,
  Skills,
  SpotifyCard,
  TaplyCard,
  ThemeCard,
  TimeCard,
  TwitterCard,
} from "@/components";
import Script from "next/script";
import { useTranslation } from "react-i18next";

export default function Home() {
  const [t, i18n] = useTranslation("global");
  return (
    <>
      <Head>
        <title>{t("title")}</title>
      </Head>
      <motion.div
        initial={{ opacity: 0, y: -2000 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100, duration: 1 }}
        transition={{ duration: 2.5, delay: 0.5, type: "spring" }}
        className="flex flex-col m-5"
      >
        <div className="grid grid-cols-3 gap-2 md:grid-cols-4 md:gap-4 my-5 container mx-auto xl:px-20">
          <AboutCard />
          <LanguagueCard />
          <ThemeCard />
          <BirthdayCard />
          <OnlineCard />
          <SpotifyCard />
          <GithubCard />
          <Skills />
          <TwitterCard />
          <TimeCard />
          <EmailCard />
          <TaplyCard />
          <ClonCard />
          <ProjectsCard />
        </div>
      </motion.div>
      <Script
        src="https://kit.fontawesome.com/00a734f883.js"
        crossOrigin="anonymous"
      ></Script>
    </>
  );
}
