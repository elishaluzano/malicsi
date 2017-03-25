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
        function eventsPageController(eventService, sessionService, adminService) {
            var vm = this;
            vm.isAdmin = false;

            vm.$onInit = function() {
                /* check the current user 
                if (sessionService.user().user_id) {
                    //vm.loggedUser = sessionService.user().user_id;

                    if (adminService.checkAdmin(sessionService.user().user_id)) {
                        isAdmin = true;
                    }
                }
                */
            }
        }
})();
