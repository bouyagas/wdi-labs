const fetch = require('node-fetch');

const API_URL = 'https://api.unsplash.com/photos/random/?client_id=';
const API_KEY = process.env.BACKGROUND_KEY;

function backPic(req, res, next){
fetch(`${API_URL}${API_KEY}`)
.then(r => r.json())
.then((result) => {
  res.background = result;
  next();
})
.catch((err) => {
  res.err = err;
  next();
})
}

module.exports = { backPic };
