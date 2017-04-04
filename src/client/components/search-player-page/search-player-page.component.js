(function() {
	'use strict'

	angular
		.module('app')
		.component('searchPlayerPage', {
			template: require('./search-player-page.html'),
			controller: searchPlayerPageController,
			bindings: {
				users: '<',
				teams: '<',
				events: '<'
			}
		});

		function searchPlayerPageController(eventService) {
			var vm = this;

			vm.eventParticipated = 'all';

			vm.teamBelong = 'all';

			vm.filterEvent = [];

			vm.tempUsers = [];

			vm.genderStatus = {
				male: true,
				female: true
			};

			vm.eventChecked = false;
			vm.teamChecked = false;

			vm.$onInit = function() {
				vm.tempUsers = $.extend(true, [], vm.users);
				console.log(vm.sports);
				console.log(vm.users);
        	}

        	vm.filter = function() {
        		let users = $.extend(true, [], vm.users);

        		console.log(vm.eventParticipated);

        		eventService.getSports(vm.eventParticipated)
        			.then(function(filterSports) {
        				vm.filterEvent = filterSports;
        			});

				vm.tempUsers = users.filter(function(user) {
					if (vm.genderStatus.male && user.gender === 'male'){
						return true;
					}
					else if (vm.genderStatus.female && user.gender === 'female') {
						return true;
					}
				});

				console.log(vm.filterEvent);
			}

		}
})();