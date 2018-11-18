const weatherApiSuccess = {
  "coord": {
    "lon": 80.28,
    "lat": 13.09
  },
  "weather": [
    {
      "id": 802,
      "main": "Clouds",
      "description": "scattered clouds",
      "icon": "03d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 304.15,
    "pressure": 1013,
    "humidity": 70,
    "temp_min": 304.15,
    "temp_max": 304.15
  },
  "visibility": 8000,
  "wind": {
    "speed": 5.1,
    "deg": 120
  },
  "clouds": {
    "all": 40
  },
  "dt": 1542522600,
  "sys": {
    "type": 1,
    "id": 7834,
    "message": 0.0032,
    "country": "IN",
    "sunrise": 1542501536,
    "sunset": 1542542939
  },
  "id": 1264527,
  "name": "chennai",
  "cod": 200
};

const weatherApiFailure = {

}

const githubApiSuccess = {
  "login": "mocha",
  "id": 44426,
  "node_id": "MDQ6VXNlcjQ0NDI2",
  "avatar_url": "https://avatars0.githubusercontent.com/u/44426?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/mocha",
  "html_url": "https://github.com/mocha",
  "followers_url": "https://api.github.com/users/mocha/followers",
  "following_url": "https://api.github.com/users/mocha/following{/other_user}",
  "gists_url": "https://api.github.com/users/mocha/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/mocha/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/mocha/subscriptions",
  "organizations_url": "https://api.github.com/users/mocha/orgs",
  "repos_url": "https://api.github.com/users/mocha/repos",
  "events_url": "https://api.github.com/users/mocha/events{/privacy}",
  "received_events_url": "https://api.github.com/users/mocha/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Patrick Deuley",
  "company": "Rackspace",
  "blog": "http://rackspace.com",
  "location": "San Antonio, Texas",
  "email": null,
  "hireable": null,
  "bio": null,
  "public_repos": 20,
  "public_gists": 2,
  "followers": 11,
  "following": 3,
  "created_at": "2009-01-05T23:34:49Z",
  "updated_at": "2018-07-24T19:49:43Z"
};

const githubApiFailure = {

}


module.exports = {
  weatherApiSuccess,
  weatherApiFailure,
  githubApiSuccess,
  githubApiFailure
}
