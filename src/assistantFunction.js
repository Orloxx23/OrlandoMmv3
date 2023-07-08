async function getCurrentWeather(location) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.WEATHER_API_KEY}&units=metric`
  ).then((res) => res.json());

  return response;
}

export { getCurrentWeather };
