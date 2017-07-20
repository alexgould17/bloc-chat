(function() {
	function HomeCtrl($scope, Room, Error, Message, $uibModal, $cookies, $location, $anchorScroll, $timeout) {
		this.pageTitle = "Bloc Chat";
		this.rooms = Room.all;
		this.messages = [];
		
		$scope.activeRoom = '';
		var activeRoomId = null;
		
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
			activeRoomId = roomId;
			//this.roomTitle = roomName
			document.getElementById('messageAreaTitleH2').innerHTML = roomName;
			this.messages = Message.getRoomById(activeRoomId);
			scrollToBottom();
		};
		
		this.sendMessage = function(message) {
			var txt = message;
			var usr = $cookies.get('blocChatCurrentUser');
			if(/^\s+$/.test(txt)) {
				Error.newErrorMessage('Message text cannot be only whitespace!');
				return false;
			} else if(txt === '') {
				Error.newErrorMessage('Message cannot be blank!');
				return false;
			} else if(!activeRoomId) {
				Error.newErrorMessage('No active room set! You cannot send a message to nowhere!');
				return false;
			} else if(/^\s+$/.test(usr) || usr === '') {
				Error.newErrorMessage('No username set! Username must be set to send a message!');
				return false;
			} else {
				Message.send(txt, usr, activeRoomId);
				Error.clearError();
				this.messageText = "";
				scrollToBottom();
			}
		}
		
		var createNewRoom = function(name) {
			Room.newRoom(name);
			Error.clearError();
		};
		
		var scrollToBottom = function() {
			$timeout(function(){
				var msgArea = document.getElementById("messageArea");
				msgArea.scrollTop = msgArea.scrollHeight;
				console.log(msgArea.scrollHeight);
			}, 0);

		};
	}
	
	angular
		.module('blocChat')
		.controller('HomeCtrl', ['$scope', 'Room', 'Error', 'Message', '$uibModal', '$cookies', '$location', '$anchorScroll', '$timeout', HomeCtrl]);
})();