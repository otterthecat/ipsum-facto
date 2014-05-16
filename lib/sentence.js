var randomNumber = require('./randomNumber');
var words = require('./words').list;

exports.getSentence = function(wordCount){

	var sentence = "";
	var range = words.length - 1;
	for(wordCount > 0; wordCount--;){

		sentence += (" " + words[randomNumber(range)]);
	}

	return sentence += ".";
};