var randomNumber = require('./randomNumber');
var words = require('./words').list;
var s = require('./sentence').use(words);

exports.generateParagraph = generateParagraph = function(sentenceCount){

	var paragraph = "";
	for(sentenceCount > 0; sentenceCount--;){
		paragraph += s.getSentence(randomNumber(4,8));
	}

	return paragraph;
};

exports.build = function(length, func){

	for(length > 0; length--;){

		func(generateParagraph(randomNumber(10,5)));
	};
}