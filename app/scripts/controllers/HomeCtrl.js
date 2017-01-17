(function() {
	function HomeCtrl(Room) {
		this.pageTitle = "Bloc Chat";
		this.rooms = Room.all;
	}
	
	angular
		.module('blocChat')
		.controller('HomeCtrl', ['Room', HomeCtrl]);
})();