(function() {
    'use strict';

    angular
        .module('app')
        .component('teamStandingCard', {
            template: require('./team-standing-card.html'),
            controller: teamStandingCardController,
            bindings: {
                event: '<'
            }
        });
    
    function teamStandingCardController(eventService, teamService) {
        var vm = this;

        vm.teams = [];

        vm.$onInit = function() {
            eventService.getTeams(vm.event.event_id)
                .then(function(teams) {
                    for (let team of teams) {
                        team.wins = 0;
                        team.loses = 0;
                        teamService.getGames(team.team_id)
                            .then(function(games) {
                                for (let game of games) {
                                    if (game.record === 'WIN') {
                                        team.wins++;
                                    } else if (game.record === 'LOSE') {
                                        team.loses++;
                                    }
                                }
                                vm.teams.push(team);
                            });
                        
                    }
                });
        }
    }
})();
