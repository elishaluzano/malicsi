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
                    //if (user) {
                        //hardcoded yung 3 (user.user_id)
                        adminService.checkAdmin(3)
                            .then(function(admin) {
                                //if (admin) {
                                    vm.isAdmin = true;
                                //}
                            });
                    //}
                });

            let toDate = new Date().getTime();
            let startDate = new Date(vm.event.start_date).getTime();
            let endDate = new Date(vm.event.end_date).getTime();
            endDate = addDate(endDate, 1);

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
        function addDate(date, days) {
            var result = new Date(date);
            result.setDate(result.getDate() + days);
            return result;
        }
    }

})();
