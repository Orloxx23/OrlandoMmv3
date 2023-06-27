import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { AiFillCaretUp, AiFillStar } from "react-icons/ai";
import { BsArrowLeft } from "react-icons/bs";
import { projects } from "@/data/projects";
import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";

import me from "../../assets/images/me2.webp";
import { LanguagueCard } from "@/components";
import "swiper/css";
import "swiper/css/effect-cards";
import { SiGithub } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";
import Script from "next/script";

export default function Projects() {
  let router = useRouter();
  const [t, i18n] = useTranslation("global");

  const [categoryActive, setCategoryActive] = useState(0);
  const [projectsFiltered, setProjectsFiltered] = useState();

  const categories = [
    "all", // 0
    "personal", // 1
    "practice", // 2
    "experiments", // 3
    "recommended", // 4
  ];

  function compare(a, b) {
    if (a.id < b.id) {
      return 1;
    } else if (a.id > b.id) {
      return -1;
    } else {
      return 0;
    }
  }

  useEffect(() => {
    setProjectsFiltered(projects.sort(compare));
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (categoryActive == 0) {
      setProjectsFiltered(projects.sort(compare));
    } else {
      setProjectsFiltered(
        projects
          .filter((project) => project.category == categories[categoryActive])
          .sort(compare)
      );
    }
  }, [categoryActive]);

  return (
    <>
      <Head>
        <title>{`Orlando Mina | ${t("projects.title")}`}</title>
      </Head>
      <div className="hidden">
        <LanguagueCard />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col m-5 overflow-hidden"
      >
        <div className="grid grid-cols-3 gap-2 md:grid-cols-4 md:gap-4 my-5 container mx-auto xl:px-20">
          <div className="col-span-3 md:col-span-4 aspect-2/1 md:aspect-auto flex justify-between items-center bg-[#1c053a9c] dark:bg-[#af72ff56] rounded-3xl overflow-hidden">
            <h1 className="text-white uppercase font-bold text-2xl md:text-7xl ml-4 flex gap-1 md:gap-4 justify-center items-center">
              <Link href="/">
                <BsArrowLeft />
              </Link>{" "}
              {t("projects.title")}
            </h1>
            <Image
              src={me}
              className="w-1/2 md:w-48"
              draggable="false"
              alt="Orlando Mina"
            />
          </div>
          <div className="col-span-3 md:col-span-4 bg-[#1c053a9c] dark:bg-[#af72ff56] h-16 rounded-3xl overflow-y-hidden relative">
            <div className="flex flex-row justify-left xl:justify-center items-center h-full overflow-y-hidden">
              {categories.map((category, index) => (
                <ProjectButton
                  key={category}
                  category={category}
                  categoryActive={categoryActive}
                  setCategoryActive={setCategoryActive}
                  index={index}
                  t={t}
                />
              ))}
            </div>
          </div>
        </div>
        <motion.div
          layout
          className="grid grid-cols-3 gap-2 md:grid-cols-3 md:gap-4 mb-5 container mx-auto xl:px-20 "
        >
          {projectsFiltered?.map((project, index) => (
            <ProjectCard key={project.id} index={index} project={project} />
          ))}
        </motion.div>
      </motion.div>
    </>
  );
}

function ProjectButton({
  category,
  categoryActive,
  setCategoryActive,
  index,
  t,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      key={index}
      className="flex flex-row justify-center items-center h-full"
    >
      <motion.button
        className={`uppercase font-bold text-xl md:text-3xl flex relative h-full justify-center items-center px-4 transition duration-500 ${
          categoryActive == index
            ? "text-white"
            : "text-[#ffffff6c] hover:text-[#ffffffb2]"
        }`}
        onClick={() => setCategoryActive(index)}
      >
        {categoryActive == index && (
          <motion.div
            className="absolute text-4xl -bottom-3.5 text-[#f8efff] dark:text-[#09030e]"
            layoutId="underline"
          >
            <AiFillCaretUp />
          </motion.div>
        )}
        <div className="flex md:text-[80%]">
          {t(`projects.${category}`)}
          {category === "recommended" && <AiFillStar size={15} />}
        </div>
      </motion.button>
    </motion.div>
  );
}

