var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views','./views');

app.get('/facebook', function(req, res){
    res.render('facebo',{

        });
});


app.get('/sign_up', function(req, res){
    res.render('sign_up',{
        });
});

app.listen(3000);