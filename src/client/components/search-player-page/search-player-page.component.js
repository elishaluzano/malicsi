(function() {
	'use strict'

	angular
		.module('app')
		.component('searchPlayerPage', {
			template: require('./search-player-page.html'),
			controller: searchPlayerPageController,
			bindings: {
				users: '<',
				allTeams: '<',
				allEvents: '<'
			}
		});

		function searchPlayerPageController(teamService) {
			var vm = this;

			vm.eventSelected = 'all';

			vm.teamSelected = 'all';

			vm.teamComposedOf = [];

			vm.tempUsers = [];

			vm.genderStatus = {
				male: true,
				female: true
			};

			vm.$onInit = function() {
				vm.tempUsers = $.extend(true, [], vm.users);
				console.log(vm.allTeams);
				console.log(vm.allEvents);
        	}

        	vm.filter = function() {
        		vm.tempUsers = [];
        		let users = angular.copy(vm.users);

        		teamService.getUsers(vm.teamSelected)
        			.then(function(teamUsers) {;
        				vm.teamComposedOf = [];
        				for(let user of teamUsers){
        					vm.teamComposedOf.push(user.user_id);
        				}

        				vm.tempUsers = users.filter(function(user) {
							if (vm.genderStatus.male && user.gender === 'male'){
								if (vm.teamComposedOf.indexOf(user.user_id) !== -1 || vm.teamSelected === 'all') {
									return true;
								}
								
							}
							else if (vm.genderStatus.female && user.gender === 'female') {
								if (vm.teamComposedOf.indexOf(user.user_id) !== -1 || vm.teamSelected === 'all') {
									return true;
								}
							}
						});
        			});
			}

		}
})();