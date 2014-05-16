var randomNumber = require('./randomNumber');
var s = require('./sentence');

exports.getParagraph = function(sentenceCount){

	var paragraph = "";
	for(sentenceCount > 0; sentenceCount--;){
		paragraph += s.getSentence(randomNumber(4,8));
	}

	return paragraph;
};