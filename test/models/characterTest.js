var Character = require('../../app/public/models/Character');
var expect = require('chai').expect


describe("Character", function() {

  before(function() {
    this.character = new Character('r');
  });

  it("Saves the value", function() {
    expect(this.character.value).to.equal("r");
  });

  it("Saves the class", function() {
    expect(this.character.class).to.equal("white");
  });

});