import axios from "axios";

const handler = async (req, res) => {
  try {
    const language = req.body.params.language;
    const languageCode = language === "en" ? "en-US" : "es-MX";

    let playerinfo = {
      name: "",
      tag: "",
      level: "",
      card: "",
      rank: {
        icon: "",
        name: "",
      },
      agent: {
        image: "",
        background: "",
        backgroundGradient: [],
        audio: "",
      },
    };

    const info = await fetch(
      "https://api.henrikdev.xyz/valorant/v1/account/Nikkeey/60hz"
    ).then((res) => res.json());

    if(info.status === 400) return res.status(400).json({ statusCode: 400, message: "Not able to connect to API" });

    const rank = await fetch(
      "https://api.henrikdev.xyz/valorant/v1/mmr/latam/Nikkeey/60hz"
    ).then((res) => res.json());

    playerinfo.name = info.data?.name;
    playerinfo.tag = info.data?.tag;
    playerinfo.level = info.data?.account_level;
    playerinfo.card = info.data?.card;

    playerinfo.rank.icon = rank.data?.images.large;
    playerinfo.rank.name = rank.data?.currenttierpatched;

    const agent = await getMostPlayedCharacter(
      "latam",
      "Nikkeey",
      "60hz",
      20,
      languageCode
    );
    playerinfo.agent.image = agent?.portrait;
    playerinfo.agent.background = agent?.background;
    playerinfo.agent.backgroundGradient = agent?.backgroundGradient;
    playerinfo.agent.audio = agent?.audio;

    res.status(200).json(playerinfo);
  } catch (error) {
    res.status(500).json({ statusCode: 500, message: error.message });
  }
};

/**
 * Fetches and returns data about the most frequently played character in Valorant matches.
 *
 * @param {string} region - The region where the player is located.
 * @param {string} name - The player's name.
 * @param {string} tag - The player's tag.
 * @param {number} size - The size parameter for the request.
 * @returns {Promise<MostPlayedCharacterResult|null>} An object containing information about the most played character, or null if an error occurs.
 */
async function getMostPlayedCharacter(region, name, tag, size, languageCode) {
  try {
    // Make a request to retrieve lifetime match data
    const response = await axios.get(
      `https://api.henrikdev.xyz/valorant/v1/lifetime/matches/${region}/${name}/${tag}`,
      {
        params: {
          size: size,
        },
      }
    );

    if (response.status === 200) {
      const jsonData = response.data;

      // Filter data only for "Competitive" and "Unrated" game modes
      const filteredData = jsonData.data.filter((item) => {
        return item.meta.mode === "Competitive";
      });

      // Create an object to count the frequency of each character
      const characterCounts = {};

      // Iterate through the filtered data and count characters
      filteredData.forEach((item) => {
        const characterId = item.stats.character.id;
        if (characterCounts[characterId]) {
          characterCounts[characterId]++;
        } else {
          characterCounts[characterId] = 1;
        }
      });

      // Find the most frequent character
      let mostFrequentCharacter = null;
      let maxCount = 0;

      for (const character in characterCounts) {
        if (characterCounts[character] > maxCount) {
          mostFrequentCharacter = character;
          maxCount = characterCounts[character];
        }
      }

      if (mostFrequentCharacter) {
        const agentId =
          mostFrequentCharacter == "ded3520f-4264-bfed-162d-b080e2abccf9"
            ? "320b2a48-4d9b-a075-30f1-1f93a9b638fa"
            : mostFrequentCharacter;
        // Fetch data for the most frequent character
        const agentResponse = await axios.get(
          `https://valorant-api.com/v1/agents/${agentId}?language=${languageCode}`
        );
        const agent = agentResponse.data;

        // Create a result object with relevant information
        const result = {
          image: agent.data.displayIcon,
          portrait: agent.data.bustPortrait,
          background: agent.data.background,
          backgroundGradient: agent.data.backgroundGradientColors,
          audio: agent.data.voiceLine?.mediaList[0].wave,
        };

        // Return the result
        return result;
      } else {
        throw new Error("Unable to fetch data");
      }
    } else {
      throw new Error("Unable to fetch data");
    }
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default handler;
