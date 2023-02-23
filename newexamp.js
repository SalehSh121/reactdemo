var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views','./views');

app.get('/dynamic_view', function(req, res){
   res.render('dynamic', {
      name: "Saleh", 
      url:"https://www.sport5.co.il/"
   });
});

app.listen(3000);