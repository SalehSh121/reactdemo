var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views','./views');

app.get('/login', function(req, res){
    res.render('advancedp',{
        user: {name: "Saleh", age: "17.5"}
        });
});

app.listen(3000);