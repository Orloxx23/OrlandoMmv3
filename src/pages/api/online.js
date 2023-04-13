const handler = async (req, res) => {
  const response = await fetch(
    `https://api.lanyard.rest/v1/users/461282493153411082`
  ).then((res) => res.json());

  res.status(200).json(response);
};

export default handler;
