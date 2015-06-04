var request = require("request");
var expect = require('chai').expect

process.env.NODE_ENV = 'test';

var base_url = "http://localhost:3000/"
var app = require('../app/app.js');
var server;
var Browser = require('zombie');


describe('homepage',function(){
	before(function(){
		this.server = app.listen(3000, function() {});
		this.browser = new Browser({site: base_url})
	});

	before(function(done){
		this.browser.visit('/',done);
	});


	it('should display the text welcome to typebook',function(){
		expect(this.browser.text('h1')).to.equal('Hello World');
	});
	after(function(done) {
		this.server.close(done);
	});
});