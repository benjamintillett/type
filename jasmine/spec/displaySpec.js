describe("Display", function() {

	var textProcessor;
	var characterArray;
	var display;

	beforeEach(function() {
		textProcessor   = new TextProcessor();
		characterArray  = textProcessor.buildCharacterArray('This is the text I really want to see');
		display         = new Display(characterArray,10);
	});

	it("assign the display size", function() {
		expect(display.size).toEqual(10);  
	});

	it("store the input string as an a array of chars", function(){
		expect(display.characterArray[0].constructor).toEqual(Character);  
	});

	it(".currentText correctly return the first 10 characters",function(){
		expect(display.currentText.length).toEqual(10);
	});

	it(".shiftText moves the currentText 1 to the right", function(){
		display.shiftText();
		expect(display.currentText[0].value).toEqual('h');
		expect(display.currentText[display.currentText.length-1].value).toEqual('e');
	});

	describe('.unshiftText'



	it("knows what the active character is",function(){
		var display = new Display(characterArray,10);
		expect(display.activeChar.value).toEqual("i");
	});

	it("knows what the lastCharacterWas", function(){
		var display = new Display(characterArray,10);
		expect(display.lastChar.value).toEqual(" ");
	});


	describe('.reset',function(){
		it('sets the display position to 0',function(){
			display.position = 50;
			display.reset()
			expect(display.position).toEqual(0);
		});  

		it('resets the classes',function(){
			display.activeChar.class = 'popo'
			display.reset();
			expect(display.activeChar.class).toEqual('active');

		});

	})

	describe('.renderText', function(){
		it('renders the current text to a given template',function(){
			var template = "{{value}}"
			expect(display.renderText(template)).toEqual('This is th');
		});
	});

});

