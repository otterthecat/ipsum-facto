var ipsum = require('./lib/ipsum');
var words = require('./lib/words');
var randomNumber = require('./lib/randomNumber');
var http = require('http');


var server = http.createServer().listen(1337);
server.on('request', function(req, res){

	res.writeHead(200, {'Content-Type': 'text/html'});

	ipsum.use(words.wilde).build(4, function(data){

		res.write("<p>" + data + "</p>");
	});
	res.end();
});