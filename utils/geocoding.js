const axios = require("axios");

async function getCoordinates(location, country) {
  const query = `${location}, ${country}`;

  const response = await axios.get(
    "https://nominatim.openstreetmap.org/search",
    {
      params: {
        q: query,
        format: "json",
        limit: 1,
      },
      headers: {
        "User-Agent": "wanderlust-app",
      },
    }
  );

  if (response.data.length === 0) {
    return null;
  }

  return {
    lat: parseFloat(response.data[0].lat),
    lon: parseFloat(response.data[0].lon),
  };
}
module.exports = getCoordinates;