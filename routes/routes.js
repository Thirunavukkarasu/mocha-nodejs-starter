const express = require('express');
const router = express.Router();
const weatherController = require("../controllers/weatherController");
const githubUserController = require("../controllers/githubUserController");

router.get("/", (req, res, next) => {
  res.send("Welcome the Api world!");
});

router.get('/getWeatherByCity', weatherController.checkWhetherForCity);
router.get('/getUser', githubUserController.getUser);


module.exports = router;
