// assertion library
// /////////////////////////////////////////////////////////
var chai = require('chai');
chai.should();

// mock objects
// /////////////////////////////////////////////////////////
var nums = ['one', 'two', 'three'];

// modules to test
// /////////////////////////////////////////////////////////
var ipsum = require('../../lib/ipsum');

describe('ipsum', function () {
	'use strict';

	describe('#use', function () {
		it('should return ipsum object (for chaining)', function () {
			var i = ipsum.use([]);
			ipsum.should.equal(i);
		});
	});

	describe('#generateLine', function () {
		it('should return a string', function () {
			ipsum.use(nums).generateLine().should.be.a('string');
		});
	});

	describe('#generateParagraph', function () {
		it('should return a string', function () {
			ipsum.use(nums).generateParagraph(2).should.be.a('string');
		});
	});

	describe('#build', function () {
		it('should pass generated text to supplied function', function () {
			var str = 'foobar';
			ipsum.build(2, function (data) {
				str += data;
			});
			str.should.contain('.');
		});
	});
});
