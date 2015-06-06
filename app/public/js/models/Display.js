if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
	var Character = require('./Character');


function Display(characterArray,size){
	this.characterArray = characterArray;
	this.size 		= size;
	this.position	= 0 

	this.shiftText = function() {
		this.position += 1;
	}	

}

function buildCharacterArray(string){
	characterArray = []
	for ( var i = 0; i < string.length; i++ ){
		characterArray.push(new Character(string[i]));
	}	
	return characterArray;
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

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
	module.exports = Display

