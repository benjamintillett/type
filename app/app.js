var express = require('express');

var app = express();

app.set('port', (process.env.PORT || 3000));
app.get('/',function(req,res){
	res.send("Hello for codeship!?");
});


module.exports = app;