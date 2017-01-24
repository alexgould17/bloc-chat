(function() {
	function HomeCtrl(Room, Error, $uibModal) {
		this.pageTitle = "Bloc Chat";
		this.rooms = Room.all;
		
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
		
		var createNewRoom = function(name) {
			Room.newRoom(name);
			Error.clearError();
		};
	}
	
	angular
		.module('blocChat')
		.controller('HomeCtrl', ['Room', 'Error', '$uibModal', HomeCtrl]);
})();