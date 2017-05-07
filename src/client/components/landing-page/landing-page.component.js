(function() {
    'use strict';
    angular
        .module('app')
        .component('landingPage',{
            template: require('./landing-page.html'),
            controller: landingPageController,
            bindings: {
                events: '<',
                sports: '<',
                allGamesInformation: '<'
            }
        });

    function landingPageController(eventService, teamService, sportService, sessionService, $state) {
        var vm = this;
        
        var teams = [];
        vm.objects = [
            // {
            //     event: ,
            //     teams: []
            // }
        ];

        vm.live = [];
        vm.sports = [];
        vm.soonEvents = [];
        vm.liveEvents = [];
        var hasDuplicate = false;
        vm.isScrolling = false;

        vm.scrollToAnchorLink = function() {
            if (!vm.isScrolling) {
                vm.isScrolling = true;
                $('html, body').animate({
                    scrollTop: $('#anchor_link').offset().top
                }, 500, function() {
                    vm.isScrolling = false;
                });
            }
        }

        vm.$onInit = function() {
            for(let sport of vm.sports){
                sport.games = [];
            }
            for(let game of vm.allGamesInformation){
                for(let sport of vm.sports){
                    if(game.sport_id === sport.sport_id && game.status === "ONGOING"){
                        console.log(game);
                        sport.games.push(game);
                    }
                }
            }
            for(let sport of vm.sports){
                if(sport.games.length != 0){
                    vm.live.push(sport);
                }
            }


/*           
            sportService.getAll()
                .then(function(sports) {
                    vm.sports = sports;
                    
                    for (let sport of sports) {
                        eventService.getGeneralInformation(sport.event_id_key)
                            .then(function(data) {
                                console.log(data);
                                vm.sports.push({ })
                            })
                    }
                });
*/

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
                let toDate = new Date();
                toDate.setHours(0, 0, 0, 0);
                toDate = toDate.getTime();
                let startDate = new Date(event.start_date);
                startDate.setHours(0, 0, 0, 0);
                startDate = startDate.getTime();
                let endDate = new Date(event.end_date);
                endDate.setHours(0, 0, 0, 0);
                endDate = endDate.getTime();
                
                if (toDate >= startDate && toDate <= endDate) {                    
                    eventService.getTeams(event.event_id)
                        .then(function(teams) {
                            for (let team of teams) {
                                team.wins = 0;
                                team.loses = 0;
                                teamService.getGames(team.team_id)
                                    .then(function(games) {
                                        console.log(games);
                                        for (let game of games) {
                                            if (game.record === 'WIN') {
                                                team.wins++;
                                            } else if (game.record === 'LOSE') {
                                                team.loses++;
                                            }
                                        }

                                    });

                                if (teams.indexOf(team) < 0) {
                                    teams.push(team);
                                }
                            }
                            
                            vm.objects.push({ eventName: event, eventTeams: teams });
                        });
                }
            }

            console.log(vm.objects);
            
            $('.collapsible').collapsible();
            setTimeout(function() {
                $('.carousel').carousel('next');
            }, 6000);
        }
    }

})();
