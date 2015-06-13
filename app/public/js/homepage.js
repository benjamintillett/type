var textProcessor = new TextProcessor;
var charArray = textProcessor.buildCharacterArray(string);
var display   = new Display(charArray,25);
var game      = new Game({display: display});
var template = $('#letters').html();
var gameActive = false

$(document).keypress(function(e) {
	if(gameActive == false && String.fromCharCode(e.which) == '\r'){
		$('#holding-text').remove();		
		game.display.activeChar.class = "active";	
		gameActive = true;		
		$('ul').html(renderText(template));
	}
});

$( document ).ready(function() {
	
	$(document).keypress(function(e) {


		if (gameActive == true) {
			game.processKeyInput(e.which);
			$('ul').html(renderText(template));
		}
		// console.log(e.which);
		// if (String.fromCharCode(e.which) == display.activeChar.value){
		// 	display.activeChar.class = "success";	
		// }
		// else {
		// 	display.activeChar.class = "fail";	
		// }
		// display.shiftText();
		// display.activeChar.class = "active";
		// // display.lastChar.class = "white";

	});
});











function renderText(template){
	var displayText = ""
	for ( var i = 0; i < display.size; i++ )
	{
		var character = display.currentText[i];
		displayText = displayText + Mustache.render(template,character);
	}	
	return displayText
}	