(function() {
    'use strict';

    angular
        .module('app')
        .component('liveEventPage', {
            template: require('./live-event-page.html'),
            controller: liveEventPageController,
            bindings: {
                event: '<'
            }
        });

    function liveEventPageController($q, eventService, venueService, teamService) {
        var vm = this;

        vm.sports = [];
        vm.games = [];
        vm.dates = [];
        vm.filtered = [];

        vm.sportsFilter = {};

        vm.statusFilter = {
            done: true,
            ongoing: true,
            upcoming: true
        };

        vm.toggleDate = function(toggle) {
            for (let info of vm.dates) {
                if (info.date.getTime() === toggle.getTime()) {
                    info.show = true;
                } else {
                    info.show = false;
                }
            }
        }

        vm.$onInit = function() {

            $q.all([
                eventService.getSports(vm.event.event_id),
                eventService.getGames(vm.event.event_id),
                eventService.getTeams(vm.event.event_id),
                venueService.getAll(),
            ]).then(function(data) {
                let sports = data[0];
                let games = data[1];
                let teams = data[2];
                let venues = data[3];

                $q.all(teams.map(function(team) {
                    return teamService.getGames(team.team_id)
                })).then(function(data) {
                    let allTeamsPlaying = data;

                    for (let sport of sports) {
                        vm.sportsFilter[sport.name] = true;
                    }
                    vm.sports = sports;
                    
                    let startDate = new Date(vm.event.start_date);
                    let endDate = new Date(vm.event.end_date);
                    // startDate = new Date(startDate.setDate(startDate.getDate()));
                    // endDate = new Date(endDate.setDate(endDate.getDate()));

                    while (startDate.getTime() < endDate.getTime()) {
                        // console.log('Start: ' + startDate.getDate());
                        // console.log('End: ' + endDate.getDate());
                        vm.dates.push({
                            show: false,
                            date: startDate,
                            sports: vm.sports.map(function(sport) {
                                return {
                                    sport: sport.name,
                                    games: games.filter(function(game) {
                                            console.log('Game date: ' + new Date(game.time).getDate());
                                            console.log(startDate.getDate());
                                            if (game.sport_id === sport.sport_id && new Date(game.time).getDate() === startDate.getDate()) {
                                                console.log('pasok');
                                                return true;
                                            } else {
                                                return false;
                                            }
                                        }).map(function(game) {
                                            switch (game.status) {
                                                case 'PENDING':
                                                    game.status = { color: 'red', text: 'upcoming' };
                                                    break;
                                                case 'ONGOING':
                                                    game.status = { color: 'green', text: 'ongoing' };
                                                    break;
                                                case 'FINISHED':
                                                    game.status = { color: 'black', text: 'done' };
                                                    break;
                                            }
                                            game.teamsPlaying = [];
                                            allTeamsPlaying.forEach(function(team) {
                                                for (let gamePlaying of team) {
                                                    if (gamePlaying.game_id === game.game_id) {
                                                        for (let t of teams) {
                                                            if (t.team_id === gamePlaying.team_id_play) {
                                                                t.score = gamePlaying.score;
                                                                game.teamsPlaying.push(t);
                                                            }
                                                        }
                                                    }
                                                }
                                            });
                                            game.time = new Date(game.time);
                                            for (let venue of venues) {
                                                if (game.venue === venue.venue_id) {
                                                    game.venue = venue.name;
                                                }
                                            }

                                            return game;
                                        }) 
                                };
                            })
                        });
                        startDate = new Date(startDate.setDate(startDate.getDate() + 1));
                    }

                    console.log(vm.dates);
                    vm.dates[0].show = true;
                    $('.collapsible').collapsible();
                    vm.filtered = $.extend(true, [], vm.dates);

                });
            });
        }

        vm.filterList = function() {
            vm.filtered = vm.dates.map(function(info) {
                info.sports = info.sports.filter(function(sport) {
                    if (!vm.sportsFilter[sport.sport]) return false;

                    sport.games = sport.games.filter(function(game) {
                        for (let status in vm.statusFilter) {
                            if (vm.statusFilter[status] && game.status.text === status) {
                                return true;
                            }
                        }
                        return false;

                    });

                    return true;
                });

                return info;
            });
            $('.collapsible').collapsible();
            console.log(vm.filtered);
        }
    }

})();




/*
[
    {
        date:
        sports: [
            {
                sport: 
                games: []
            }
        ]
    }
]





 */

