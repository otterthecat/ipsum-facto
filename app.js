var p = require('./lib/paragraph');
var randomNumber = require('./lib/randomNumber');
var http = require('http');


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

var server = http.createServer().listen(1337);
server.on('request', function(req, res){

	res.writeHead(200, {'Content-Type': 'text/html'});

	p.build(3, function(data){

		res.write("<p>"+data+"</p>");
	});

	res.end();
});