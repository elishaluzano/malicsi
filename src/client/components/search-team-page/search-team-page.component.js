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

    function searchTeamPageController() {
        var vm = this;

        vm.filters = {};
        
    }
})();
