(function() {
    'use strict';

    angular
        .module('app')
        .component('liveEventPage', {
            template: require('./live-event-page.html'),
            controller: liveEventPageController,
            bindings: {
                event: '<'
            }
        });

    function liveEventPageController(eventService) {
        var vm = this;


        vm.sports = {};

        vm.status = {
            done: false,
            ongoing: false,
            upcoming: false
        };

        vm.$onInit = function() {
            eventService.getSports(vm.event.event_id)
                .then(function(sports) {
                    console.log(sports);
                });
        }
    }

})();
