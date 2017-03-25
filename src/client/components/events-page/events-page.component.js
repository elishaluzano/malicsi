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

        /* ADD sessionService, userService as parameter */
        function eventsPageController(eventService, adminService) {
            var vm = this;
            var vm.isAdmin = false;

            /* check the current user
            if (sessionService.user().user_id === )
            */
        }
})();
