import fusion from "../assets/images/projects/fusion/fusion.png";
import fusion2 from "../assets/images/projects/fusion/fusion2.png";
import fusion3 from "../assets/images/projects/fusion/fusion3.png";
import todolist from "../assets/images/projects/todolist.png";
import vlrstats from "../assets/images/projects/vlrstats.png";

export const projects = [
  {
    id: 1,
    url: "vlrstats",
    title: "VLR Stats",
    images: {
      main: vlrstats,
      browser: {
        light: vlrstats,
        dark: vlrstats,
      },
    },
    technologies: ["Reactjs"],
    category: "personal",
    es: {
      title: "VLR Stats",
      description: "",
    },
    github: "",
    website: "",
  },
  {
    id: 2,
    url: "fusion-esports",
    title: "Fusion eSports",
    images: {
      main: fusion,
      browser: {
        light: fusion2,
        dark: fusion3,
      },
    },
    technologies: ["Reactjs", "Youtube API"],
    category: "practice",
    es: {
      title: "Sitio web de Fusion eSports",
      description:
        "Creé un sitio web para Fusion Esports utilizando ReactJS, la API de YouTube y Swiper. El objetivo era que los seguidores puedan encontrar contenido del equipo, conocer a los jugadores y logros. Además, adquirí nuevos conocimientos en web scraping y creé una API propia para obtener y presentar datos de otros equipos. En general, este proyecto me permitió mejorar mis habilidades en diseño y desarrollo web, incluyendo el uso de herramientas como ReactJS, Swiper y la API de YouTube.",
    },
    github: "",
    website: "",
  },
  {
    id: 3,
    url: "todo-list",
    title: "Todo List (GPT-3)",
    images: {
      main: todolist,
      browser: {
        light: todolist,
        dark: todolist,
      },
    },
    technologies: ["Reactjs", "OpenAI API"],
    category: "practice",
    es: {
      title: "Lista de tareas (GPT-3)",
      description:
        "Una lista de tareas creada con Reactjs y la API de OpenAI GPT-3.",
    },
    github: "",
    website: "",
  },
];
