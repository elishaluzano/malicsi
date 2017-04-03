(function() {
    'use strict';

    angular
        .module('app')
        .component('eventPage', {
            template: require('./event-page.html'),
            controller: eventPageController,
            bindings: {
                event: '<'
            }
        });

    function eventPageController() {
        var vm = this;

        vm.status = '';
        
        vm.$onInit = function() {
            let toDate = new Date().getTime();
            let startDate = new Date(vm.event.start_date).getTime();
            let endDate = new Date(vm.event.end_date).getTime();

            if (toDate >= startDate && toDate <= endDate) {
                vm.status = 'Live';
            }
            else if (toDate < startDate) {
                vm.status = 'Soon';
            }
            else {
                vm.status = 'Done';
            }
        }

    }
})();
