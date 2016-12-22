require('dotenv').config();

const express = require('express');
const logger = require('morgan');

const homeRoute = require('./routes/home');

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(logger('dev'));

app.use('/', homeRoute);
app.use(express.static('public'));


app.listen(port, () => console.log('server is listening on port', 3000));
