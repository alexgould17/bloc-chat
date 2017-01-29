(function() {
	function Error() {
		var Error = {};
		var errorBar = document.getElementById("errorMsgBar");
		
		var show = function() {
			errorBar.setAttribute('visibility','visible');
		};
		
		var hide = function() {
			errorBar.setAttribute('visibility', 'hidden');
		};
		
		Error.newErrorMessage = function(message) {
			errorBar.innerHTML = message;
			console.log(message);
			show();
		};
		
		Error.clearError = function() {
			errorBar.innerHTML = '';
			hide();
		};
		
		return Error;
	}
	angular
		.module('blocChat')
		.factory('Error', Error);
})();