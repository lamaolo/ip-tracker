const searchIp = async (ip) => {
  const response = await fetch(
    `https://geo.ipify.org/api/v1?apiKey=at_GReS6iAdBEAHfijndtkPlqxQSfSKf&ipAddress=${ip}`
  );

  const data = await response.json();

  return data;
};

export default searchIp;
