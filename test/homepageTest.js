var request = require("request");
var expect = require('chai').expect
var Webdriver = require('selenium-webdriver');

process.env.NODE_ENV = 'test';

var base_url = "http://localhost:3000/"
var app = require('../app/app.js');
var server;
var Browser = require('zombie');

Browser.prototype.keyUp = function(targetSelector, keyCode) {
  var event = this.window.document.createEvent('HTMLEvents');
  event.initEvent('keyup', true, true);
  event.which = keyCode;
  var target = this.window.document.querySelector(targetSelector);
  target && target.dispatchEvent(event);
};

describe('homepage',function(){
	before(function(){
		this.server = app.listen(3000, function() {});
		this.browser = new Browser({site: base_url})
	});

	before(function(done){
		this.browser.visit('/',done);
	});


	it('should display the text welcome to typebook',function(){
		expect(this.browser.text('li')).to.equal('Welcome to typeBook!');
	});

	after(function(done) {
		this.server.close(done);
	});
});
