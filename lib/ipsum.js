var randomNumber = require('./randomNumber');
var words = require('./words').list;
var lineGenerator = require('./lineGenerator').use(words);

exports.generateLine = generateLine = function(words){

	return lineGenerator.getSentence();
};


exports.generateParagraph = generateParagraph = function(sentenceCount){

	var count = sentenceCount || 5;
	var paragraph = "";

	for(count > 0; count--;){

		paragraph += lineGenerator.getSentence(randomNumber(4,8));
	}

	return paragraph;
};

exports.build = function(length, func){

	for(length > 0; length--;){

		func(generateParagraph(randomNumber(10,5)));
	};
}