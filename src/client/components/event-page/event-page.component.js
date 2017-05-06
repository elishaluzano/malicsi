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

    function eventPageController(eventService) {
        var vm = this;

        vm.status = '';
        
        vm.$onInit = function() {
            let toDate = new Date().getTime();
            let startDate = new Date(vm.event.start_date);//.getTime();
            let endDate = new Date(vm.event.end_date);//.getTime();
            endDate = addDate(endDate, 1);
    

            if (toDate >= startDate && toDate <= endDate) {
                vm.status = 'Live';
            }
            else if (toDate < startDate) {
                vm.status = 'Soon';
            }
            else {
                vm.status = 'Done sana'; // <- temporary
            }

            if (vm.status === 'Done sana') {
                eventService.getDoneEventInfo(vm.event.event_id)
                    .then(function(event) {
                        vm.status = 'Done';
                    }); 
            }       
        }
        function addDate(date, days) {
            var result = new Date(date);
            result.setDate(result.getDate() + days);
            return result;
        }
    }

})();
