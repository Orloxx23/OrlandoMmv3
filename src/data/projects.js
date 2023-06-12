import vlrstats from "../assets/images/projects/vlrstats/vlrstats.png";
import vlrstatsl from "../assets/images/projects/vlrstats/light.png";
import vlrstatsd from "../assets/images/projects/vlrstats/dark.png";

import fusion from "../assets/images/projects/fusion/fusion.png";
import fusionl from "../assets/images/projects/fusion/light.png";
import fusiond from "../assets/images/projects/fusion/dark.png";

import todolist from "../assets/images/projects/todolist/todolist.png";
import todolistl from "../assets/images/projects/todolist/light.png";
import todolistd from "../assets/images/projects/todolist/dark.png";

import taply from "../assets/images/projects/taply/taply.png";
import taplyl from "../assets/images/projects/taply/light.png";
import taplyd from "../assets/images/projects/taply/dark.png";

import vfa from "../assets/images/projects/vfa/vfa.png";
import vfal from "../assets/images/projects/vfa/light.png";
import vfad from "../assets/images/projects/vfa/dark.png";

import triunvirato from "../assets/images/projects/triunvirato/triunvirato.jpeg";

export const projects = [
  {
    id: 1,
    url: "triunvirato-bot",
    images: {
      main: triunvirato,
      browser: {
        light: triunvirato,
        dark: triunvirato,
      },
    },
    technologies: ["NodeJS", "DiscordJS"],
    category: "experiments",
    es: {
      title: "Triunvirato Bot",
      description: 'Este proyecto, que utiliza NodeJS y DiscordJS, es un bot de Discord que creé para mi grupo de amigos. El bot tiene varias características, como la capacidad de eliminar mensajes, mostrar memes aleatorios y bloquear canales de voz. Además, puede habilitar la función "Watch Together" y proporcionar ayuda cuando sea necesario. Este proyecto demuestra mis habilidades en desarrollo backend y trabajo con plataformas de terceros.'
    },
    en: {
      title: "Triunvirato Bot",
      description: 'This project, which uses NodeJS and DiscordJS, is a Discord bot that I created for my group of friends. The bot has various features such as the ability to delete messages, display random memes, and block voice channels. Additionally, it can enable a "Watch Together" feature and provide help when needed. This project showcases my skills in backend development and working with third-party platforms.'
    },
    github: "https://github.com/Orloxx23/triunvirato-bot",
    website: "",
  },
  {
    id: 2,
    url: "vfa",
    images: {
      main: vfa,
      browser: {
        light: vfal,
        dark: vfad,
      },
    },
    technologies: ["ReactJS", "Youtube API"],
    category: "experiments",
    es: {
      title: "Valorant para todos",
      description: 'Este proyecto web sencillo, creado con ReactJS y la API de YouTube, recopila una colección de videos para ayudar a los jugadores de Valorant a mejorar su juego. El sitio web permite a los usuarios acceder fácilmente a una variedad de videos instructivos y tutoriales relacionados con el juego. Este proyecto demuestra mis habilidades en desarrollo frontend, integración de API y diseño UX/UI.'
    },
    en: {
      title: "Valorant For all",
      description: 'This simple web project, created using ReactJS and the YouTube API, compiles a collection of videos to help Valorant players improve their gameplay. The website allows users to easily access a variety of instructional videos and tutorials related to the game. This project showcases my skills in front-end development, API integration, and UX/UI design.'
    },
    github: "https://github.com/Orloxx23/valorantfa-client",
    website: "https://valorantfa-client.vercel.app",
  },
  {
    id: 3,
    url: "todo-list",
    images: {
      main: todolist,
      browser: {
        light: todolistl,
        dark: todolistd,
      },
    },
    technologies: ["ReactJS"],
    category: "practice",
    es: {
      title: "Lista de tareas",
      description:
        "Esta es una aplicación web de lista de tareas que creé mientras aprendía ReactJS en Platzi. Este proyecto demuestra mis habilidades tanto en desarrollo front-end.",
    },
    en: {
      title: "Todo List",
      description:
        "This is a task list web application that I created while learning ReactJS on Platzi. This project showcases my skills in both front-end development.",
    },
    github: "https://github.com/Orloxx23/todolist",
    website: "https://orloxx23.github.io/todolist/",
  },
  {
    id: 4,
    url: "vlrstats",
    images: {
      main: vlrstats,
      browser: {
        light: vlrstatsl,
        dark: vlrstatsd,
      },
    },
    technologies: ["ReactJS", "Firebase"],
    category: "personal",
    es: {
      title: "VLR Stats",
      description:
        "Esta aplicación web está diseñada para jugadores de Valorant que deseen ver su historial de partidas, saber con quién jugaron en cada una de ellas, hacer seguimiento a su progreso en rangos, estar al tanto de las últimas noticias del juego y acceder a una base de datos de retículas creadas por la comunidad. Este proyecto demuestra mis habilidades tanto en desarrollo front-end como en back-end, y en la integración de API.",
    },
    en: {
      title: "VLR Stats",
      description:
        "This web application is designed for Valorant players to view their match history, see who they played with in each game, track their progress in ranks, keep up with the latest game news, and access a database of community-created crosshairs. This project showcases my skills in front-end development, back-end development, and API integration.",
    },
    github: "https://github.com/Orloxx23/vlrstats",
    website: "https://vlrstats.vercel.app",
  },
  {
    id: 5,
    url: "taply",
    images: {
      main: taply,
      browser: {
        light: taplyl,
        dark: taplyd,
      },
    },
    technologies: ["React Native", "NodeJS", "ElectronJS"],
    category: "recommended",
    es: {
      title: "Taply",
      description:
        "Este proyecto de codigo abierto consta de una aplicación de escritorio con un servidor Node y una aplicación móvil que permite a los jugadores de Valorant controlar el juego desde su dispositivo móvil. Con esta aplicación, los jugadores pueden seleccionar su agente y administrar su sala de juego, incluyendo la capacidad de cambiar el modo de juego. Este proyecto demuestra mis habilidades en desarrollo full-stack, desarrollo móvil e integración de API.",
    },
    en: {
      title: "Taply",
      description:
        "This open-source project consists of a desktop application with a Node server and a mobile app that allows Valorant players to control the game from their mobile device. With this app, players can select their agent and manage their game room, including changing the game mode. This project showcases my skills in full-stack development, mobile development, and API integration.",
    },
    github: "",
    website: "https://taply.click",
  },
  {
    id: 6,
    url: "fusion-esports",
    images: {
      main: fusion,
      browser: {
        light: fusionl,
        dark: fusiond,
      },
    },
    technologies: ["ReactJS", "Youtube API", "NodeJS"],
    category: "practice",
    es: {
      title: "Fusion eSports",
      description:
        "Creé un sitio web para Fusion Esports utilizando ReactJS, la API de YouTube y Swiper. El objetivo era que los seguidores puedan encontrar contenido del equipo, conocer a los jugadores y logros. Además, adquirí nuevos conocimientos en web scraping y creé una API propia para obtener y presentar datos de otros equipos. En general, este proyecto me permitió mejorar mis habilidades en diseño y desarrollo web, incluyendo el uso de herramientas como ReactJS, Swiper y la API de YouTube.",
    },
    en: {
      title: "Fusion eSports",
      description:
        "Created a website for Fusion Esports using ReactJS, the YouTube API, and Swiper. The goal was for fans to find team content, meet the players and achievements. Also, I gained new knowledge in web scraping and created my own API to get and present data from other teams. Overall, this project allowed me to improve my web design and development skills, including the use of tools like ReactJS, Swiper, and the YouTube API.",
    },
    github: "https://github.com/Orloxx23/fusionesports",
    website: "https://fusiongg.vercel.app",
  },
];
