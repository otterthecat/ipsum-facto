// assertion library
// /////////////////////////////////////////////////////////
var chai = require('chai').should();

// mock objects
// /////////////////////////////////////////////////////////
var nums = ['one', 'two', 'three', 'four', 'five', 'six'];

// modules to test
// /////////////////////////////////////////////////////////
var lineGenerator = require('../../lib/lineGenerator');

describe('lineGenerator', function(){
	'use strict';

	describe('#use', function(){

		it('should return lineGenerator object', function(){

			lineGenerator.use([]).should.equal(lineGenerator);
		});
	});

	describe('#getSentence', function(){

		it('should return a string', function(){

			lineGenerator.use(nums).getSentence().should.be.a('string');
		});
	});
});
