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

        function searchEventCardController() {
        	var vm = this;
        	
        }

})();
