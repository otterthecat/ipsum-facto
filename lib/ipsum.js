var randomNumber = require('./randomNumber');
var lineGenerator = require('./lineGenerator');


exports.use = function(list){

	lineGenerator.use(list);
	return this;
};

exports.generateLine = generateLine = function(){

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