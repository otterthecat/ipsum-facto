var randomNumber = require('./randomNumber');
var lineGenerator = require('./lineGenerator');


exports.use = function (list) {
	'use strict';

	lineGenerator.use(list);
	return this;
};

var generateLine;
var generateParagraph;

exports.generateLine = generateLine = function () {
	'use strict';
	return lineGenerator.getSentence();
};

exports.generateParagraph = generateParagraph = function (sentenceCount) {
	'use strict';

	var count = sentenceCount || 5;
	var paragraph = '';

	for(count > 0; count--;) {
		paragraph += lineGenerator.getSentence(randomNumber(4, 8));
	}

	return paragraph;
};

exports.build = function (length, func) {
	'use strict';

	for(length > 0; length--;) {
		func(generateParagraph(randomNumber(10, 5)));
	}
};
