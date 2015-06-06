var textProcessor = new TextProcessor;
var charArray = textProcessor.buildCharacterArray(string);
var display   = new Display(charArray,25);
var template = $('#letters').html();
var gameActive = false

$(document).keypress(function(e) {
	if(gameActive == false && String.fromCharCode(e.which) == '\r'){
		$('#holding-text').remove();		
		$('ul').html(renderText(template));
		display.activeChar.class = "active";	
		gameActive = true;		
	}
});

$( document ).ready(function() {
	
	$(document).keypress(function(e) {

		if (gameActive == true) {

			if (String.fromCharCode(e.which) == display.activeChar.value){
				display.activeChar.class = "green";	
			}
			else {
				display.activeChar.class = "red";	
			}
			display.shiftText();
			display.activeChar.class = "active";
			// display.lastChar.class = "white";

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