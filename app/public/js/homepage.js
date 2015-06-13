var textProcessor = new TextProcessor;
var charArray = textProcessor.buildCharacterArray(string);
var display   = new Display(charArray,25);
var game      = new Game({display: display});
var template = $('#letters').html();

$( document ).ready(function() {
	
	$(document).keypress(function(e) {

		if (game.inprogress === true){
			game.processKeyInput(e.which);
			$('ul').html(renderText(template));
		}
		else { 
			game.start();
			$('#holding-text').remove();		
			$('ul').html(renderText(template));
		}
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