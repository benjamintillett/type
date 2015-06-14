function Game(params){
	this.display = params.display;
	this.inprogress = false;

	this.checkInput = function(input){
		activeChar = this.display.activeChar.value;
		return input === activeChar.charCodeAt()
	}

	this.failChar = function(){
		this.display.activeChar.class = "fail"
	}

	this.succeedChar = function(){
		this.display.activeChar.class = "success"
	
	}

	this.processKeyInput = function(input){
		if (this.checkInput(input) == true){
			this.succeedChar();
		} else {
			this.failChar();
		}
		this.display.shiftText();
	}

	this.start = function(){
		this.inprogress = true;
		this.display.activeChar.class = 'active';
	}

	this.reset = function(){
		this.display.reset();
	}

	this.renderText = function(template){
		return this.display.renderText(template);
	}
}








