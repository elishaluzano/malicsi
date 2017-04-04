(function () {
	'use strict';

	angular
        .module('app')
        .component('searchEventCard', {
        	template: require('./search-event-card.html'),
        	controller: searchEventCardController,
        	bindings: {
        	   event: '<'
        	}
        });

        function searchEventCardController(venueService) {
            var vm = this;
        	
            vm.$onInit = function() {
                venueService.getOne(vm.event.venue_id_key)
                    .then(function(venue) {
                        console.log(venue.name);
                        vm.venue = venue.name;
                    });
            }

        }

})();
