
const fetch = require('node-fetch');

const API_URL = 'http://api.openweathermap.org/data/2.5/weather?';
const API_KEY = process.env.OPENWEATHER_KEY;

function findWeather(req, res, next){
fetch(`${API_URL}q=NewYork&units=imperial&APPID=${API_KEY}`)
.then(r => r.json())
.then((result) => {
  res.weather = result;
  next();
})
.catch((err) => {
  res.err = err;
  next();
})
}

module.exports = { findWeather };
