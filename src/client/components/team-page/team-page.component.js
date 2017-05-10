(function() {
    'use strict';
    angular
        .module('app')
        .component('teamPage',{
            template: require('./team-page.html'),
            controller: teamPageController,
            bindings: {
                componentName: '<',
                params: '<',
                allTeams: '<',
                allGameInfo: '<',
                players: '<',
                allGames: '<',
                currentTeam: '<',
                teamPlaysGame: '<',
                allEvents: '<'
            }
        });

    function teamPageController(userService, sessionService, adminService, eventService, teamService, searchService, $state, userLogService) {
        var vm = this;
        vm.eventSponsored = 'all';
        vm.searchInput = '';
        vm.pastGameCount = 0;
        vm.lastFiveGames = [];
        vm.pastGames = [];
        vm.upcomingGame = {};
        vm.showUpcoming = true;
        vm.lastOpponent = '';
        vm.currentUser;
        vm.isAdminOfTeam = false;
        vm.isLoggedIn = false;
        vm.isSoon = false;
        vm.win = 0;
        vm.lose = 0;
        vm.percentage = 0;
        vm.event = '';
        vm.isMember = false
        vm.files = [];
        vm.sampleName = '';
        vm.isMemberOfAnother = false;
        vm.eventChoice = 'All Events';
        var game;
        
        vm.$onInit = function() {
            console.log(vm.allEvents);
            console.log(vm.isLoggedIn + " " + vm.isSoon + " " + vm.isAdminOfTeam);
            setTimeout(function(){ $('.modal').modal(); }, 1);
            vm.sampleName = vm.currentTeam.name;
            var min;

            vm.currentUser = sessionService.user();

            userService.getOne(vm.currentUser.user_id)
                .then(function(user){
                    vm.currentUser = user;
                })
                .catch(function(err){
                    console.log(err);
                });


            for(let team of vm.allTeams){
                if(team.event_id_key == vm.currentTeam.event_id_key && team.team_id != vm.currentTeam.team_id){
                    teamService.getIsUserOfTeam(team.team_id, vm.currentUser.user_id)
                        .then(function(data){
                            if(data){
                                console.log(data);
                                vm.isMemberOfAnother = true;
                            }
                        })
                }
            }


            eventService.getOne(vm.currentTeam.event_id_key)
                .then(function(data) {
                    if(data) {
                        vm.event = data;
                        if (vm.currentUser && vm.currentUser.isOverallAdmin) {
                            vm.isAdminOfTeam = true;
                        }
                        else if(vm.currentUser){
                            adminService.checkAdminOfTeam(vm.currentUser.user_id, vm.currentTeam.team_id)
                                .then(function(data){
                                    if(data) vm.isAdminOfTeam = true;
                                    else{
                                        vm.isAdminOfTeam = false;
                                    }
                                }).catch(function(err){
                                    console.log(err);
                                })
                        }
                        else{
                            vm.isAdminOfTeam = false;
                        }

                        if((vm.currentUser != undefined && vm.currentUser != '') && !vm.isAdminOfTeam){
                            vm.isLoggedIn = true;
                        }

                        var startDate = new Date(vm.event.start_date).getTime();
                        var endDate = new Date(vm.event.end_date).getTime();
                        var curdate = (new Date).getTime();


                        if(startDate >= curdate || endDate >= curdate){
                            console.log(startDate + " " + endDate + " " + curdate);
                            vm.isSoon = true;
                        }
                    }
                    else{
                        console.log("wew");
                    }
                });

            if(vm.currentUser){
                teamService.getIsUserOfTeam(vm.currentTeam.team_id, vm.currentUser.user_id)
                    .then(function(data){
                        if(data.length != 0){
                            vm.isMember = true;
                        }
                    })
            }

            console.log(vm.isMember);
            console.log(vm.isMemberOfAnother);


            for(let record of vm.teamPlaysGame){
                if(record.record === "WIN"){
                    vm.win ++;
                }
                else if(record.record === "LOSE"){
                    vm.lose ++;
                }
            }

            vm.percentage = ((vm.win / (vm.lose + vm.win))*100).toFixed(2);
            if(vm.lose + vm.win === 0){
                vm.percentage = (0).toFixed(2);
            }

            for(game of vm.allGameInfo){
                if(game.status == 'FINISHED'){
                    game.time = new Date(game.time);
                    vm.lastFiveGames.push(game);
                }
            }

            for(game of vm.allGameInfo){
                if(game.status == 'PENDING'){
                    min = game.datediff;
                    vm.upcomingGame = game;
                    break;
                }
            }

            for(game of vm.allGameInfo){
                if(game.datediff <= min && game.datediff > 0){
                    vm.upcomingGame = game;
                    min = game.datediff;
                }
            }

            for(game of vm.allGameInfo){
                if(game.status == 'FINISHED'){
                    vm.pastGames.push(game);
                    vm.pastGameCount ++;
                }
            }

            vm.lastFiveGames = sort(vm.lastFiveGames);


            if(vm.upcomingGame.sport === undefined){
                vm.showUpcoming = false;
            }

            if (vm.lastFiveGames.length) {
                vm.lastOpponent = {
                    name: vm.lastFiveGames[0].team_name,
                    id: vm.lastFiveGames[0].team_id
                }
            } else {
                vm.lastOpponent = {
                    name: 'None',
                    id: ''
                }
            }

            vm.upcomingGame.time = new Date(vm.upcomingGame.time);

            console.log(vm.upcomingGame);

            console.log(vm.isLoggedIn + " " + vm.isSoon + " " + vm.isAdminOfTeam);
            console.log(vm.isMember + " " + vm.isMemberOfAnother);
            
        }

        vm.chooseEvent = function(){
            console.log(vm.eventChoice);
        }

        vm.print = function(a){
            console.log(a);
        }

        vm.reset = function(){
            vm.sampleName = vm.currentTeam.name;
        }

        vm.editTeam = function(){
            var fd = new FormData();
            fd.append('name', vm.sampleName);
            fd.append('event_id_key', vm.currentTeam.event_id_key);
            fd.append('picture', (vm.files[0])? vm.files[0] : vm.currentTeam.picture);

            teamService.update(vm.currentTeam.team_id, fd)
                .then(function(team) {
                    Materialize.toast('Successfully updated team', 2000, 'red');
                    vm.currentTeam = team;
                    var string = "Successfully updated team.";
                    var log = {
                        user_id: vm.currentUser.user_id,
                        institution_id: vm.currentUser.institution_id,
                        action: string
                    }

                    userLogService.create(log)
                        .then(function(data) {
                          
                        })
                        .catch(function(err) {
                            console.log(err);
                        })
                })
                .catch(function(e){
                    Materialize.toast('Unsuccessfully updated team', 2000, 'red');
                });
        }

        vm.deleteTeam = function(){
            teamService.delete(vm.currentTeam.team_id)
                .then(function(data) {
                    Materialize.toast('Successfully deleted team', 2000, 'red');
                    var string = "Successfully deleted team.";
                    var log = {
                        user_id: vm.currentUser.user_id,
                        institution_id: vm.currentUser.institution_id,
                        action: string
                    }

                    userLogService.create(log)
                        .then(function(data) {
                          
                        })
                        .catch(function(err) {
                            console.log(err);
                        })
                    setTimeout(function(){ window.history.back(); }, 1000);
                })
                .catch(function(e){
                    Materialize.toast('Unsuccessfully deleted team', 2000, 'red');
                });
            
            
        }

        vm.joinTeam = function(){
            console.log(vm.currentTeam);
            console.log(vm.currentUser);
            var params = {
                team_player_id: vm.currentTeam.team_id,
                user_player_id: vm.currentUser.user_id
            }
            teamService.addIsComposedOf(params)
                .then(function(data){
                    Materialize.toast('Successfully joined team!', 2000, 'red');

                    vm.isMember = true;

                    vm.players.push(vm.currentUser);
                    var string = "Successfully joined team.";
                    var log = {
                        user_id: vm.currentUser.user_id,
                        institution_id: vm.currentUser.institution_id,
                        action: string
                    }

                    userLogService.create(log)
                        .then(function(data) {
                          
                        })
                        .catch(function(err) {
                            console.log(err);
                        })


                })
                .catch(function(e){
                    Materialize.toast('Unsuccessfully joined team!', 2000, 'red');
                });
        }

        vm.leaveTeam = function(){
            teamService.deleteIsComposedOf(vm.currentTeam.team_id, vm.currentUser.user_id)
                .then(function(data){
                    Materialize.toast('Successfully left team!', 2000, 'red');
                    vm.isMember = false;
                    for(let i=0; i<vm.players.length; i++){
                        if(vm.players[i].user_id == vm.currentUser.user_id){
                            vm.players.splice(i, 1);
                            break;
                        }
                    }
                    var string = "Successfully left team.";
                    var log = {
                        user_id: vm.currentUser.user_id,
                        institution_id: vm.currentUser.institution_id,
                        action: string
                    }

                    userLogService.create(log)
                        .then(function(data) {
                          
                        })
                        .catch(function(err) {
                            console.log(err);
                        })
                })
                .catch(function(e){
                    Materialize.toast('Unsuccessfully left team!', 2000, 'red');
                });
        }

        function sort(games){
            var lastFiveGames = [];

            for(let game of games){
                for(var i=0; i<lastFiveGames.length; i++){
                    if(game.datediff > lastFiveGames[i].datediff){
                        break;
                    }
                }
                lastFiveGames.splice(i, 0, game);
            }
            lastFiveGames = lastFiveGames.slice(0,5);
            return lastFiveGames;
        }

        vm.searchEnter = function() {
            search();
        }

        function search(){
            console.log(vm.eventChoice);
            if(vm.eventChoice == "all") {
                teamService.getAll()
                    .then(function(data){
                        vm.allTeams = data;
                    })
                    .catch(function(err){
                        console.log(err);
                    })
            }
            else{
                eventService.getOne(vm.eventChoice)
                    .then(function(event){
                        searchService.teams(event.event_title)
                            .then(function(data){
                                vm.allTeams = data;
                            })
                            .catch(function(err){
                                console.log(err);
                            })
                    })
                
            }
        }
    }
})();
