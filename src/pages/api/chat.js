import { db } from "@/firebase";
import axios from "axios";
import similarity from "compute-cosine-similarity/lib";
import { collection, getDocs } from "firebase/firestore";

let embeddings = [];
let conversation = [
  "bot: Hola, soy el clon de Orlando. ¿Qué te gustaría saber de mí?",
];

async function getEmbeddings() {
  try {
    const querySnapshot = await getDocs(collection(db, "info"));
    for (const doc of querySnapshot.docs) {
      const element = {
        text: doc.data().text,
        embedding: doc.data().embedding,
        similarity: 0,
      };
      embeddings.push(element);
    }
  } catch (error) {
    console.error(`Error getting documents: ${error}`);
  }
}

async function getEmbedding(text) {
  let data = JSON.stringify({
    input: text,
    model: "text-embedding-ada-002",
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://api.openai.com/v1/embeddings",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    data: data,
  };

  const response = await axios.request(config);

  return response.data.data[0].embedding;
}

async function compare(text, element) {
  const newEmbedding = await getEmbedding(text);
  const result = similarity(element.embedding, newEmbedding);

  // element.similarity = result;
  return result;
}

async function getResponse(query, context) {
  let data = JSON.stringify({
    model: "gpt-4-0613",
    temperature: 0.3,
    max_tokens: 150,
    messages: [
      {
        role: "system",
        content: `${
          process.env.PERSONALITY
        } You don't make things up. you don't tell lies. Only answer if you have the question has to do with the following information and you only know this: ${context}. Don't answer if you don't know the answer. This is the conversation between you and the user: ${conversation.join(
          ", "
        )}.`,
      },
      {
        role: "user",
        content: query,
      },
    ],
    functions: [
      {
        name: "changeTheme",
        description: "Change the theme of the page (light or dark)",
        parameters: {
          type: "object",
          properties: {
            theme: {
              type: "string",
              description: "The theme to change to",
            },
          },
        },
      },
      {
        name: "changeLanguage",
        description: "Change the language of the page (en or es)",
        parameters: {
          type: "object",
          properties: {
            language: {
              type: "string",
              description: "The language to change to",
            },
          },
        },
      },
      {
        name: "goToProjects",
        description: "Go to the projects page",
        parameters: {
          type: "object",
          properties: {
            project: {
              type: "string",
              description: "The project to go to",
            },
          },
        },
      },
    ],
    function_call: "auto",
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://api.openai.com/v1/chat/completions",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    data: data,
  };

  const response = await axios.request(config);

  return response.data.choices[0].message;
}

export default async function handler(req, res) {
  try {
    let message = "";
    const query = req.body.query;

    await getEmbeddings();

    const promises = embeddings.map(async (element) => {
      const simil = await compare(query, element);
      element.similarity = simil;
      return simil;
    });

    await Promise.all(promises);

    const newEmbeddings = embeddings.sort(
      (a, b) => b.similarity - a.similarity
    );

    let context = "";
    newEmbeddings.slice(0, 6).forEach((element) => {
      context += element.text + " ";
    });

    conversation.push("user: " + query);

    await getResponse(query, context).then((response) => {
      conversation.push("assistant: " + response);
      message = response;
    });

    // console.log(message)

    res.status(200).json({ message: message });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error en la petición", error: error });
  }
}
