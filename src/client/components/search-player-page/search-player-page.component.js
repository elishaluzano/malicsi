(function() {
	'use strict'

	angular
		.module('app')
		.component('searchPlayerPage', {
			template: require('./search-player-page.html'),
			controller: searchPlayerPageController,
			bindings: {
				users: '<'
			}
		});

		function searchPlayerPageController(userService) {
			var vm = this;

			vm.tempUsers = [];

			vm.genderStatus = {
				male: true,
				female: true
			};

			vm.eventChecked = false;
			vm.teamChecked = false;

			vm.$onInit = function() {
				vm.tempUsers = $.extend(true, [], vm.users);
				console.log(vm.eventChecked);
				console.log(vm.teamChecked);
        	}

        	vm.filter = function() {
        		let users = $.extend(true, [], vm.users);

				vm.tempUsers = users.filter(function(user) {
					if (vm.genderStatus.male && user.gender === 'male'){
						return true;
					}
					else if (vm.genderStatus.female && user.gender === 'female') {
						return true;
					}
				});
			}

		}
})();