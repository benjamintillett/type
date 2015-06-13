describe("Game", function() {

  var textProcessor;
  var characterArray;
  var display;
  var game;
  var char_code_s

  beforeEach(function() {
    textProcessor   = new TextProcessor();
    characterArray  = textProcessor.buildCharacterArray('This is the text I really want to see');
    display         = new Display(characterArray,10);
    game            = new Game({display: display});
  });
  
  it("can be intialized with a display", function() {
    expect(game.display).toEqual(display);  
  });

  describe('.checkInput',function(){
    it("knows when input matches the activeCharacter",function(){
      activeCharacter = display.activeChar.value;
      expect(game.checkInput(activeCharacter.charCodeAt())).toEqual(true)
    });

    it("knows char code 1 is the wrong ",function(){
      expect(game.checkInput(1)).toEqual(false)
    });
  });

  describe('.failChar', function(){
    it('the can fail a character', function(){
      game.failChar();
      var character = game.display.activeChar;
      expect(character.class).toEqual('fail');
    });
  });

  describe('.suceedChar', function(){
    it('the can fail a character', function(){
      game.succeedChar();
      var character = game.display.activeChar;
      expect(character.class).toEqual('success');
    });
  });

  describe('.proceesKeyInput', function(){
      
    var activeChar;
    var correctInput;


    beforeEach(function() {
      activeChar = game.display.activeChar 
      correctInput = activeChar.value.charCodeAt();
      inCorrectInput = 22
    });



    it('shifts the text, function',function(){
      game.processKeyInput(correctInput);
      expect(game.display.position).toEqual(1);
    });

    it('suceeds the character for a correct Input',function(){
      game.processKeyInput(correctInput);
      expect(activeChar.class).toEqual('success');
    });

    it('fails a character for a incorrect Input',function(){
      game.processKeyInput(inCorrectInput);
      expect(activeChar.class).toEqual('fail');
    });

  });

  describe('.start',function(){
    it('sets the active chars class to active',function(){
      game.start()
      var activeChar = game.display.activeChar 
      expect(activeChar.class).toEqual('active');
    });

    it('set sets in progress to true', function(){
      game.start();
      expect(game.inprogress).toEqual(true);
    });

  });


});

