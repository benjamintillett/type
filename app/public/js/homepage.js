var textProcessor = new TextProcessor;
var charArray = textProcessor.buildCharacterArray(string);
var display   = new Display(charArray,25);
var game      = new Game({display: display});
var template = $('#letters').html();




$( document ).ready(function() {

	
	$(document).keypress(function(e) {
		keyInputController(e);
	});

	$( "#reset" ).click(function() {
  		game.reset();
  		$('ul').html(game.renderText(template));
	});
});


function keyInputController(e){
	if (game.inprogress === true){
		game.processKeyInput(e.which);
		$('ul').html(game.renderText(template));
	}
	else { 
		game.start();
		$('#holding-text').remove();		
		$('ul').html(game.renderText(template));
	}
}



$(document).on("keydown", function (e) {
    if (e.which === 8 && !$(e.target).is("input, textarea")) {
        e.preventDefault();
       	keyInputController(e);
    }
});