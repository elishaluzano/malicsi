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
        vm.color = "black";
        vm.colorList = [
            "Red",
            "Orange",
            "Yellow",
            "Blue",
            "Green",
            "Violet",
            "Purple",
            "Pink"
        ];
        
        vm.$onInit = function() {
            for(let i=0; i<vm.colorList.length;i++){
                console.log(vm.colorList[i]);
                if(vm.team.name.indexOf(vm.colorList[i]) >= 0) {
                    vm.color = vm.colorList[i];
                }
            }
        }
    };

})();
