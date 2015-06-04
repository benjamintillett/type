describe("Display", function() {

  var character;
  var charArray;
  var display;

  beforeEach(function() {
    character = new Character('r');
    charArray = buildCharacterArray('This is the text I really want to see');
    display   = new Display(charArray,10);
  });
  
  it("correctly assign the display size", function() {
    expect(display.size).toEqual(10);  
  });

  it(".currentText correctly return the first 10 characters",function(){
    expect(display.currentText.length).toEqual(10);
  });

  it(".shiftText moves the currentText 1 to the right", function(){
    display.shiftText();
    expect(display.currentText[0].value).toEqual('h');
    expect(display.currentText[display.currentText.length-1].value).toEqual('e');
  });

  it("knows what the current character is",function(){
    expect(display.currentChar.value).toEqual("i");
  });

  it("knows what the lastCharacterWas", function(){
    expect(display.lastChar.value).toEqual(" ");
  });

});