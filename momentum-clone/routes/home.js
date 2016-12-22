
const router = require('express').Router();
const { findWeather } = require('../services/weather');
const { backPic } = require('../services/background');
const { quote } = require('../services/quotes');
const icons = require('../weather-icons');

router.get('/', findWeather, quote, backPic, (req, res) => {
  let icon = icons[res.weather.weather[0].main.toLowerCase()];
  console.log(res.quote);

  res.render('index', {
    weather: res.weather,
    quote: res.quote,
    background: res.background,
    icon,
  });
});

module.exports = router;
