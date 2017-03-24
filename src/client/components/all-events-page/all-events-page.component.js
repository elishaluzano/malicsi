(function() {
    'use strict';

    angular
        .module('app')
        .component('allEventsPage', {
            template: require('./all-events-page.html'),
            controller: allEventsPageController
        });

        function allEventsPageController(eventService) {
            var vm = this;

            vm.eventCardList = eventService.getAll();
        }
})();