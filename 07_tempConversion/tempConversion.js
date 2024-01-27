const convertToCelsius = function(tempatureFarenheit) {
	return Math.round((tempatureFarenheit - 32) * 5 / 9 * 10) / 10;
};

const convertToFahrenheit = function(tempatureCelsius) {
	return Math.round(((tempatureCelsius * 9 / 5) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
	convertToCelsius,
	convertToFahrenheit
};
