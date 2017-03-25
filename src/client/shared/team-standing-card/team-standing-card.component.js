(function() {
    'use strict';

    angular
        .module('app')
        .component('teamStandingCard', {
            template: require('./team-standing-card.html'),
            controller: teamStandingCardController,
            bindings: {
                event: '<'
            }
        });
    
    function teamStandingCardController(eventService) {
        var vm = this;

        vm.teams = [];

        vm.$onInit = function() {
            eventService.getTeams(vm.event.event_id)
                .then(function(data) {
                    vm.teams = data;
                });
        }


    }
})();
