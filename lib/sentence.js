var randomNumber = require('./randomNumber');
var words, range;


exports.use = function(wordArray){

	words = wordArray;
	range = words.length - 1;
	return this;
}

exports.getSentence = function(wordCount){

	if(!range){
		console.error("No list range defined");
		return false;
	}

	if(!wordCount){
		wordCount = 5;
	}

	var firstWord = words[randomNumber(range)];
	var sentence = firstWord.charAt(0).toUpperCase() + firstWord.slice(1);
	for(wordCount > 0; wordCount--;){

		sentence += (" " + words[randomNumber(range)]);
	}

	return sentence += ". ";
};