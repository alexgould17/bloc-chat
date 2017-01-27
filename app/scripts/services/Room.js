(function() {
	function Room($firebaseArray) {
		var ref = firebase.database().ref().child('rooms');
		var rooms = $firebaseArray(ref);
		
		var addChat = function(name) {
			rooms.$add(name).then(function(ref) {
				var id = ref.key;
				rooms.$indexFor(id);
			}, function(ref){
				console.log("Adding data record failed!");
			});
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