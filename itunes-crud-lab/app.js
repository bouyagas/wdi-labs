/* eslint no-multi-spaces: ["error", { exceptions: { "VariableDeclarator": true } }] */
/* eslint key-spacing: ["error", { align: "value" }] */
/* eslint no-console: ["error", { allow: ["warn", "error"] }] */

const express         = require('express');
const logger          = require('morgan');
const bodyParser      = require('body-parser');
const methodOverride  = require('method-override');
const path            = require('path');

const dbService       = require('./models/favorites');
const itunesService   = require('./services/itunes');

const app             = express();
const PORT            = process.argv[2] || process.env.PORT || 3000;

// set up logging so that we can see what's happening
app.use(logger('dev'));

// set static assets path
app.use(express.static(path.join(__dirname, 'public')));

// set default templating engine
app.set('view engine', 'ejs');
app.set('views', 'views');

// middleware to receive form inputs
app.use(bodyParser.urlencoded({ extended: true }));

// middleware for method override (allows deletes and puts to work)
app.use(methodOverride('_method'));

app.listen(PORT, () => console.log('Sever is up and running on port ', PORT));

app.get('/', dbService.getFavorites, (req, res) => {
  res.render('index', {
    music: res.music || [],
    favorites: res.favorite || [],
  });
});

app.post('/search', itunesService.findMusic, dbService.getFavorites, (req, res) => {
  res.render('index', {
    music: res.music || [],
    favorites: res.favorite || [],
  });
});

app.post('/favorites', dbService.saveFavorite, (req, res) => {
  res.redirect('/');
});

app.delete('/favorites/:id', dbService.deleteFavorites, (req, res) => {
  res.redirect('/');
});

