require('dotenv').config();
const express = require('express');
const logger = require('morgan');
const path = require('path');
// const homeRoute = require('./routes/home.js');
const apiRoute = require('./routes/api.js');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(logger('dev'));

// Because of this, our client automatically knows to pull index.html
app.use(express.static(path.join(__dirname,'public')));

// app.use('/', homeRoute);
app.use('/api', apiRoute);

app.listen(PORT, () => console.log('Server is listening on', PORT));
