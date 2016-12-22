/* eslint no-multi-spaces: ["error", { exceptions: { "VariableDeclarator": true } }] */
/* eslint key-spacing: ["error", { align: "value" }] */
/* eslint no-console: ["error", { allow: ["warn", "error"] }] */

// regular stuff
const express       = require('express');
const logger        = require('morgan');
// const Converter = require('cvstojeson').Convertor;
const { Converter } = require('csvtojson');
// destructor statement
// creates a new object with a key of Convertor
// set the variable equal to this key, not the package

// invokes express
const app         = express();
// creates a new converter class
const converter   = new Converter({});
// setting port, the user can provide an alternate port other than 3000 or it can be in the environment somewhere
// process.arg = commandline
// when node is invoked, it is given parameters
// ex: node server.js 7000   process.argv[2] // 7000
const PORT        = process.argv[2] || process.env.port || 3000;
const DATA_FILE   = './data/citibike_data_september.csv';

// set up some logging
app.use(logger('dev'));

// Let's go!
app.listen(PORT, () => console.warn('server here! listening on', PORT));


/* ---------START HERE------------ */

// let's pretend we have a data source
let bikeData;

/* convert the csv into json */
// when the file is done being parsed, take the new data and set it to bikeData
converter.on('end_parsed', (jsonArray) => {
  bikeData = jsonArray;
})
.fromFile(DATA_FILE, (err) => {
  if (err) throw err;
});

const findLongest = (longest, currentRide) =>
  (currentRide.tripduration > longest.tripduration ? currentRide : longest);

const findShortest = (longest, currentRide) =>
  (currentRide.tripduration < longest.tripduration ? currentRide : longest);

/* ROUTES */

app.get('/', (req, res) => {
  res.json({ home: true });
});

// Routes: trips/shortest
const getShortestTrip = (req, res, next) => {
  // perform a linear scan of the data and grab the largest
  const longestRide = bikeData.reduce(findShortest, { tripduration: Infinity });
  res.json(longestRide);
};

// Routes: trips/longest
const getLongestTrip = (req, res, next) => {
  // perform a linear scan of the data and grab the largest
  const longestRide = bikeData.reduce(findLongest, { tripduration: -Infinity });
  res.json(longestRide);
};

const isDataReady = (req, res, next) => {
  try {
    let a = bikeData.length;
    next();
  } catch (err) {
    next(err);
  }
  next(new Error('data not yet ready'));
};

const dataNotReady = (err, req, res, next) => {

}

app.get('/trips/shortest', isDataReady, getShortestTrip);
app.get('/trips/longest', isDataReady, getLongestTrip);


const numbers =[ ]

const evens = array.filter

const findEvens = (n) => {
  let num = parseInt(n);

}

const findSum


