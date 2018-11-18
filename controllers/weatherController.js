const request = require("request-promise");

const checkWhetherForCity = async (city) => {
  //  const { city } = req.query;

  try {
    var options = {
      method: 'GET',
      url: 'https://api.openweathermap.org/data/2.5/weather',
      qs: { q: city, appId: '7eea681a996fbd4b9717240f430dab26' },
      json: true
    };
    const response = await request(options);
    return response;
  }
  catch (e) {
    return new Error("Error while making api call");
  }
}

module.exports = {
  checkWhetherForCity
}
