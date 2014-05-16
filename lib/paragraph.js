var randomNumber = require('./randomNumber');
var words = require('./words').list();
var s = require('./sentence');

s.use(words);

exports.getParagraph = function(sentenceCount){

	var paragraph = "";
	for(sentenceCount > 0; sentenceCount--;){
		paragraph += s.getSentence(randomNumber(4,8));
	}

	return paragraph;
};