var p = require('./lib/paragraph');
var randomNumber = require('./lib/randomNumber');

//console.log(p.generateParagraph(randomNumber(6,3)));

var foo = function(a){

	var arr = a ? a : [];
	return function(data){

		arr.push(data);
	};
};

var bar = function(){

	return function(data){

		myString += data;
	};
};

p.build(4, foo(myArray = []));
console.log(myArray);
console.log("\n\n");

p.build(2, bar(myString = ""));
console.log(myString);