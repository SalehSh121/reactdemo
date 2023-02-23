var express = require('Express');
var app = express();

var cars = require('./routes/cars');
var food = require('./routes/food');
var names = require('./routes/names');

//both index.js and things.js should be in same directory
app.use('/cars', cars);
app.use('/food', food);
app.use('/names',names);

app.listen(3000);