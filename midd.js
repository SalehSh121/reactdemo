var express = require('express');
var app = express();

//Middleware function to log request protocol
app.use('/foods', function(req, res , next){
   console.log("A request for things received at " + Date.now());
   next();
});

// Route handler that sends the response
app.get('/foods', function(req, res){
    res.send('<h1>Mansaf<h1><br><h1>Pizza<h1>');
});


app.listen(3000);