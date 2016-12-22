const { MongoClient } = require('mongodb');

module.exports = function cruiseDB() {
  const dbConnection = 'mongodb://localhost:27017//cruisemovies';

  return {
    serachMovies(req, res, next) {
      MongoClient.connect(dbConnection, (err, db) => {
        if (err) return next(err);

        // go to the collection called movies
        // find the object with the keys we have specified
        // sort it high to low for year and within the years sort the titles A to Z
        // take that result and turn it into an array
        // when you are done, fire a function
        db.collection('movies')
        .find(res.filterParams)
        .sort({ Year: -1, Title: 1})
        .toArray((arrayError, data) => {
          // if we have an error, send the error to next
          if (arrayError) return next(arrayError);

          // if we dont have an error, return the data
          res.filteredMovies = data;
          return next();
        });
      });
      return false;
    },
  };
};
