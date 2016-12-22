const db = require('../lib/dbconnect');


function getAllTweets(req, res, next) {
  db.any(`SELECT * FROM tweets
          INNER JOIN users
            ON tweets.user_id = users.user_id;`)
  .then((tweets) => {
    res.tweets = tweets;
    next();
  })
  .catch(error => next(error));
}


function getUserTweets(req, res, next) {
  db.any(`SELECT * FROM users
          INNER JOIN tweets
            ON tweets.user_id = users.user_id
            WHERE users.username ILIKE $1;`, [req.params.username])
  .then((usersTweets) => {
    res.usersTweets = usersTweets;
    next();
  })
  .catch(error => next(error));
}

function getHashtags(req, res, next) {
  db.any(`SELECT * FROM tweets
          INNER JOIN users
            ON tweets.user_id = users.user_id
          WHERE tweets.content ILIKE '%#${req.params.hashtag}%'`)
  .then((hashtag) => {
    res.hashtag = hashtag;
    next();
  })
  .catch(error => next(error));
}

module.exports = {
  getAllTweets,
  getUserTweets,
  getHashtags
};
