const express = require('express');
const router = express.Router();
const tweetDB = require('../models/tweets.js');

// get ALL tweets
// router.get('/', tweetDB.getAllTweets, (req, res) => {
//   res.json(res.tweets || []);
// })

router.get('/', tweetDB.getAllTweets, (req, res) => res.json(res.tweets));

router.get('/users/:username', tweetDB.getUserTweets, (req, res) => {
  res.json(res.usersTweets);
})

router.get('/hashtag/:hashtag', tweetDB.getHashtags, (req, res) => {
  res.json(res.hashtag);
})
module.exports = router;
