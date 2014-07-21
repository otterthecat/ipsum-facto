var randomNumber = require('./randomNumber');
var words;
var range;

var getWords = function (array, count) {
	'use strict';

	var sentence = '';
	for(count  > 0; count--;) {
		sentence += (' ' + array[randomNumber(range)]);
	}

	return sentence + '.';
};

exports.use = function (wordArray) {
	'use strict';

	words = wordArray;
	range = words.length - 1;
	return this;
};

exports.getSentence = function (wordCount) {
	'use strict';

	if(!range) {
		console.error('No list range defined');
		return false;
	}

	wordCount = wordCount || 5;

	var firstWord = words[randomNumber(range)];
	return firstWord.charAt(0).toUpperCase() + firstWord.slice(1) +
		getWords(words, wordCount);
};
