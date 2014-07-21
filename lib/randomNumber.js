module.exports = function(max, min){
	'use strict';

	if(arguments.length === 1){
		return Math.floor(Math.random() * max);
	} else if(arguments.length === 2){
		return Math.floor(Math.random() * (max - min + 1) + min);
	}
};
