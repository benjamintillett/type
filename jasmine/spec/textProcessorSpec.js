describe("TextProcessor", function() {

  var textProcessor;
  var testString;

  beforeEach(function() {
    textProcessor = new TextProcessor();
    testString = 'This is the text I really want to see'
  });

  describe('.buildCharacterArray', function(){
	  it("returns and array of characters", function() {
	  	var result = textProcessor.buildCharacterArray(testString)[0];
	    expect(result.constructor).toEqual(Character);  
	  });
	  it("has the correct number of characters", function(){
	  	var result = textProcessor.buildCharacterArray(testString);
	  	expect(result.length).toEqual(testString.length);
	  });

  });

});