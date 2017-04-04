(function() {
    'use strict';
    
    angular
        .module('app')
        .component('searchTeamPage', {
            template: require('./search-team-page.html'),
            controller: searchTeamPageController,
            bindings: {
                teams: '<',
                allEvents: '<'
            }
        });

    function searchTeamPageController() {
        var vm = this;
        vm.eventSponsored = 'all';

        vm.$onInit = function() {
            console.log(vm.teams);
            console.log(vm.allEvents);
        }   

    }

})();   
