(function() {
    'use strict';

    angular
        .module('app')
        .component('eventsPage', {
            template: require('./events-page.html'),
            controller: eventsPageController,
            bindings: {
                events: '<'
            }
        });

        /* ADD sessionService as parameter */
        function eventsPageController(eventService) {
            var vm = this;

            /* check the current user
            if (sessionService.user().user_id === )
            */
        }
})();
