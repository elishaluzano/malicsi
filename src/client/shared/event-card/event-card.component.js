(function () {
    'use strict';

    angular
        .module('app')
        .component('eventCard', {
            template: require('./event-card.html'),
            controller: eventCardController,
            bindings: {
                event: '<'
            }
        });

    function eventCardController(institutionService, adminService, sessionService) {
        var vm = this;

        vm.institution = null;
        vm.isAdmin = false;
        vm.eventStatus = {
            color: '',
            text: ''
        };

        vm.$onInit = function() {
            institutionService.getOne(vm.event.institution_id_key)
                .then(function(institution) {
                    vm.institution = institution;
                    let user = sessionService.user();
                    if (user) {
                        adminService.checkAdmin(user.user_id)
                            .then(function(admin) {
                                if (admin) {
                                    vm.isAdmin = true;
                                }
                            });
                    }
                });

            let toDate = new Date().getTime();
            let startDate = new Date(vm.event.start_date).getTime();
            let endDate = new Date(vm.event.end_date).getTime();

            if (toDate >= startDate && toDate <= endDate) {
                vm.eventStatus.color = 'green';
                vm.eventStatus.text = 'Live';
            }
            else if (toDate < startDate) {
                vm.eventStatus.color = 'red';
                vm.eventStatus.text = 'Soon';
            }
            else {
                vm.eventStatus.color = 'black';
                vm.eventStatus.text = 'Done';
            }
        }
    }

})();
