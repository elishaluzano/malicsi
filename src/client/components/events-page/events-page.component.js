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

    function eventsPageController(eventService) {
        var vm = this;

        vm.$onInit = function() {
            console.log(vm.events);
        }

    }

})();
