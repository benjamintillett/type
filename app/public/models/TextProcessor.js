var Character = require('./Character');

function TextProcessor(){
	this.buildCharacterArray = function(string){
		characterArray = []
		for ( var i = 0; i < string.length; i++ ){
			characterArray.push(new Character(string[i]));
		}	
		return characterArray;
	}

}

module.exports = TextProcessor;