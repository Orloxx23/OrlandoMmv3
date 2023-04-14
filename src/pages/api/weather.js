const handler = async (req, res) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=cali,colombia&appid=${process.env.WEATHER_API_KEY}&units=metric`
  ).then((res) => res.json());

  res.status(200).json(response);
};

export default handler;
