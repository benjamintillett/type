var express = require('express');
var path 	= require('path');
var stylus  = require('stylus');
var app = express();

app.use(express.static(process.argv[3] || path.join(__dirname, 'public')));
app.use(stylus.middleware(process.argv[3] || path.join(__dirname, 'public')));
app.set('port', (process.env.PORT || 3000));

app.set('view engine', 'jade');
app.set('views', path.join(__dirname,'templates'));

app.get('/',function(req,res){
	res.render('homepage',{title: 'typebook'});
});

module.exports = app;

