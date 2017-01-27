(function() {
	function ChatCookies($cookies, $uibModal) {
		var currentUser = $cookies.get('blocChatCurrentUser');
		if(!currentUser || currentUser === '') {
			var modalInsatnce = $uibModal.open({
				templateUrl: '/templates/usernamemodal.html',
				controller: function($uibModalInstance) {
					this.ok = function() {
						var name = document.getElementById('usernameModalTextbox').value;
						if(!(/^\s+$/.test(name) || name == '')) {
							$uibModalInstance.close(name);
						}
					};
				},
				controllerAs: 'umCtrl',
				size: 'sm',
				backdrop: 'static'
			});
			modalInsatnce.result.then(function(chatUsername) {
				$cookies.put('blocChatCurrentUser', chatUsername);
				currentUser = chatUsername;
				
			}, function () {});
		}
	}
	
	angular
		.module('blocChat')
		.run(['$cookies', '$uibModal', ChatCookies]);
})();