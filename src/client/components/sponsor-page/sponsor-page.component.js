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

	function sponsorPageController(institutionService, sessionService, adminService, $state, userLogService, venueService) {
		var vm = this;
		vm.admin = null;
		vm.events = [];

		vm.$onInit = function() {
			institutionService.getEvents(vm.institution.institution_id)
				.then(function(events) {
					vm.events = events;

					for(let event of vm.events){
						venueService.getOne(event.venue_id_key)
							.then(function(venue){
								console.log(venue);
								event.venue = venue.name;
							})
					}
				});


			var user = sessionService.user();
            if (user) {
                adminService.checkAdminOfInstitution(user.user_id, vm.institution.institution_id)
                    .then(function(institution) {
                        if(institution){
                            vm.admin = true;
                            console.log(institution);
                        }
                    })
                    .catch(function(e){
                        console.log(e);
                    })
            }

		}

		vm.deleteAdminPrivileges = function() {
			adminService.deleteAsAdmin(vm.institution.institution_id, vm.admin.user_id)
				.then(function(admin) {
					Materialize.toast('Successfully deleted as admin!', 2000, 'red');
					var string = "Successfully deleted as admin.";
                    var log = {
                        user_id: user.user_id,
                        institution_id: vm.institution.institution_id,
                        action: string
                    }

                    userLogService.create(log)
                        .then(function(data) {
                          
                        })
                        .catch(function(err) {
                            console.log(err);
                        })
					$state.reload();
				})
				.catch(function(error) {	
					Materialize.toast('Error in deleting as admin', 2000, 'red');
				});
		}
	}
})();
