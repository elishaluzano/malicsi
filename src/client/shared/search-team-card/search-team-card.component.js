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

    function searchTeamCardController(teamService, eventService) {
        var vm = this;
        vm.event = '';
        //need to get color from team name ? (dunno how)
        vm.color = "Black";
        vm.textcolor = "White";
        vm.colorList = [
            "Red",
            "Orange",
            "Yellow",
            "Blue",
            "Green",
            "Violet",
            "Purple",
            "Pink",
            "White"
        ];
        
        vm.$onInit = function() {
            for(let i=0; i<vm.colorList.length;i++){
<<<<<<< HEAD
=======
                console.log(vm.colorList[i]);
>>>>>>> 76ff8c29280f1ae3b0fd26dacf31c2d671ed83ad
                if(vm.team.name.indexOf(vm.colorList[i]) >= 0) {
                    vm.color = vm.colorList[i];
                }
            }

            if(vm.color == "White" || vm.color == "Yellow"){
                vm.textcolor = "black"
            }

            eventService.getOne(vm.team.event_id_key)
                .then(function(ev) {
                    vm.event = ev;
                })
        }
    };

})();
