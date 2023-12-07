import Head from "next/head";
import { motion } from "framer-motion";
import {
  AboutCard,
  BirthdayCard,
  BlogCard,
  ClonCard,
  EmailCard,
  EnglishCard,
  ExpCard,
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
import ValorantCard from "@/components/ValorantCard";
import TwitchCard from "@/components/TwitchCard";

export default function Home() {
  return (
    <>
      <Head>
        <title>Orlando Mina | Frontend Developer</title>
        <meta name="theme-color" content="#3F275C" />
        <meta name="apple-mobile-web-app-status-bar" content="#3F275C" />
        <meta
          name="description"
          content="Discover my expertise in creating dynamic web experiences using technologies such as React, JavaScript, HTML and CSS. Dive into my projects that reflect my dedication, creativity and continuous learning as a development student."
        />
        <meta name="googlebot" content="notranslate" />
        <meta name="author" content="Orlando Mina" />
        <link rel="author" href="https://orlandomm.net" />
        <link rel="canonical" href="https://orlandomm.net" />
        <meta
          name="keywords"
          content="Next.js,React,JavaScript,Orlando,Mina,Madroñero,Madronero,CSS,HTML,Orloxx,Frontend,Developer,Web,Fullstack,orlandomm,orlandomm.net,Orloxx23,Orlando Mina,Orlando Mina Madroñero,orlando,mina,madroñero,orlando mina,portfolio,portafolio,projects,proyectos,skills,habilidades,about,sobre,contact,contacto,contactame,contactame,contact me,orlandomm.me"
        />
        <meta name="creator" content="Orlando Mina" />
        <meta
          name="format-detection"
          content="telephone=no, address=no, email=no"
        />

        <meta property="og:title" content="Orlando Mina | Frontend Developer" />
        <meta
          property="og:description"
          content="Discover my expertise in creating dynamic web experiences using technologies such as React, JavaScript, HTML and CSS. Dive into my projects that reflect my dedication, creativity and continuous learning as a development student."
        />
        <meta property="og:url" content="https://orlandomm.net/" />
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
        <meta
          name="twitter:title"
          content="Orlando Mina | Frontend Developer"
        />
        <meta
          name="twitter:image"
          content="https://github.com/Orloxx23/OrlandoMmv2/blob/main/src/assets/img/me.png?raw=true"
        />
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
          <ExpCard />
          <SpotifyCard />
          <OnlineCard />
          <EmailCard />
          <TwitterCard />
          <TimeCard />
          {/* <ClonCard /> */}
          <ValorantCard />
          {/* <EnglishCard /> */}
          {/* <TwitchCard /> */}
          {/* <BlogCard /> */}
          {/* <PlatziCard /> */}
        </div>
      </motion.div>
    </>
  );
}
