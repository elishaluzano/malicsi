(function() {
    'use strict';
    angular
        .module('app')
        .component('landingPage',{
            template: require('./landing-page.html'),
            controller: landingPageController,
            bindings: {
                events: '<'
            }
        });

    function landingPageController(eventService, teamService) {
        var vm = this;
        
        var teams = [];
        vm.objects = [
            // {
            //     event: ,
            //     teams: []
            // }
        ];

        vm.$onInit = function() {
            for (let event of vm.events) {

                eventService.getTeams(event.event_id)
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
                                    teams.push(team);

                                });
                            
                        }

                        vm.objects.push({ eventName: event, eventTeams: teams })
                    });

                console.log(vm.objects);
            }

            $('.collapsible').collapsible();
        }
    }
})();
