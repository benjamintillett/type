var textProcessor = new TextProcessor;
var charArray = textProcessor.buildCharacterArray(string);
var display   = new Display(charArray,25);
var game      = new Game({display: display});
var template = $('#letters').html();

disableBackButton()


$( document ).ready(function() {
	
	$(document).keypress(function(e) {

		if (game.inprogress === true){
			game.processKeyInput(e.which);
			$('ul').html(game.renderText(template));
		}
		else { 
			game.start();
			$('#holding-text').remove();		
			$('ul').html(game.renderText(template));
		}
	});

	$( "#reset" ).click(function() {
  		game.reset();
  		$('ul').html(game.renderText(template));
	});
});




function disableBackButton(){
	window.location.hash="";
	window.location.hash="";
	window.onhashchange=function(){window.location.hash="";}
}