(function() {
    'use strict';
    angular
        .module('app')
        .component('schedulePage',{
            template: require('./schedule-page.html'),
            controller: schedulePageController,
            bindings: {
                sports: '<'
            }
        });

    function schedulePageController(sportService, eventService) {
        var vm = this;

        vm.$onInit = function() {
           console.log(vm.sports);
        }
    }
})();
