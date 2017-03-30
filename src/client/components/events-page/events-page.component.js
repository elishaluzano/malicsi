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
                $('.modal').modal();

                /* check the current user if admin */
                //let user = sessionService.user();

                //hardcoded yung 3
                //if (user) {
                    adminService.checkAdmin(3)
                        .then(function (user) {
                            if (user) {
                                vm.isAdmin = true;
                                console.log(vm.isAdmin);
                            }
                        });
                //}
            }
        }
})();
