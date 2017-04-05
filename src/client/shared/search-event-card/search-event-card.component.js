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

<<<<<<< HEAD
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
=======
        function searchEventCardController() {
        	var vm = this;
        	
>>>>>>> 76ff8c29280f1ae3b0fd26dacf31c2d671ed83ad
        }

})();