function ProjectCard({ project, index }) {
  const router = useRouter();
  const [t, i18n] = useTranslation("global");

  const [showModal, setShowModal] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [seeMore, setSeeMore] = useState(false);

  const colors = {
    personal: "#5183B4aa",
    practice: "#51B489aa",
    experiments: "#51B4B3aa",
    recommended: "#DDB71Aaa",
  };

  const onCloseModal = () => {
    router.replace(
      {
        pathname: router.pathname,
        query: {},
      },
      undefined,
      { scroll: false }
    );
    setShowModal(false);
  };

  useEffect(() => {
    if (router.query.project === project.url) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  }, [router.query]);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100%";
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "unset";
      document.body.style.height = "unset";
      document.body.style.width = "unset";
    }
  }, [showModal]);

  return (
    <>
      <motion.div
        className={`${
          showModal
            ? "cursor-pointer opacity-1 backdrop-blur-sm"
            : "opacity-0  pointer-events-none"
        } fixed top-0 left-0 w-screen h-screen z-10 bg-[#000000aa] transition duration-300 ease-in-out`}
        onClick={onCloseModal}
      ></motion.div>
      {showModal && (
        <motion.div
          layout
          layoutId={project.id}
          className="fixed z-10 w-[90%] md:w-[60%] h-[90%] md:h-[60%] top-[5%] md:top-[20%] left-[5%] md:left-[20%]"
        >
          <Swiper
            effect={"cards"}
            grabCursor={true}
            loop={true}
            modules={[EffectCards]}
            className="w-full h-full flex justify-center items-center"
          >
            <SwiperSlide>
              <motion.div
                layout
                className="w-full h-full rounded-3xl p-4 "
                style={{ backgroundColor: colors[project.category] }}
              >
                <div className="rrelative rounded-3xl w-full h-full bg-[#f8efff] dark:bg-[#09030e] p-4 md:p-8 overflow-y-scroll">
                  <div
                    className="absolute right-6 top-6 md:right-10 md:top-10 cursor-pointer"
                    onClick={onCloseModal}
                  >
                    <i className="fa-solid fa-xmark text-3xl"></i>
                  </div>
                  <p className="capitalize font-medium">
                    {t(`projects.${project.category}`) + " / "}
                  </p>
                  <h1 className="text-3xl font-bold mb-4">
                    {i18n.language == "en"
                      ? project.en.title
                      : project.es.title}
                  </h1>
                  <p
                    layout
                    className={`text-lg ${
                      (project.es?.description.length > 0 ||
                        project.en?.description.length > 0) &&
                      "h-1/3"
                    } overflow-y-scroll md:h-auto`}
                  >
                    {i18n.language === "en"
                      ? project?.en?.description
                      : project?.es?.description}
                  </p>
                  <div className="flex gap-2 mt-4 w-full overflow-x-scroll">
                    {project.technologies.map((tech) => (
                      <p
                        key={tech}
                        className="text-xs md:text-base py-2 px-2 md:px-4 rounded-3xl"
                        style={{ backgroundColor: colors[project.category] }}
                      >
                        {tech}
                      </p>
                    ))}
                  </div>
                  <div className="flex flex-col gap-2 mt-8">
                    {project.website !== "" ? (
                      <>
                        <p className="flex items-center gap-2 font-semibold">
                          <FiExternalLink /> Website
                        </p>
                        <a
                          href={project.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline truncate"
                        >
                          {project.website}
                        </a>
                      </>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="flex flex-col gap-2 mt-8">
                    {project.github !== "" ? (
                      <>
                        <p className="flex items-center gap-2 font-semibold">
                          <SiGithub /> Github
                        </p>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline truncate"
                        >
                          {project.github}
                        </a>
                      </>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          </Swiper>
        </motion.div>
      )}
      <motion.div
        key={project.id}
        layout
        layoutId={project.id}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        exit={{ opacity: 0, duration: 1 }}
        transition={{
          duration: 0.5,
          type: "spring",
        }}
        className={`relative col-span-3 md:col-span-1 aspect-square rounded-3xl overflow-hidden cursor-pointer p-4 pt-8 dark:text-white text-gray-50 shadow-xl ${
          showModal ? "opacity-0 -z-10" : "opacity-1"
        }`}
        style={{ backgroundColor: colors[project.category] }}
        onClick={() => {
          if (!showModal) {
            router.push(
              {
                pathname: router.pathname,
                query: { project: project.url },
              },
              undefined,
              { scroll: false }
            );
          }
        }}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <motion.div
          className={`absolute bottom-0 overflow-hidden rounded-t-3xl transition-all duration-300 ease-in-out ${
            isHover
              ? "w-[95%] h-[55%] left-[2.5%]"
              : "md:h-full md:w-full md:left-0 w-[95%] h-[50%] left-[2.5%]"
          }`}
        >
          <Image
            src={project.images.main}
            className="w-full h-full object-cover"
            draggable={false}
          />
        </motion.div>
        <p className="text-xl font-bold">
          {i18n.language == "en" ? project.en.title : project.es.title}
        </p>
        <p className="truncate text-lg">
          {i18n.language == "en"
            ? project.en?.description
            : project.es.description}
        </p>
        <div className="flex gap-2 mt-4 w-full overflow-x-scroll">
          {project.technologies.slice(0, 3).map((tech) => (
            <p
              key={tech}
              className="text-xs md:text-md py-2 px-2 md:px-4 bg-[#000000aa] rounded-3xl"
            >
              {tech}
            </p>
          ))}
        </div>
      </motion.div>

      <Script
        src="https://kit.fontawesome.com/00a734f883.js"
        crossOrigin="anonymous"
      ></Script>
    </>
  );
}
