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

    function landingPageController(eventService, teamService, sportService) {
        var vm = this;
        
        var teams = [];
        vm.objects = [
            // {
            //     event: ,
            //     teams: []
            // }
        ];

        vm.sports = [];
        vm.soonEvents = [];
        vm.liveEvents = [];

        vm.$onInit = function() {
            
            sportService.getAll()
                .then(function(sports) {
                    vm.sports = sports;
                    /*
                    for (let sport of sports) {
                        eventService.getGeneralInformation(sport.event_id_key)
                            .then(function(data) {
                                console.log(data);
                                vm.sports.push({ })
                            })
                    }
                    */
                });

            for (let event of vm.events) {
                let toDate = new Date().getTime();
                let startDate = new Date(event.start_date).getTime();
                let endDate = new Date(event.end_date).getTime();

                if (toDate <= startDate) {
                    vm.soonEvents.push(event);
                } else if (toDate >= startDate && toDate <= endDate) {
                    vm.liveEvents.push(event);
                }
            }

            for (let event of vm.events) {
                let toDate = new Date().getTime();
                let startDate = new Date(event.start_date).getTime();
                let endDate = new Date(event.end_date).getTime();

                if (toDate >= startDate && toDate <= endDate) {                    
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
                }
            }

            $('.collapsible').collapsible();
        }
    }
})();
