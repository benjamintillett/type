var express = require('express');

app.set('port', (process.env.PORT || 3000));

var app = express();

app.get('/',function(req,res){
	res.send("Hello");
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});