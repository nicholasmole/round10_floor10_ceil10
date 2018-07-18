var round10_floor10_ceil10 = require('./lib/create-floor10-ceil10');

module.exports = {

  ceil10: function(number, tenths_place) {

		round10_floor10_ceil10();

		return Math.ceil10(number, tenths_place);
		
  },

	floor10: function(number, tenths_place) {
		
		round10_floor10_ceil10();

		return Math.floor10(number, tenths_place);
	}
	
};