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
        function eventsPageController(eventService, sessionService, adminService, institutionService) {
            var vm = this;
            vm.isAdmin = false;
            vm.user = null;
            vm.event_title = '';
            vm.venue = '';
            vm.start_date = null;
            vm.end_date = null;
            vm.institutions = [];
            vm.ins = null;

            vm.$onInit = function() {
                vm.modalOpen = true;
                 $('select').material_select();

                /* check the current user if admin */
                vm.user = sessionService.user();
                
                if (vm.user) {
                     adminService.getInstitutionsByAdmin(vm.user.user_id)
                        .then(function (user) {
                            if (user) {
                                vm.institutions.push(user);
                                vm.isAdmin = true;
                            }
                        });
                    
                }
            }

            vm.addEvent = function() {
                const body = {
                    event_title: vm.event_title,
                    venue: vm.venue,
                    start_date: (new Date(vm.start_date)).toISOString().substring(0, 10),
                    end_date: (new Date(vm.end_date)).toISOString().substring(0, 10),
                    institution_id_key: 1
                }

                console.log(body);

                eventService.create(body)
                    .then(function(data) {
                        Materialize.toast("Successfully added an event!", 3000);
                    })
            }

        }
})();
