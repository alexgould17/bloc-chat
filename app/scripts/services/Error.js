(function() {
	function Error() {
		var Error = {};
		
		Error.newErrorMessage = function(message) {
			var errorBar = document.getElementById("errorMsgBar");
			errorBar.innerHTML = message;
			errorBar.setAttribute('background', '#CC4422');
			console.log(message);
		};
		
		Error.clearError = function() {
			var errorBar = document.getElementById("errorMsgBar");
			errorBar.innerHTML = '';
			errorBar.setAttribute('background', '#4466EE');
		};
		
		return Error;
	}
	angular
		.module('blocChat')
		.factory('Error', Error);
})();