const fetch = require('node-fetch');

const API_URL = 'http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=json&lang=en';

const extraQuotes = [
  { quoteText: 'Any reviewer who expresses rage and loathing for a novel is preposterous. He or she is like a person who has put on full armor and attacked a hot fudge sundae.',
     quoteAuthor: 'dude' },
     { quoteText: 'A bird does not sing because it has an answer. It sings because it has a song.',
     quoteAuthor: 'another dude'} ]


function quote(req, res, next){
fetch(API_URL)
.then(r => r.json())
.then((result) => {
  res.quote = result;
  next();
})
.catch((err) => {
  res.quote = extraQuotes[Math.floor(Math.random()* 2)];
  next();
})
}

module.exports = { quote };
