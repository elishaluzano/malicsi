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
        	vm.venue = '';

            vm.$onInit = function() {
                venueService.getOne(vm.event.venue_id_key)
                    .then(function(v) {
                        console.log(v);
                        vm.venue = v.name;
                    })
            }
        }
    }
    
})();
