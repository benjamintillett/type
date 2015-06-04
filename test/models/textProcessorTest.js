var TextProcessor = require('../../app/public/models/TextProcessor');
var Character = require('../../app/public/models/Character');
var expect = require('chai').expect

describe("TextProcessor", function() {

  before(function() {
    this.textProcessor = new TextProcessor();
    this.testString = 'This is the text I really want to see'
  });

  describe('.buildCharacterArray', function(){
	  it("returns and array of characters", function() {
	  	var result = this.textProcessor.buildCharacterArray(this.testString)[0];
	    expect(result.constructor).to.equal(Character);  
	  });
	  it("has the correct number of characters", function(){
	  	var result = this.textProcessor.buildCharacterArray(this.testString);
	  	expect(result.length).to.equal(this.testString.length);
	  });


  });



});