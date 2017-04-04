(function() {
    'use strict';

    angular
        .module('app')
        .component('liveEventPage', {
            template: require('./live-event-page.html'),
            controller: liveEventPageController,
            bindings: {
                event: '<',
                status: '<'
            }
        });

    function liveEventPageController($q, eventService, venueService, teamService, institutionService, $state) {
        var vm = this;

        vm.sports = [];
        vm.games = [];
        vm.dates = [];
        vm.filtered = [];

        vm.isTeamsTab = false;

        vm.sportsFilter = {};

        vm.statusFilter = {
            Upcoming: true,
            Ongoing: true,
            Done: true
        };

        vm.institutions = [];

        vm.editedEvent = {};
        vm.files = [];

        vm.editEvent = function() {
            vm.editedEvent = angular.copy(vm.event);
            vm.editedEvent.start_date = new Date(vm.editedEvent.start_date);
            vm.editedEvent.end_date = new Date(vm.editedEvent.end_date);
            console.log(vm.editedEvent);
        }

        vm.confirmEditEvent = function() {
            var fd = new FormData();
            console.log(vm.editedEvent);
            fd.append('event_title', vm.editedEvent.event_title);
            fd.append('institution_id_key', vm.editedEvent.institution_id_key);
            fd.append('start_date', (new Date(vm.editedEvent.start_date.setDate(vm.editedEvent.start_date.getDate()+1))).toISOString().substring(0, 10));
            fd.append('end_date', (new Date(vm.editedEvent.end_date.setDate(vm.editedEvent.end_date.getDate()+1))).toISOString().substring(0, 10));
            fd.append('picture', (vm.files[0])? vm.files[0] : vm.editedEvent.picture);
            fd.append('venue_id_key', vm.editedEvent.venue_id_key);

            eventService.update(vm.editedEvent.event_id, fd)
                .then(function(event) {
                    Materialize.toast('Successfully updated event', 3000, 'red');
                    $state.reload();
                });
        }

        vm.deleteEvent = function() {
            let title = vm.event.event_title;
            eventService.delete(vm.event.event_id)
                .then(function() {
                    Materialize.toast(title + ' has been deleted', 3000, 'red');
                    $state.go('landingPage');
                });
        }
        
        vm.toggleToTeams = function() {
            vm.isTeamsTab = true;
            for (let i = 0; i < vm.dates.length; ++i) {
                vm.filtered[i].show = false;
                vm.dates[i].show = false;
            }
        }

        vm.toggleDate = function(toggle) {
            for (let i = 0; i < vm.dates.length; ++i) {
                if (new Date(vm.filtered[i].date).getTime() === new Date(toggle).getTime()) {
                    vm.filtered[i].show = true;
                    vm.dates[i].show = true;
                } else {
                    vm.filtered[i].show = false;
                    vm.dates[i].show = false;
                }
            }
            vm.isTeamsTab = false;
        }

        vm.$onInit = function() {
            if (vm.status === 'Soon') {
                institutionService.getAll()
                    .then(function(institutions) {
                        vm.institutions = institutions;
                    });
            }

            $q.all([
                eventService.getSports(vm.event.event_id),
                eventService.getGames(vm.event.event_id),
                eventService.getTeams(vm.event.event_id),
                venueService.getAll(),
            ]).then(function(data) {
                let sports = data[0];
                let games = data[1];
                let teams = data[2];
                vm.venues = data[3];

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
                    startDate = new Date(startDate.setDate(startDate.getDate()-1));

                    while (startDate.getTime() < endDate.getTime()) {
                        vm.dates.push({
                            show: false,
                            date: startDate,
                            sports: vm.sports.map(function(sport) {
                                return {
                                    sport: sport.name,
                                    games: games.filter(function(game) {
                                            if (game.sport_id === sport.sport_id && new Date(game.time).getDate() === addDate(startDate, 1).getDate()) {
                                                return true;
                                            } else {
                                                return false;
                                            }
                                        }).map(function(game) {
                                            switch (game.status) {
                                                case 'PENDING':
                                                    game.status = { color: 'red', text: 'UPCOMING' };
                                                    break;
                                                case 'ONGOING':
                                                    game.status = { color: 'green', text: 'ONGOING' };
                                                    break;
                                                case 'FINISHED':
                                                    game.status = { color: 'black', text: 'DONE' };
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
                                            for (let venue of vm.venues) {
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

                    vm.dates[0].show = true;
                    vm.filtered = $.extend(true, [], vm.dates)
                    $('.collapsible').collapsible();
                });
            });
        }

        vm.filterList = function() {
            let dates = $.extend(true, [], vm.dates);

            vm.filtered = dates.map(function(info) {
                info.sports = info.sports.filter(function(sport) {
                    if (!vm.sportsFilter[sport.sport]) return false;

                    sport.games = sport.games.filter(function(game) {
                        for (let status in vm.statusFilter) {
                            if (vm.statusFilter[status] && game.status.text.toLowerCase() === status.toLowerCase()) {
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
        }

        function addDate(date, days) {
            var result = new Date(date);
            result.setDate(result.getDate() + days);
            return result;
        }
    }

})();

