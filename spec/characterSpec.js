var Character = require('../app/public/Character');


describe("Character", function() {
  var character;

  beforeEach(function() {
    character = new Character('r');
  });

  it("Saves the value", function() {
    expect(character.value).toEqual("r");
  });

});