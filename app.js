var ipsum = require('./lib/ipsum');
var words = require('./lib/words');
var randomNumber = require('./lib/randomNumber');
var http = require('http');

var foo = function(a){

	var arr = a ? a : [];
	return function(data){

		arr.push(data);
	};
};

var returnArray = function(len){

	ipsum.use(words.wilde).build(len, foo(a = []));
	return a;
};

var server = http.createServer().listen(1337);
server.on('request', function(req, res){

	res.writeHead(200, {'Content-Type': 'text/html'});

	// var jo = {
	// 	title: ipsum.use(words.wilde).generateLine(),
	// 	content: returnArray(3)
	// };

	// res.write(JSON.stringify(jo));
	ipsum.use(words.wilde).build(4, function(data){

		res.write("<p>" + data + "</p>");
	});
	res.end();
});