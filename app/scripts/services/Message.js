(function() {
	function Message($firebaseArray) {
		var Message = {};
		var ref = firebase.database().ref().child("messages");
		var messages = $firebaseArray(ref);
		
		Message.getRoomById = function(roomId) {
			return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
		};
		
		Message.send = function(text, author, roomID) {
			if(!(text && author && roomID))
				return false;
			messages.$add({
				content: text,
				username: author,
				roomId: roomID,
				sentAt: Date.now()
			});
			return true;
		};
		
		return Message;
	}
	
	angular
		.module('blocChat')
		.factory('Message', ['$firebaseArray', Message]);
})();