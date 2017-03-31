(function() {
    'use strict';

    angular
        .module('app')
        .component('searchTeamCard', {
            template: require('./search-team-card.html'),
            controller: searchTeamCardController,
            bindings: {
                team: '<'
            }
        });

    function searchTeamCardController(teamService) {
        var vm = this;
        //need to get color from team name ? (dunno how)
        vm.color = "orange";
        
    };

})();
