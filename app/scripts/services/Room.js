(function() {
	function Room($firebaseArray) {
		var ref = firebase.database().ref().child('rooms');
		var rooms = $firebaseArray(ref);
		
		var addChat = function(name) {
			if(typeof name != "string")
				return -2;
			else if(name.toLowerCase == "default")
				return -1;
			rooms.$add({ test: name });
			return 0;
		};
		
		return {
			all: rooms,
			newRoom: addChat
		};
	}
	
	angular
		.module('blocChat')
		.factory('Room', ['$firebaseArray', Room]);
})();