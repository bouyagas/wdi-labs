const express = require('express');
const logger = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// link the routes
const indexRoute = require('./routes/index');
const resultsRoute = require('./routes/results');
const formRoute = require('./routes/form');


app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));

// call routes
app.use('/', indexRoute);
app.use('/results', resultsRoute);
app.use('/form', formRoute);

app.listen(PORT, () => console.log ('server running at port', PORT));
