(function() {
	function HomeCtrl(Room) {
		this.pageTitle = "Bloc Chat";
		this.rooms = Room.all;
		this.showNewRoomModal = false;
		this.showErrorBar = false;
		
		this.closeNewRoomModal = function() {
			this.showNewRoomModal = false;
		};
		
		this.createNewRoom = function() {
			var roomName = document.getElementById('newRoomModalTextbox').value;
			var roomNameWasValid = Room.newRoom(name);
			if(roomNameWasValid == -2)
				roomNameWasValid = Room.newRoom(name.toString());
			if(roomNameWasValid == -1) {
				errorMessage('Room name cannot be "Default"!');
			else if(roomNameWasValid == 0) {
				this.closeNewRoomModal();
				this.showErrorBar = false;
			}
		};
		
		var errorMessage = function(message) {
			var errorBar = document.getElementById("errorMsgBar");
			errorBar.innerHTML = message;
			this.showErrorBar = true;
		};
	}
	
	angular
		.module('blocChat')
		.controller('HomeCtrl', ['Room', HomeCtrl]);
})();