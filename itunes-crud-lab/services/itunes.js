const fetch = require('node-fetch');

const API_URL = 'https://itunes.apple.com/search?';

function findMusic(req, res, next) {
  const searchTerm = req.body.term;
  // get information from post request
  console.log(req.body);
  console.log(`${API_URL}term=${searchTerm}&entity=album&medium=music`);
  fetch(`${API_URL}term=${searchTerm}&entity=album&medium=music`)
  .then(r => r.json())
  .then((result) => {
    res.music = result.results;
    next();
  })
  .catch((err) => {
    res.err = err;
    next();
  });
}

module.exports = {
  findMusic,
};
