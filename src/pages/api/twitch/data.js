const getStream = async (headers) => {
  const response = await fetch(
    "https://api.twitch.tv/helix/streams?user_login=orlando2m",
    {
      method: "GET",
      headers: headers,
      // cache: "no-cache",
    }
  );

  const data = await response.json();
  return data;
};

const getUser = async (headers) => {
  const response = await fetch(
    "https://api.twitch.tv/helix/users?login=orlando2m",
    {
      method: "GET",
      headers: headers,
      // cache: "no-cache",
    }
  );

  const data = await response.json();
  return data;
};

const getData = async (headers) => {
  const stream = await getStream(headers);
  const user = await getUser(headers);
  const data = {
    stream: stream,
    user: user,
  };
  return data;
};

export default async function handler(req, res) {
  const token = JSON.parse(req.body).token;

  const headers = new Headers();
  headers.append("Client-ID", process.env.TWITCH_CLIENT_ID || "");
  headers.set("Authorization", `Bearer ${token}`);

  const data = await getData(headers);
  res.status(200).json(data);
}
