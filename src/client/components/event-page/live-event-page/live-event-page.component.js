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

    function liveEventPageController($q, eventService, venueService, teamService, institutionService, $state, searchService, sportService, sessionService, gameService, adminService, userLogService) {
        var vm = this;

        vm.sports = [];
        vm.games = [];
        vm.dates = [];
        vm.filtered = [];

        vm.isTeamsTab = true;
        vm.isSportsTab = false;

        vm.sportsFilter = {};

        vm.statusFilter = {
            Upcoming: true,
            Ongoing: true,
            Done: true
        };

        vm.institutions = [];
        vm.newGame = null;
        vm.editedEvent = {};
        vm.files = [];
        vm.teamFiles = [];
        vm.newTeamName = '';
        vm.teams = [];
        vm.user = null;

        vm.isAdmin = false;
        vm.joinedTeamId = 0;
        vm.allSports = [];
        vm.selectedSport = null;
        vm.newSportId = 1;
        vm.selectedTeam = null;

        vm.selectedGame = null;

        vm.isSoon = false;


        vm.editEvent = function() {
            vm.editedEvent = angular.copy(vm.event);
            vm.editedEvent.start_date = new Date(vm.editedEvent.start_date);
            vm.editedEvent.end_date = new Date(vm.editedEvent.end_date);
            console.log(vm.editedEvent);
        }

        vm.confirmEditEvent = function() {
            if (vm.editedEvent.start_date.getTime() > vm.editedEvent.end_date.getTime()) {
                return Materialize.toast('Start date should be before the end date', 3000, 'red');
            }

            searchService.events(vm.editedEvent.event_title)
                .then(function(events) {
                    if (events.find(function(event) {
                        return event.event_title.toLowerCase() === vm.editedEvent.event_title.toLowerCase()
                            && event.event_id != vm.editedEvent.event_id;
                    })) {
                        return Materialize.toast(vm.editedEvent.event_title + ' is already taken', 3000, 'red');
                    }

                    var fd = new FormData();
                    fd.append('event_title', vm.editedEvent.event_title);
                    fd.append('institution_id_key', vm.editedEvent.institution_id_key);
                    fd.append('start_date', new Date(vm.editedEvent.start_date).toISOString().substring(0, 10));
                    fd.append('end_date', new Date(vm.editedEvent.end_date).toISOString().substring(0, 10));
                    fd.append('picture', (vm.files[0])? vm.files[0] : vm.editedEvent.picture);
                    fd.append('venue_id_key', vm.editedEvent.venue_id_key);

                    eventService.update(vm.editedEvent.event_id, fd)
                        .then(function(event) {
                            Materialize.toast('Successfully updated ' + vm.editedEvent.event_title, 3000, 'red');
                            $state.reload();
                            var string = "Updated " + vm.editedEvent.event_title + " event.";
                            var log = {
                                user_id: vm.user.user_id,
                                institution_id: vm.ins,
                                action: string
                            }

                            userLogService.create(log)
                                .then(function(data) {
                                  
                                })
                                .catch(function(err) {
                                    console.log(err);
                                })
                        });

                });
        }

        vm.editGame = function() {
            if (vm.selectedGame.team1_id === vm.selectedGame.team2_id) {
                return Materialize.toast('Two same teams cannot play in the same game', 3000, 'red');
            }

            if (vm.selectedGame.start_hour < 0 || vm.selectedGame.start_hour > 23) {
                return Materialize.toast('Start hour should in 24-hr format (00-23)', 3000, 'red');
            }

            if (vm.selectedGame.start_minute < 0 || vm.selectedGame.start_minute > 59) {
                return Materialize.toast('Start minute should be in (00-59) format', 3000, 'red');
            }

            let time = (new Date(vm.selectedGame.date.setDate(vm.selectedGame.date.getDate()))).toISOString().substring(0, 10) + ' ' + ((vm.selectedGame.start_hour < 10)? ('0' + vm.selectedGame.start_hour) : (vm.selectedGame.start_hour)) + ':' + ((vm.selectedGame.start_minute < 10)? ('0' + vm.selectedGame.start_minute) : (vm.selectedGame.start_minute)) + ':00';
            let body = {
                min_num_of_players: 0,
                max_num_of_players: 0,
                status: 'PENDING',
                venue: vm.selectedGame.venue,
                event_id: vm.event.event_id,
                sport_id: vm.selectedGame.sport_id,
                time: time
            };

            console.log(vm.selectedGame);
            gameService.update(vm.selectedGame.game_id, body)
                .then(function(game) {
                    gameService.getTeamsInGame(vm.selectedGame.game_id)
                        .then(function(teams) {
                            teamService.updateGame(teams[0].team_id, vm.selectedGame.game_id, {
                                    score: teams[0].score,
                                    record: teams[1].record,
                                    team_id: vm.selectedGame.team1_id
                                })
                                .then(function(teamGame) {
                                    console.log('changed team');
                                });

                            teamService.updateGame(teams[1].team_id, vm.selectedGame.game_id, {
                                    score: teams[0].score,
                                    record: teams[1].record,
                                    team_id: vm.selectedGame.team2_id
                                })
                                .then(function(teamGame) {
                                    console.log('changed team');
                                });
                        });
                    
                    $('#edit-game-modal').modal('close');
                    Materialize.toast('Updated game', 3000, 'red');
                    $state.reload();
                });
        }

        vm.deleteGame = function() {
            gameService.delete(vm.selectedGame.game_id)
                .then(function() {
                    Materialize.toast('Game has been deleted', 3000, 'red');
                    $state.reload();
                });
        }

        vm.createGame = function(selectedSport, date) {
            let sport_id = vm.sports.find(function(sport) {
                return selectedSport === sport.name;
            }).sport_id;

            vm.newGame = {
                venue: vm.venues[0].venue_id,
                sport_id: sport_id,
                team1_id: vm.teams[0].team_id,
                team2_id: (vm.teams[1])? vm.teams[1].team_id : vm.teams[0].team_id,
                start_hour: 0,
                start_minute: 0,
                date: angular.copy(date)
            };   
        }

        vm.confirmCreateGame = function() {
            if (vm.newGame.team1_id === vm.newGame.team2_id) {
                return Materialize.toast('Two same teams cannot play in the same game', 3000, 'red');
            }

            if (vm.newGame.start_hour < 0 || vm.newGame.start_hour > 23) {
                return Materialize.toast('Start hour should in 24-hr format (00-23)', 3000, 'red');
            }

            if (vm.newGame.start_minute < 0 || vm.newGame.start_minute > 59) {
                return Materialize.toast('Start minute should be in (00-59) format', 3000, 'red');
            }

            let time = (new Date(vm.newGame.date.setDate(vm.newGame.date.getDate()))).toISOString().substring(0, 10) + ' ' + ((vm.newGame.start_hour < 10)? ('0' + vm.newGame.start_hour) : (vm.newGame.start_hour)) + ':' + ((vm.newGame.start_minute < 10)? ('0' + vm.newGame.start_minute) : (vm.newGame.start_minute)) + ':00';

            let status = 'PENDING';
            let nowTime = new Date().getTime();
            let gameTime = new Date(time).getTime();
            if (gameTime <= nowTime) {
                status = 'ONGOING';
            }

            let body = {
                min_num_of_players: 0,
                max_num_of_players: 0,
                status: status,
                venue: vm.newGame.venue,
                event_id: vm.event.event_id,
                sport_id: vm.newGame.sport_id,
                time: time
            };

            gameService.create(body)
                .then(function(game) {
                    console.log(game);
                    teamService.createGame({
                        team_id_play: vm.newGame.team1_id,
                        game_id_play: game.game_id
                    }).then(function(teamGame) {
                        console.log(teamGame);
                    });
                    teamService.createGame({
                        team_id_play: vm.newGame.team2_id,
                        game_id_play: game.game_id
                    }).then(function(teamGame) {
                        console.log(teamGame);
                    });
                    $('#add-game-modal').modal('close');
                    Materialize.toast('Successfully created the game', 3000, 'red');
                    $state.reload();
                });
                
        }

        vm.selectGame = function(game_id, team1_id, team2_id, date) {
            gameService.getOne(game_id)
                .then(function(game) {
                    vm.selectedGame = angular.copy(game);
                    vm.selectedGame.team1_id = team1_id;
                    vm.selectedGame.team2_id = team2_id;
                    console.log(vm.selectedGame);
                    let time = vm.selectedGame.time.split(' ')[1].split(':');
                    vm.selectedGame.start_hour = +time[0];
                    vm.selectedGame.start_minute = +time[1];
                    vm.selectedGame.date = date;
                });
        }

        vm.createTeam = function() {
            vm.newTeamName = '';
            vm.teamFiles = [];
        }

        vm.selectTeam = function(team) {
            vm.selectedTeam = angular.copy(team);
            vm.selectedTeam.originalName = vm.selectedTeam.name;
            vm.teamFiles = [];
        }

        vm.confirmEditTeam = function() {
            if (!vm.selectedTeam.name) {
                return Materialize.toast('Enter new team name', 3000, 'red');
            }

            searchService.teams(vm.selectedTeam.name)
                .then(function(teams) {
                    if (teams.find(function(team) {
                        return team.name.toLowerCase() === vm.selectedTeam.name.toLowerCase()
                            && team.team_id != vm.selectedTeam.team_id && team.event_id == vm.event.event_id;
                    })) {
                        return Materialize.toast(vm.selectedTeam.name + ' is already taken', 3000, 'red');
                    }

                    let fd = new FormData();

                    fd.append('name', vm.selectedTeam.name);
                    fd.append('event_id_key', vm.selectedTeam.event_id_key);
                    fd.append('picture', (vm.teamFiles[0])? vm.teamFiles[0] : vm.selectedTeam.picture);

                    teamService.update(vm.selectedTeam.team_id, fd)
                        .then(function(newTeam) {
                            Materialize.toast(vm.selectedTeam.name + ' has been updated', 3000, 'red');
                            $('#edit-team-modal').modal('close');
                            $state.reload();
                        });
                }); 
        }

        vm.confirmDeleteTeam = function() {
            teamService.delete(vm.selectedTeam.team_id)
                .then(function() {
                    Materialize.toast(vm.selectedTeam.name + ' has been deleted', 3000, 'red');
                    
                    var logName = "Deleted " + vm.selectedTeam.name + " team.";
                    var log = {
                        user_id: vm.user.user_id,
                        institution_id: 0,
                        action: logName
                    };
                    userLogService.create(log)
                        .then(function(data) {
                        });

                    $state.reload();
                });
        }

        vm.confirmJoinTeam = function() {
            let body = {
                user_player_id: vm.user.user_id,
                team_player_id: vm.selectedTeam.team_id
            };

            teamService.addIsComposedOf(body)
                .then(function() {
                    Materialize.toast('You have joined ' + vm.selectedTeam.name, 3000, 'red');
                    vm.joinedTeamId = vm.selectedTeam.team_id;

                    var logName = vm.user.name + " joined " + vm.selectedTeam.name + " team.";
                    var log = {
                        user_id: vm.user.user_id,
                        institution_id: 0,
                        action: logName
                    };
                    userLogService.create(log)
                        .then(function(data) {
                        });
                });
        }

        vm.confirmQuitTeam = function() {
            teamService.deleteIsComposedOf(vm.selectedTeam.team_id, vm.user.user_id)
                .then(function() {
                    Materialize.toast('You have quit ' + vm.selectedTeam.name, 3000, 'red');
                    vm.joinedTeamId = 0;
                    var logName = vm.user.name + " quit " + vm.selectedTeam.name + " team.";
                    var log = {
                        user_id: vm.user.user_id,
                        institution_id: 0,
                        action: logName
                    };
                    userLogService.create(log)
                        .then(function(data) {
                        });
                });
        }

        vm.createSport = function(sportId) {
            let exists = false;
            for (let sport of vm.sports) {
                if (sport.sport_id === sportId) {
                    return Materialize.toast('Sport is already in the event', 3000, 'red');
                }
            }

            let body = {
                event_id: vm.event.event_id,
                sport_id: sportId
            };

            eventService.createSport(body)
                .then(function(eventHasSport) {
                    let name = '';
                    for (let sport of vm.allSports) {
                        if (sport.sport_id === eventHasSport.sport_id) {
                            name = sport.name;
                        }
                    }

                    for (let date of vm.dates) {
                        date.sports.push({
                            games: [],
                            sport: name
                        });
                    }
                    
                    vm.sports.push({
                        sport_id: eventHasSport.sport_id,
                        name: name
                    });

                    var logName = "Added " + name + " sport.";
                    var log = {
                        user_id: vm.user.user_id,
                        institution_id: 0,
                        action: logName
                    };
                    userLogService.create(log)
                        .then(function(data) {
                        });

                    $state.reload();
                });
        }

        vm.confirmCreateTeam = function() {
            searchService.teams(vm.newTeamName)
                .then(function(teams) {
                    if (teams.find(function(team) { return team.name === vm.newTeamName })) {
                        return Materialize.toast(team.name + ' is already made', 3000, 'red');
                    }

                    if (!vm.teamFiles[0]) {
                        return Materialize.toast('Input team logo', 3000, 'red');
                    }

                    var fd = new FormData();
                    fd.append('name', vm.newTeamName);
                    fd.append('event_id_key', vm.event.event_id);
                    fd.append('picture', (vm.teamFiles[0])? vm.teamFiles[0] : vm.editedEvent.picture);

                    teamService.create(fd)
                        .then(function(team) {
                            Materialize.toast(team.name + ' has been created', 3000, 'red');
                            $('#add-team-modal').modal('close');
                            $state.reload();
                            var logName = "Added " + team.name + " team.";
                            var log = {
                                user_id: vm.user.user_id,
                                institution_id: 0,
                                action: logName
                            };
                            userLogService.create(log)
                                .then(function(data) {
                                });
                        });
                });
        }

        vm.deleteEvent = function() {
            let title = vm.event.event_title;
            eventService.delete(vm.event.event_id)
                .then(function() {
                    Materialize.toast(title + ' has been deleted', 3000, 'red');

                    var logName = "Deleted" + title + " event.";
                    var log = {
                        user_id: vm.user.user_id,
                        institution_id: 0,
                        action: logName
                    };
                    userLogService.create(log)
                        .then(function(data) {
                        });

                    $state.go('landingPage');
                });
        }

        vm.deleteSport = function(sport) {
            vm.selectedSport = angular.copy(sport);
        }

        vm.confirmDeleteSport = function() {
            eventService.deleteSport(vm.event.event_id, vm.selectedSport.sport_id)
                .then(function() {
                    vm.sports = vm.sports.filter(function(sport) {
                        return sport.sport_id !== vm.selectedSport.sport_id;
                    });

                    vm.dates = vm.dates.map(function(date) {
                        date.sports = date.sports.filter(function(sport) {
                            return sport.sport !== vm.selectedSport.name;
                        });

                        return date;
                    });

                    console.log(vm.dates);
                });
        }
        
        vm.toggleToTeams = function() {
            vm.isTeamsTab = true;
            vm.isSportsTab = false;
            for (let i = 0; i < vm.dates.length; ++i) {
                vm.filtered[i].show = false;
                vm.dates[i].show = false;
            }
        }

        vm.toggleToSports = function() {
            vm.isTeamsTab = false;
            vm.isSportsTab = true;
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
            vm.isSportsTab = false;
        }

        vm.$onInit = function() {
            vm.isSoon = new Date(vm.event.start_date).getTime() > new Date().getTime();

            // if (vm.isSoon) {
            //     $('#example').countdown({
            //         date: vm.event.start_date,
            //         offset: +8,
            //         day: 'Day',
            //         days: 'Days'
            //     }, function() {
            //         $state.reload();
            //     });
            //     console.log($('.countdown'));

            // }

            vm.user = sessionService.user();
            if (vm.user && vm.user.isOverallAdmin) {
                vm.isAdmin = true;
            }
            else if (vm.user) {
                adminService.checkAdminOfEvent(vm.user.user_id, vm.event.event_id)
                    .then(function(isAdmin) {
                        if (isAdmin) {
                            vm.isAdmin = true;
                        }
                    });
            }

            institutionService.getAll()
                .then(function(institutions) {
                    vm.institutions = institutions;
                });

            sportService.getAll()
                .then(function(sports) {
                    vm.allSports = sports;
                });

            $q.all([
                eventService.getSports(vm.event.event_id),
                eventService.getGames(vm.event.event_id),
                eventService.getTeams(vm.event.event_id),
                venueService.getAll(),
            ]).then(function(data) {
                let sports = data[0];
                vm.eventSports = angular.copy(sports);
                let games = data[1];
                vm.teams = data[2];
                vm.venues = data[3];

                if (vm.user) {
                    teamService.getTeamId(vm.user.user_id)
                        .then(function(teamIds) {
                            vm.joinedTeamId = (function() {
                                for (let teamId of teamIds) {
                                    for (let team of vm.teams) {
                                        if (teamId.team_player_id == team.team_id) {
                                            return team.team_id;
                                        }
                                    }
                                }
                                return 0
                            })();
                        });
                }

                $q.all(vm.teams.map(function(team) {
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
                                                        for (let t of vm.teams) {
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
                    // CHECK ADMIN
                    // vm.dates[0].show = true;
                    vm.filtered = $.extend(true, [], vm.dates)
                    $('.collapsible').collapsible();
                    console.log(vm.dates);
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

