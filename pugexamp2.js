var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views','./views');

app.get('/hobbies', function(req, res){
    res.render('examp2');
 });

app.listen(3000);