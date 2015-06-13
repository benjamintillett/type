function Game(params){
	this.display = params.display;
	

	this.checkInput = function(input){
		activeChar = this.display.activeChar.value;
		console.log(input);
		console.log(activeChar);
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
}
