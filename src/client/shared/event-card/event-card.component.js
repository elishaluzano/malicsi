(function () {
    'use strict';

    angular
        .module('app')
        .component('eventCard', {
            template: require('./event-card.html'),
            controller: eventCardController,
            bindings: {
                event: '<',
                isAdmin: '<'
            }
        });

    function eventCardController(institutionService) {
        var vm = this;

        vm.eventStatus = {
            color: '',
            text: ''
        };
        
        var newDate = null;

        vm.$onInit = function() {
            console.log(vm.event);
            institutionService.getOne(event.institution_id_key)
                .then(function(data) {
                    if (data) {
                        vm.institutionName = data.name;
                    }
                });

            newDate = new Date().getTime();
            if (newDate > new Date(event.start_date).getTime && newDate < new Date(event.end_date).getTime) {
                vm.eventStatus.color = 'green';
                vm.eventStatus.text = 'Live';
            }
            else if (newDate < new Date(event.start_date).getTime) {
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
