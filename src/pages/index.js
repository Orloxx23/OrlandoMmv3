import Head from "next/head";
import { motion } from "framer-motion";
import {
  AboutCard,
  BirthdayCard,
  BlogCard,
  ClonCard,
  EmailCard,
  EnglishCard,
  GithubCard,
  LanguagueCard,
  LinkedinCard,
  OnlineCard,
  PlatziCard,
  ProjectsCard,
  Skills,
  SpotifyCard,
  ThemeCard,
  TimeCard,
  TwitterCard,
} from "@/components";
import { useTranslation } from "react-i18next";

export default function Home() {
  const [t, i18n] = useTranslation("global");
  return (
    <>
      <Head>
        <title>{t("title")}</title>
        <meta name="theme-color" content="#3F275C" />
        <meta name="apple-mobile-web-app-status-bar" content="#3F275C" />
        <meta
          name="description"
          content="Orlando is a frontend developer with an interest in UX/UI design. He is an expert in HTML, CSS, JavaScript and React."
        />
        <meta name="googlebot" content="notranslate" />
        <meta name="author" content="Orlando Mina" />
        <link rel="author" href="https://orlandomm.me" />
        <meta name="generator" content="Next.js" />
        <meta
          name="keywords"
          content="Next.js,React,JavaScript,Orlando,Mina,Madroñero,Madronero,CSS,HTML,Orloxx,Frontend,Developer,Web,Fullstack,"
        />
        <meta name="creator" content="Orlando Mina" />
        <meta
          name="format-detection"
          content="telephone=no, address=no, email=no"
        />

        <meta property="og:title" content="Orlando Mina | Frontend Developer" />
        <meta
          property="og:description"
          content="Orlando is a frontend developer with an interest in UX/UI design. He is an expert in HTML, CSS, JavaScript and React."
        />
        <meta property="og:url" content="https://orlandomm.me/" />
        <meta
          property="og:site_name"
          content="Orlando Mina, Frontend Developer"
        />
        <meta property="og:locale" content="es_CO" />
        <meta
          property="og:image:url"
          content="https://github.com/Orloxx23/OrlandoMmv2/blob/main/src/assets/img/me.png?raw=true"
        />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <meta property="og:image:alt" content="Orlando Mina" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Orloxx23" />
        <meta name="twitter:creator" content="@Orloxx23" />
        <meta name="twitter:title" content="Orlando Mina | Frontend Developer" />
        <meta name="twitter:image" content="https://github.com/Orloxx23/OrlandoMmv2/blob/main/src/assets/img/me.png?raw=true" />
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
          <LinkedinCard />
          <ProjectsCard />
          <GithubCard />
          <Skills />
          <EnglishCard />
          <SpotifyCard />
          <OnlineCard />
          <EmailCard />
          <TwitterCard />
          <TimeCard />
          <ClonCard />
          <PlatziCard />
          <BlogCard />
        </div>
      </motion.div>
    </>
  );
}
