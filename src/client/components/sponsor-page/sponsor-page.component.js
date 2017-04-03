(function(){
	'use strict';
	angular
		.module('app')
		.component('sponsorPage', {
			template: require('./sponsor-page.html'),
			controller: sponsorPageController,
			bindings: {
				institution: '<',
				componentName: '<',
				params: '<'
			}
		});

	function sponsorPageController(institutionService, sessionService, adminService, $state) {
		var vm = this;
		vm.admin = null;
		vm.events = [];

		vm.$onInit = function() {
			institutionService.getEvents(vm.institution.institution_id)
				.then(function(events) {
					vm.events = events;
				});

			let user = sessionService.user();
			adminService.checkAdmin(user.user_id)
				.then(function(admin) {
					if (admin.institution_no && vm.institution.institution_id == admin.institution_no) {
						vm.admin = admin;
					}
				});
		}

		vm.deleteAdminPrivileges = function() {
			adminService.deleteAsAdmin(vm.institution.institution_id, vm.admin.user_id)
				.then(function(admin) {
					Materialize.toast('Successfully deleted as admin!', 2000, 'red');
					$state.reload();
				})
				.catch(function(error) {	
					Materialize.toast('Error in deleting as admin', 2000, 'red');
				});
		}
	}
})();
