(function() {
	function timesent() {
		return function(milliseconds) {
			var date = new Date(milliseconds);
			var mins = date.getMinutes();
			var hours = date.getHours();
			var ampm = 'am';
			if(hours >= 12) {
				hours -= 12;
				ampm = 'pm';
			}
			if(hours == 0)
				hours = 12;
			return hours + ":" + (mins < 10 ? "0" : "") + mins + " " + ampm;
		};
	}

	angular
		.module('blocChat')
		.filter('timesent', timesent);
})();