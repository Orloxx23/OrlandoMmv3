import axios from "axios";

async function getResponse(query, function_call, info) {
  let data = JSON.stringify({
    model: "gpt-3.5-turbo",
    temperature: 1,
    max_tokens: 150,
    messages: [
      {
        role: "system",
        content: process.env.PERSONALITY,
      },
      {
        role: "user",
        content: query,
      },
      {
        role: "assistant",
        content: null,
        function_call,
      },
      {
        role: "function",
        name: function_call.name,
        content: info,
      },
    ],
    /*functions: [
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
    ],*/
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
    const function_call = req.body.function_call;
    const info = req.body.info;

    await getResponse(query, function_call, info).then((response) => {
      message = response;
    });

    // console.log(message);

    res.status(200).json({ message: message });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error en la petición", error: error });
  }
}
