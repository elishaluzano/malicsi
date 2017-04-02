(function() {
    'use strict';
    angular
        .module('app')
        .component('doneEventPage',{
            template: require('./done-event-page.html'),
            controller: doneEventPageController,
            bindings: {
                event: '<'
            }
        });

    function doneEventPageController(eventService, gameService) {
        var vm = this;
        vm.allSports = [];
        vm.allGamesInSport = [];

        vm.$onInit = function() {
            // $('ul.tabs').tabs();
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
                });
            
        }
    }
})();