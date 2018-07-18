var round_floor_ceil = require('./lib/round_floor_ceil');

module.exports = {

  ceil10: function(number, tenths_place) {

		round_floor_ceil();

		return Math.ceil10(number, tenths_place);
		
  },

	floor10: function(number, tenths_place) {
		
		round_floor_ceil();

		return Math.floor10(number, tenths_place);
	}
	
};