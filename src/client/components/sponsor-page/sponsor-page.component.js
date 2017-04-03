(function(){
	'use strict';
	angular
		.module('app')
		.component('sponsorPage', {
			template: require('./sponsor-page.html'),
			controller: sponsorPageController,
			bindings: {
				institution: '<'
			}
		});

	function sponsorPageController(institutionService) {
		var vm = this;
		vm.events = '';
		vm.$onInit = function() {
			institutionService.getEvents(vm.institution.institution_id)
				.then(function(events) {
					vm.events = events;
				});
		}
	}
})();
