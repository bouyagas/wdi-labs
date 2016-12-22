require('dotenv').config({ silent: true });
const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Set default static assets folder
app.use(express.static(path.join(__dirname, 'public')));

app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const tweetsRouter = require('./routes/tweets');

app.use('/tweets', tweetsRouter);

app.listen(PORT, () => {
  console.log('Tweet Tweet 🐤');
});
