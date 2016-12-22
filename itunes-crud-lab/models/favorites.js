const { MongoClient } = require('mongodb');
const { ObjectID } = require('mongodb');

const dbConnection = 'mongodb://localhost:27017/itunes-favorites';

// When we select an album from our index.ejs page, this will insert it
// into our favorites collection
function saveFavorite(req, res, next) {
  MongoClient.connect(dbConnection, (err, db) => {
    if (err) return next(err);

    db.collection('favorites')
    .insert(req.body.favorite, (insertErr, result) => {
      if (insertErr) return next(insertErr);
      res.saved = result;
      db.close();
      return next();
    });
    return false;
  });
  return false;
}

// This function will search through our itunes-favorite collection to find
// any does in the 'favorites' collection
// any data retrieved from db will be saved and passed on in res.favorite
function getFavorites(req, res, next) {
  MongoClient.connect(dbConnection, (err, db) => {
    if (err) return next(err);
    db.collection('favorites')
    .find({})
    .toArray((arrayError, data) => {
      if (arrayError) return next(arrayError);
      console.log(data);
      res.favorite = data;
      db.close();
      return next();
    });
    return false;
  });
  return false;
}

function deleteFavorites(req, res, next) {
  MongoClient.connect(dbConnection, (err, db) => {
    if (err) return next(err);
    db.collection('favorites')
      .findAndRemove({ _id: ObjectID(req.params.id) }, (removeErr, result) => {
        if (removeErr) return next(removeErr);
        // return the data
        res.removed = result;
        db.close();
        return next();
      });
    return false;
  });
  return false;
}

module.exports = {
  saveFavorite,
  getFavorites,
  deleteFavorites,
};
