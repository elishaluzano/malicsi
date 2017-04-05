(function() {
    'use strict';
    
    angular
        .module('app')
        .component('searchEventPage', {
            template: require('./search-event-page.html'),
            controller: searchEventPageController,
            bindings: {
                events: '<',
                allEvents: '<',
                allSponsors: '<',
                allVenues: '<'
            }
        });

    function searchEventPageController() {
        var vm = this;
        vm.start_date = '';
        vm.end_date = '';
        vm.eventSponsor = 'all';
        vm.eventVenue = 'all';
    }

})();   
