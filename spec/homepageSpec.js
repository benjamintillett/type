var request = require("request");
var base_url = "http://localhost:3000/"
var app = require('../app/app.js');
var server;

describe("Hello world spec", function(){


	describe("GET /", function(){
		beforeEach(function() {
	    	server = app.listen(app.get('port'), function() {
			});
	  	});
		afterEach(function() {
	    	server.close();
	  	});


		it("returns status code 200",function(done){
			request(base_url, function(error,response,body){
				expect(response.statusCode).toEqual(201);
				done();
			});
		});
	});
});