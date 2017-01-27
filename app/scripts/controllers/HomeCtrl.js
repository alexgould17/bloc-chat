(function() {
	function HomeCtrl($scope, Room, Error, Message, $uibModal) {
		this.pageTitle = "Bloc Chat";
		this.rooms = Room.all;
		this.messages = [];
		
		$scope.activeRoom = '';
		
		this.openNewRoomModal = function() {
			var modalInsatnce = $uibModal.open({
				templateUrl: '/templates/newroommodal.html',
				controller: 'NewRoomModalCtrl',
				controllerAs: 'nrmCtrl',
				size: 'sm'
			});
			Error.clearError();
			
			modalInsatnce.result.then(function() {
				createNewRoom(document.getElementById('newRoomModalTextbox').value);
			}, function () {
				Error.newErrorMessage("Cancelled");
			});
		};
		
		this.setActiveRoom = function(roomName, roomId) {
			$scope.activeRoom = roomName;
			document.getElementById('messageAreaTitleH2').innerHTML = roomName;
			this.messages = Message.getRoomById(roomId);
		};
		
		var createNewRoom = function(name) {
			Room.newRoom(name);
			Error.clearError();
		};
	}
	
	angular
		.module('blocChat')
		.controller('HomeCtrl', ['$scope', 'Room', 'Error', 'Message', '$uibModal', HomeCtrl]);
})();