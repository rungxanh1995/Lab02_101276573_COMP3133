const assert = require('assert');
const {add, sub, mul, div} = require("./calculator");

describe('Test addition', function() {
	it('should test 5 + 2 == 7', function() {
		assert.equal(add(5, 2), 7);
	});
	
	it('should test 5 + 2 != 8', function() {
		assert.equal(add(5, 2), 8);
	});
});

describe('Test subtraction', function() {
	it('should test 5 - 2 == 3', function() {
		assert.equal(sub(5, 2), 3);
	});
	
	it('should test 5 - 2 != 5', function() {
		assert.equal(add(5, 2), 5);
	});
});

describe('Test multiplication', function() {
	it('should test 5 * 2 == 10', function() {
		assert.equal(mul(5, 2), 10);
	});
	
	it('should test 5 * 2 != 12', function() {
		assert.equal(mul(5, 2), 12);
	});
});

describe('Test division', function() {
	it('should test 10 / 2 == 5', function() {
		assert.equal(div(10, 2), 5);
	});
	
	it('should test 10 / 2 != 2', function() {
		assert.equal(div(10, 2), 2);
	});
});

