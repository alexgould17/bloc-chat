(function() {
	function HomeCtrl() {
		this.pageTitle = "Home";
	}
	
	angular
		.module('blocChat')
		.controller('HomeCtrl', HomeCtrl);
})();