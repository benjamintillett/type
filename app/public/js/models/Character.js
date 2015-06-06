function Character(value) {

	this.value 		= value
	this.class  	= "white"
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
	module.exports = Character
