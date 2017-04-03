(function() {
    'use strict';
    angular
        .module('app')
        .component('doneEventsPage',{
            template: require('./done-events-page.html'),
            controller: doneEventsPageController,
            bindings: {
                event: '<'
            }
        });

    function doneEventsPageController(eventService, gameService) {
        var vm = this;
        vm.allSports = [];
        vm.allGamesInSport = [];

        vm.$onInit = function() {
            //$('ul').tabs('select_tab', '0');
            eventService.getSports(vm.event[0].event_id) 
                .then(function(sports) {
                    vm.allSports = sports.map(function(sport) {
                        return {
                            sport_id: sport.sport_id,
                            sport: sport.name,
                            games: []
                        };
                    });
                    for(let sport of vm.allSports) {
                        eventService.getGamesOfSport(vm.event[0].event_id, sport.sport_id)
                            .then(function(games) {
                                vm.allGamesInSport = games;
                                for(let gamesOfSport of vm.allGamesInSport) {
                                    if(gamesOfSport.sport_id === sport.sport_id && gamesOfSport.status != "PENDING") {
                                        gameService.getTeamsInGame(gamesOfSport.game_id) 
                                            .then(function(teams) {
                                                gamesOfSport.teams = teams;
                                            })


                                        sport.games.push(gamesOfSport);
                                    }
                                }
                            });  
                    }
                    console.log("All Sports: ", vm.allSports);
                });
            
        }
    }
})();

