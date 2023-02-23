var express = require('express');
var app = express();

//Middleware function to log request protocol
app.use(function(req, res , next){
   console.log("THE RESPONSE START HERE " );
   next();
});

// Route handler that sends the response
app.get('/fullstack', function(req, res,next){
    res.send('<h1>Node<h1><br><h1>MONGO<h1><br><h1>REACT<h1><br><h1>EXPRESS<h1>');
    res.end();
    next();

});

app.use('/fullstack', function(req, res ){
    console.log("THE RESPONSE FINISHS HERE " );
 });


app.listen(3000);