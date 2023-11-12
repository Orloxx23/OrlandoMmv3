// @ts-ignore
// @ts-nocheck

const getAuth = async () => {
  const client_id = process.env.TWITCH_CLIENT_ID;
  const client_secret = process.env.TWITCH_CLIENT_SECRET;

  const response = await fetch(
    `https://id.twitch.tv/oauth2/token?client_id=${client_id}&client_secret=${client_secret}&grant_type=client_credentials`,
    {
      method: "POST",
      // cache: "no-cache",
    }
  );
  const data = await response.json();
  return data;
};

export default async function handler(req, res) {
  const data = await getAuth();
  res.status(200).json(data);
}
