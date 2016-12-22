const fetch = require('node-fetch');

const turnstyleURL = '';

// Search Flask URL for Turnstyle data
function searchFlask(req, res, next) {
  // fetch flask turnstyle data
  fetch(`${turnstyleURL}?${req.query}`)
  .then(r => r.json())
  .then((results) => {
    res.data = results;
    // console.log(res.data);
    next();
  })
  .catch((err) => {
    res.err = err;
    next();
  });
}

module.exports = { searchFlask };
