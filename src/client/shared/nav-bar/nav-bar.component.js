(function() {
	'use strict';

	angular
		.module('app')
		.component('navBar', {
			template: require('./nav-bar.html'),
			controller: navController
		});
		
	function navController($http) {

		var vm = this;

		vm.navLinks = [

			{ link: '/live', text: 'Live' },
			{ link: '/events', text: 'Events' },
			{ link: '/teams', text: 'Teams' },
			{ link: '/schedules', text: 'Schedules' },
			{ link: '/sponsors', text: 'Sponsors' }
		];

		vm.activateLink = activateLink;
		vm.logoutUser = logoutUser;

		function activateLink(link) {
			for (let navItem of vm.navLinks) {
				if (navItem === link) {
					$('.link-' + navItem.text).addClass('active');
				}
				else {
					$('.link-' + navItem.text).removeClass('active');
				}
			}
		}

		function logoutUser() {
			$http
				.post('/logout')
				.then(function(response) {
					console.log('Success in logout method');
					window.location.href = response.data.redirect;
				}, function(response) {
					console.log('Error in logout method');
				});
		}
	}
})();