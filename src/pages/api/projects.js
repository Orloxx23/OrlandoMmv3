import { db } from "@/firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";

const getProjects = async () => {
  try {
    const q = query(collection(db, "projects"), orderBy("timestamp", "desc"));
    const projects = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const project = {
        id: doc.id,
        es: doc.data().es,
        en: doc.data().en,
        category: doc.data().category,
        image: doc.data().image,
        url: doc.data().url,
        website: doc.data().demoURL,
        github: doc.data().githubURL,
        technologies: doc.data().technologies,
      };
      projects.push(project);
    });
    return projects;
  } catch (error) {
    console.error(`Error getting documents: ${error}`);
  }
};

export default async function handler(req, res) {
  try {
    const projects = await getProjects();
    res.status(200).json(projects);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error en la petición", error: error });
  }
}
