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

import me from "../../assets/images/me2.png";
import { LanguagueCard } from "@/components";
import "swiper/css";
import "swiper/css/effect-cards";

export default function Projects() {
  let router = useRouter();
  const [t, i18n] = useTranslation("global");

  const [categoryActive, setCategoryActive] = useState(0);
  const [projectsFiltered, setProjectsFiltered] = useState(projects);

  const categories = [
    "all", // 0
    "personal", // 1
    "practice", // 2
    "experiments", // 3
    "recommended", // 4
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (categoryActive == 0) {
      setProjectsFiltered(projects);
    } else {
      setProjectsFiltered(
        projects.filter(
          (project) => project.category == categories[categoryActive]
        )
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
        className="flex flex-col m-5"
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
            <div className="flex flex-row justify-left md:justify-center items-center h-full ">
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
          {projectsFiltered.map((project, index) => (
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
        <div className="flex">
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

  const colors = {
    personal: "#5183B4aa",
    practice: "#51B489aa",
    experiments: "#51B4B3aa",
    recommended: "#FFCD00aa",
  };

  const onCloseModal = () => {
    router.replace({
      pathname: router.pathname,
      query: {},
    });
    setShowModal(false);
  };

  useEffect(() => {
    if (router.query.project == project.url) {
      setShowModal(true);
    }
  }, [router.query]);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100%";
      document.body.style.width = "100%";
      document.body.style.position = "fixed";
    } else {
      document.body.style.overflow = "unset";
      document.body.style.height = "unset";
      document.body.style.width = "unset";
      document.body.style.position = "unset";
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
        /*<motion.div
          layoutId={project.id}
          transition={{ duration: 0.3, delay: 0.1 }}
          className={`fixed z-10 bg-[#${
            colors[project.category]
          }] w-[80%] md:w-[70%] h-[80%] top-[10%] left-[10%] md:left-[15%] rounded-3xl p-1`}
          style={{ backgroundColor: colors[project.category] }}
        >
          <div className="relative flex flex-col md:flex-row-reverse w-full h-full bg-[#f8efff] dark:bg-[#1b0b29] rounded-3xl overflow-hidden">
            <Image
              src={project.images.main}
              className="md:w-6/12 object-cover w-full h-full"
              draggable="false"
              alt={project.title}
            />

            <div className="p-4 md:p-8 md:w-6/12 overflow-y-auto h-full w-full">
              <div className="flex justify-between">
                <h1 className="text-4xl font-extrabold text-[#09030e] dark:text-[#f8efff] mb-4">
                  {project.title}
                </h1>
                <div className="flex"></div>
              </div>
              <p className="text-2xl text-[#09030e] dark:text-[#f8efff]">
                {i18n.language == "en"
                  ? project.en?.description
                  : project.es?.description}
              </p>
            </div>
          </div>
        </motion.div>*/
        <motion.div
          layout
          layoutId={project.id}
          className="absolute z-10 w-[90%] md:w-[60%] h-[90%] md:h-[60%] top-[5%] md:top-[20%] left-[5%] md:left-[20%]"
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
                <div className="rounded-3xl w-full h-full bg-[#f8efff] dark:bg-[#09030e] p-4 md:p-8 overflow-y-scroll">
                  <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
                  <p className="text-lg">
                    {i18n.language === "en"
                      ? project.en.description
                      : project.es.description}
                  </p>
                  <div className="flex gap-2 mt-4">
                    {project.technologies.map((tech) => (
                      <p
                        key={tech}
                        className="py-2 px-4 rounded-3xl"
                        style={{ backgroundColor: colors[project.category] }}
                      >
                        {tech}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
            <SwiperSlide>
              <motion.div
                layout
                className="w-full md:w-full md:h-full rounded-3xl p-4 bg-red-500"
                style={{ backgroundColor: colors[project.category] }}
              >
                <Image
                  src={project.images.browser.light}
                  className="w-full h-full rounded-3xl object-cover object-left-top"
                />
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
          delay: (index - 1) * 0.15,
          type: "spring",
        }}
        className={`relative col-span-3 md:col-span-1 aspect-square rounded-3xl overflow-hidden cursor-pointer p-4 pt-8 dark:text-white text-gray-50 shadow-xl ${
          showModal ? "opacity-0 -z-10" : "opacity-1"
        }`}
        style={{ backgroundColor: colors[project.category] }}
        onClick={() => {
          if (!showModal) {
            router.push({
              pathname: router.pathname,
              query: { project: project.url },
            });
          }
        }}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <motion.div
          className={`absolute bottom-0 overflow-hidden rounded-t-3xl transition-all duration-300 ease-in-out ${
            isHover ? "w-[95%] h-[55%] left-[2.5%]" : "h-full w-full left-0"
          }`}
        >
          <Image
            src={project.images.main}
            className="w-full h-full object-cover"
          />
        </motion.div>
        <p className="text-xl font-bold">{project.title}</p>
        <p className="truncate text-lg">
          {i18n.language == "en"
            ? project.en?.description
            : project.es.description}
        </p>
        <div className="flex gap-2 mt-4">
          {project.technologies.slice(0, 3).map((tech) => (
            <p key={tech} className="py-2 px-4 bg-[#000000aa] rounded-3xl">
              {tech}
            </p>
          ))}
        </div>
      </motion.div>
    </>
  );
}
