const assert = require('assert');
const {celsiusToFahrenheit, fahrenheitToCelsius} = require("./temperature-converter");

describe('Celsius to Fahrenheit conversion', function() {
	it('should convert 0°C to 32°F', function() {
		assert.equal(celsiusToFahrenheit(0), 32);
	});
	
	it('should convert 100°C to 212°F', function() {
		assert.equal(celsiusToFahrenheit(100), 212);
	});
});

describe('Fahrenheit to Celsius conversion', function() {
	it('should convert 32°F to 0°C', function() {
		assert.equal(fahrenheitToCelsius(32), 0);
	});
	
	it('should convert 212°F to 100°C', function() {
		assert.equal(fahrenheitToCelsius(212), 100);
	});
});
