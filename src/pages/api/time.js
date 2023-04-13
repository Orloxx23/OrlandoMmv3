const handler = async (req, res) => {
    const response = await fetch(
      `https://api.sunrise-sunset.org/json?lat=3.4517923&lng=-76.5324943&formatted=0`
    ).then((res) => res.json());
  
    res.status(200).json(response);
  };
  
  export default handler;