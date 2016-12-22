/* eslint no-multi-spaces: ["error", { exceptions: { "VariableDeclarator": true } }] */
/* eslint key-spacing: ["error", { align: "value" }] */
/* eslint no-console: ["error", { allow: ["warn", "error"] }] */

/* set up the Tom Cruise Movie  DB */

const express      = require('express');
const logger       = require('morgan');
const path         = require('path');
const cruiseDB     = require('./model/cruiseDB');

const app          = express();
const dbService    = cruiseDB();
const port         = process.env.PORT || process.argv[2] || 3000;


app.use(logger('dev'));

// set up ejs to render the views
app.set('view engine', 'ejs');
app.set('views', 'views');

// setting our static assets directory
// causes public folder to appear to be root folder when live
app.use(express.static(path.join(__dirname, 'public')));
app.listen(port, () => console.log('Server is listening on port', port));




/* ------------------ */
// data
const filterQS = (req, res, next) => {

  const filterObj = {};
  const qs = req.query;

  if ('id' in qs) filterObj.imbdID = qs.id;
  if ('y' in qs) filterObj.Year = qs.y;

  //  \b is word boundary
  // The RegExp constructor creates a regular expression object for matching text with a pattern.
  // i means ignore case
  if ('t' in qs) filterObj.Title = new RegExp(`\\b${qs.t}`, 'i');
  if ('d' in qs) filterObj.Director = new RegExp(`\\b${qs.d}`, 'i');

  // restructure the values into a new object
  res.filterParams = filterObj;
  return next();
};



/* Routes */
// home (send json format to logger)
app.get('/', filterQS, dbService.searchMovies, (req, res) => {
  res.json(res.filteredMovies);
});







