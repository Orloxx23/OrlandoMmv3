export default async function handler(req, res) {
  let message = "";
  const query = req.body.query;

  const options = {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": process.env.RAPID_KEY,
      "X-RapidAPI-Host": process.env.RAPID_HOST,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      temperature: 0.8,
      max_tokens: 150,
      messages: [
        {
          role: "system",
          content:
            process.env.PERSONALITY
        },
        { role: "user", content: query },
      ],
    }),
  };

  try {
    await fetch("https://openai80.p.rapidapi.com/chat/completions", options)
      .then((response) => response.json())
      .then((response) => {
        message = response?.choices[0]?.message?.content;
        console.log("Peticion completada");
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json({ message: "Error en la petición", error: err });
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error en la petición", error: error });
  }

  res.status(200).json({ message: message });
}
