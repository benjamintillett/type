function Display(characterArray,size){
	this.characterArray = characterArray;
	this.size 		= size;
	this.position	= 0 

	this.shiftText = function() {
		this.position += 1;
		this.activeChar.class = 'active';
	}	

	this.reset = function(){
		this.position = 0
		this.characterArray.forEach(function(character){
			character.class = 'white';
		});
		this.activeChar.class = 'active';
	}

	this.renderText = function(template){
		var displayText = ""
		for ( var i = 0; i < this.size; i++ )
		{
			var character = this.currentText[i];
			displayText = displayText + Mustache.render(template,character);
		}	
		return displayText
	}

}

Object.defineProperty(Display.prototype, "currentText", { 
	get: function () { 
		return this.characterArray.slice(this.position,this.position + this.size); 
	} 
});

Object.defineProperty(Display.prototype, "activeChar", { 
	get: function () { 
		return this.characterArray[Math.ceil(this.position + this.size/2)];
	} 
});

Object.defineProperty(Display.prototype, "lastChar", { 
	get: function () { 
		return this.characterArray[Math.ceil(this.position + this.size/2) - 1];
	} 
});

