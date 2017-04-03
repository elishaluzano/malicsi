(function() {
    'use strict';
    angular
        .module('app')
        .component('teamPage',{
            template: require('./team-page.html'),
            controller: teamPageController,
            bindings: {
                allGameInfo: '<',
                players: '<',
                allGames: '<',
                currentTeam: '<',
                componentName: '<',
                params: '<',
                allTeams: '<'
            }
        });

    function teamPageController(sessionService, adminService, eventService, teamService, searchService, $state) {
        var vm = this;
        vm.searchInput = '';
        
        vm.$onInit = function() {
        }

        vm.searchEnter = function(e) {
            if (e.keyCode === 13) {
                search();
            }
        }

        function search(){
            if(vm.searchInput == "") {
                teamService.getAll()
                    .then(function(data){
                        console.log(data);
                        vm.allTeams = data;
                    })
                    .catch(function(err){
                        console.log(err);
                    })
            }
            else{
                searchService.teams(vm.searchInput)
                    .then(function(data){
                        console.log(data);
                        vm.allTeams = data;
                    })
                    .catch(function(err){
                        console.log(err);
                    })
            }
        }
    }
})();
