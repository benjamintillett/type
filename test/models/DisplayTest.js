var inTest = true;
var Character = require('../../app/public/js/models/Character');
var TextProcessor = require('../../app/public/js/models/TextProcessor');
var Display = require('../../app/public/js/models/Display');
var expect = require('chai').expect


describe("Display", function() {

  before(function() {
  	textProcessor 		= new TextProcessor();
  	var characterArray 	= textProcessor.buildCharacterArray('This is the text I really want to see');
    this.display   		= new Display(characterArray,10);
  });
  
  it("assign the display size", function() {
    expect(this.display.size).to.equal(10);  
  });

  it("store the input string as an a array of chars", function(){
  	expect(this.display.characterArray[0].constructor).to.equal(Character);  
  });

  it(".currentText correctly return the first 10 characters",function(){
    expect(this.display.currentText.length).to.equal(10);
  });

  it(".shiftText moves the currentText 1 to the right", function(){
    this.display.shiftText();
    expect(this.display.currentText[0].value).to.equal('h');
    expect(this.display.currentText[this.display.currentText.length-1].value).to.equal('e');
  });

  it("knows what the active character is",function(){
    var display = new Display(characterArray,10);
    expect(display.activeChar.value).to.equal("i");
  });

  it("knows what the lastCharacterWas", function(){
    var display = new Display(characterArray,10);
    expect(display.lastChar.value).to.equal(" ");
  });

});