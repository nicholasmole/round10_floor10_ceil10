var expect = require('chai').expect;
var _math = require('../index');

describe('#_math get floor values', function() {
	it('should convert number 1.77 to 1', function() {
			var result = _math.floor10(1.77, 0);
			expect(result).to.equal(1);
	});
	it('should convert number 1.777 to 1.7', function() {
		var result = _math.floor10(1.77, -1);
		expect(result).to.equal(1.7);
	});
});	


describe('#_math get ceil values', function() {
	it('should convert number 1.77 to 2', function() {
			var result = _math.ceil10(1.77, 0);
			expect(result).to.equal(2);
	});
	it('should convert number 1.777 to 1.8', function() {
		var result = _math.ceil10(1.77, -1);
		expect(result).to.equal(1.8);
	});
});	