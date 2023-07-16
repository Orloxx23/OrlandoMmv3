import vlrstats from "../assets/images/projects/vlrstats/vlrstats.webp";
import orlandomm from "../assets/images/projects/orlandomm/orlandomm.webp";
import orlandommv2 from "../assets/images/projects/orlandommv2/orlandommv2.webp";
import fusion from "../assets/images/projects/fusion/fusion.webp";
import todolist from "../assets/images/projects/todolist/todolist.webp";
import taply from "../assets/images/projects/taply/taply.webp";
import vfa from "../assets/images/projects/vfa/vfa.webp";
import triunvirato from "../assets/images/projects/triunvirato/triunvirato.webp";
import vlr from "../assets/images/projects/vlr/vlr.webp";
import inkfinity from "../assets/images/projects/inkfinity/inkfinity.webp";

export const projects = [
  {
    id: 1,
    url: "triunvirato-bot",
    images: {
      main: triunvirato,
    },
    technologies: ["NodeJS", "DiscordJS"],
    category: "experiments",
    es: {
      title: "Triunvirato Bot",
      description:
        'Este proyecto, que utiliza NodeJS y DiscordJS, es un bot de Discord que creé para mi grupo de amigos. El bot tiene varias características, como la capacidad de eliminar mensajes, mostrar memes aleatorios y bloquear canales de voz. Además, puede habilitar la función "Watch Together" y proporcionar ayuda cuando sea necesario. Este proyecto demuestra mis habilidades en desarrollo backend y trabajo con plataformas de terceros.',
    },
    en: {
      title: "Triunvirato Bot",
      description:
        'This project, which uses NodeJS and DiscordJS, is a Discord bot that I created for my group of friends. The bot has various features such as the ability to delete messages, display random memes, and block voice channels. Additionally, it can enable a "Watch Together" feature and provide help when needed. This project showcases my skills in backend development and working with third-party platforms.',
    },
    github: "https://github.com/Orloxx23/triunvirato-bot",
    website: "",
  },
  {
    id: 2,
    url: "orlandomm",
    images: {
      main: orlandomm,
    },
    technologies: ["HTML", "CSS", "JavaScript"],
    category: "personal",
    es: {
      title: "Sitio web personal v1",
      description:
        "Esta página web es una presentación personal que destaca mis habilidades, estudios y proyectos. Fue desarrollada utilizando HTML, CSS y JavaScript para crear una experiencia interactiva y atractiva para los visitantes.",
    },
    en: {
      title: "Personal website v1",
      description:
        "This website is a personal presentation that highlights my skills, studies, and projects. It was developed using HTML, CSS, and JavaScript to create an interactive and engaging experience for visitors.",
    },
    github: "https://github.com/Orloxx23/OrlandoMm",
    website: "https://orloxx23.github.io/OrlandoMm/",
  },
  {
    id: 3,
    url: "vfa",
    images: {
      main: vfa,
    },
    technologies: ["ReactJS", "Youtube API"],
    category: "experiments",
    es: {
      title: "Valorant para todos",
      description:
        "Este proyecto web sencillo, creado con ReactJS y la API de YouTube, recopila una colección de videos para ayudar a los jugadores de Valorant a mejorar su juego. El sitio web permite a los usuarios acceder fácilmente a una variedad de videos instructivos y tutoriales relacionados con el juego. Este proyecto demuestra mis habilidades en desarrollo frontend, integración de API y diseño UX/UI.",
    },
    en: {
      title: "Valorant For all",
      description:
        "This simple web project, created using ReactJS and the YouTube API, compiles a collection of videos to help Valorant players improve their gameplay. The website allows users to easily access a variety of instructional videos and tutorials related to the game. This project showcases my skills in front-end development, API integration, and UX/UI design.",
    },
    github: "https://github.com/Orloxx23/valorantfa-client",
    website: "https://valorantfa-client.vercel.app",
  },
  {
    id: 4,
    url: "todo-list",
    images: {
      main: todolist,
    },
    technologies: ["ReactJS"],
    category: "practice",
    es: {
      title: "Lista de tareas",
      description:
        "Esta es una aplicación web de lista de tareas que creé mientras aprendía ReactJS en Platzi. Este proyecto demuestra mis habilidades en desarrollo front-end.",
    },
    en: {
      title: "Todo List",
      description:
        "This is a task list web application that I created while learning ReactJS on Platzi. This project showcases my skills in front-end development.",
    },
    github: "https://github.com/Orloxx23/todolist",
    website: "https://orloxx23.github.io/todolist/",
  },
  {
    id: 5,
    url: "orlandommv2",
    images: {
      main: orlandommv2,
    },
    technologies: ["ReactJS"],
    category: "personal",
    es: {
      title: "Sitio web personal v2",
      description:
        "Esta página web personal es una representación detallada de mi perfil, estudios, experiencias y proyectos, y demuestra un notable avance en mis habilidades de desarrollo. Este proyecto es una prueba tangible de mi crecimiento en el campo del desarrollo web, y muestra mi capacidad para crear aplicaciones web modernas y atractivas utilizando tecnologías avanzadas como React.js.",
    },
    en: {
      title: "Personal website v2",
      description:
        "This personal website is a detailed representation of my profile, studies, experiences, and projects, showcasing significant progress in my development skills. This project is a tangible proof of my growth in the field of web development, demonstrating my ability to create modern and appealing web applications using advanced technologies such as React.js.",
    },
    github: "https://github.com/Orloxx23/OrlandoMmv2",
    website: "https://orlandommv2.vercel.app",
  },
  {
    id: 6,
    url: "vlrstats",
    images: {
      main: vlrstats,
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
    id: 7,
    url: "taply",
    images: {
      main: taply,
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
    id: 8,
    url: "fusion-esports",
    images: {
      main: fusion,
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
  {
    id: 9,
    url: "vlrggscraper",
    images: {
      main: vlr,
    },
    technologies: ["NextJS", "NodeJS"],
    category: "experiments",
    es: {
      title: "vlr.gg Scraper",
      description:
        "Este proyecto presenta una API que realiza scraping en vlr.gg, un popular sitio web de torneos de Valorant. La API permite a los usuarios obtener datos de torneos, estadísticas de jugadores y otra información de vlr.gg y utilizarla en sus aplicaciones. Se ha creado una página web dedicada para probar la funcionalidad de la API, y la propia API está alojada de forma pública para que cualquier persona pueda acceder a ella.",
    },
    en: {
      title: "vlr.gg Scraper",
      description:
        "This project showcases an API that performs scraping on vlr.gg, a popular Valorant tournament website. The API allows users to retrieve tournament data, player statistics, and other information from vlr.gg and use it in their applications. A dedicated webpage is created to test the API's functionality, and the API itself is hosted publicly for anyone to access.",
    },
    github: "https://github.com/Orloxx23/vlrscraper-docs",
    website: "https://vlrggapi-docs.vercel.app",
  },
  {
    id: 10,
    url: "inkfinity",
    images: {
      main: inkfinity,
    },
    technologies: ["NextJS", "Tailwind"],
    category: "practice",
    es: {
      title: "Inkfinity",
      description:
        "Inkfinity es un sitio web donde puedes explorar y añadir libros a tu lista de lectura. Utilizando React/Next.js y Tailwind, desarrollé esta prueba técnica para el evento de midudev. Con filtros por categoría, número de páginas y una función de búsqueda, encontrar tu libro favorito es fácil y rápido. La interfaz es intuitiva y responsive, brindando una experiencia de usuario fluida en cualquier dispositivo. Demuestro mis habilidades en desarrollo frontend al utilizar componentes en React y estilos con Tailwind CSS.",
    },
    en: {
      title: "Inkfinity",
      description:
        "Inkfinity is a website where you can browse and add books to your reading list. Using React/Next.js and Tailwind, I developed this technical test for the midudev event. With filters by category, number of pages and a search function, finding your favorite book is easy and fast. The interface is intuitive and responsive, providing a smooth user experience on any device. I demonstrate my frontend development skills by using components in React and styled with Tailwind CSS.",
    },
    github: "https://github.com/Orloxx23/pruebas-tecnicas/tree/main/pruebas/01-reading-list/orloxx23",
    website: "https://inkfinity.vercel.app",
  },
];
