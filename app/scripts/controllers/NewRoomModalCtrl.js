(function() {
	function NewRoomModalCtrl($uibModalInstance) {
		this.ok = function() { 
			$uibModalInstance.close(document.getElementById('newRoomModalTextbox').value);
		};
		
		this.cancel = function() {
			$uibModalInstance.dismiss('cancel');
		};
	}
	
	angular
		.module('blocChat')
		.controller('NewRoomModalCtrl', ['$uibModalInstance', NewRoomModalCtrl])
})();