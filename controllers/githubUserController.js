var request = require("request-promise");

const getUser = async (user) => {
  //const { user } = req.query;

  try {
    var options = {
      method: 'GET',
      url: `https://api.github.com/users/${user}`,
      json: true,
      headers: {
        "User-Agent": "Chrome"
      }
    };
    const response = await request(options);
    return response;
  }
  catch (e) {
    return new Error("Error while making api call");
  }
}

module.exports = {
  getUser
}

getUser("chennaop12")
