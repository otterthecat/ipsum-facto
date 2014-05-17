// assertion library
// /////////////////////////////////////////////////////////
var chai = require('chai').should();

// mock objects
// /////////////////////////////////////////////////////////
var nums = ['one', 'two', 'three'];
var animals = ['horse', 'dog', 'cow'];

// modules to test
// /////////////////////////////////////////////////////////
var ipsum = require('../../lib/ipsum');


describe('ipsum', function(){

	describe('#use', function(){

		before(function(){

		});

		it('should return ipsum object (for chaining)', function(){

			var i = ipsum.use([]);
			ipsum.should.equal(i);
		});
	});

	describe('#generateLine', function(){

		it('should return a string', function(){

			ipsum.use(nums).generateLine().should.be.a('string');
		});
	});

	describe('#generateParagraph', function(){

	});

	describe('#build', function(){

	});
});