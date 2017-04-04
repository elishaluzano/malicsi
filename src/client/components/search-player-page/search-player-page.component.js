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

		function searchPlayerPageController(sportService) {
			var vm = this;

			vm.tempUsers = [];
			vm.sports = [];

			vm.genderStatus = {
				male: true,
				female: true
			};

			vm.eventChecked = false;
			vm.teamChecked = false;

			vm.$onInit = function() {
				vm.tempUsers = $.extend(true, [], vm.users);
				sportService.getAll()
					.then(function(sports) {
						vm.sports = sports;
					});
					console.log(vm.sports);
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