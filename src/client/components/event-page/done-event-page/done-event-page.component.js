(function() {
    'use strict';
    angular
        .module('app')
        .component('doneEventPage',{
            template: require('./done-event-page.html'),
            controller: doneEventPageController,
            bindings: {
                event: '<',
            }
        });
        
    function doneEventPageController(eventService, gameService, institutionService) {
        var vm = this;
        vm.allSports = [];
        vm.allGamesInSport = [];

        vm.$onInit = function() {
            $('.collapsible').collapsible();
            console.log(vm.event.event_id);
            eventService.getOne(vm.event.event_id)
                .then(function(ins){
                    console.log(ins);
                    institutionService.getOne(ins.institution_id_key)
                        .then(function(ins) {
                            vm.institution = ins.description;
                            console.log(vm.institution);
                        });        
                });

            eventService.getSports(vm.event.event_id) 
                .then(function(sports) {
                    vm.allSports = sports.map(function(sport) {
                        return {
                            sport_id: sport.sport_id,
                            sport: sport.name,
                            games: []
                        };
                    });
                    for(let sport of vm.allSports) {
                        eventService.getGamesOfSport(vm.event.event_id, sport.sport_id)
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

