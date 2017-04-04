(function() {
    'use strict';
    
    angular
        .module('app')
        .component('searchTeamPage', {
            template: require('./search-team-page.html'),
            controller: searchTeamPageController,
            bindings: {
                teams: '<'
            }
        });

    function searchAllTeamController() {
        var vm = this;

        vm.filters = {
            Teams: true,
        };

        vm.$onInit = function() {
            console.log(vm.teams);
        }
    }

})();   
