// process.env.NODE_ENV = 'test';

// var fs = require('fs');
// var test = require('selenium-webdriver/testing');
// var Webdriver = require('selenium-webdriver');
// var base_url = "http://localhost:3000/"
// var app = require('../app/app.js');
// var server;
// var chai = require('chai');
// var chaiWebdriver = require('chai-webdriver');
// var expect = chai.expect

// test.describe('Homepage', function(){
//     this.timeout(15000);
//     var driver;

//     test.before(function(){
//         driver = new Webdriver.Builder().
//             withCapabilities(Webdriver.Capabilities.chrome()).
//             build();
//         this.server = app.listen(3000, function() {});
//         chai.use(chaiWebdriver(driver));
// 	    driver.get(base_url);
//     });

// 	test.it('displays the welcome text', function(){
// 	    chai.expect('li.letter').dom.to.contain.text("Welcome to typeBook!");
// 	});


//     test.after(function(done){
//         driver.quit();
//        	this.server.close(done);
//     });
// });