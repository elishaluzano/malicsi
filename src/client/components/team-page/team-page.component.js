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
                teamPlaysGame: '<'
            }
        });

    function teamPageController(sessionService, adminService, eventService, teamService, searchService, $state) {
        var vm = this;
        vm.searchInput = '';
         var vm = this;
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
        var game;
        
        vm.$onInit = function() {
            setTimeout(function(){ $('.modal').modal(); }, 1);
            var min;

            vm.currentUser = sessionService.user();

            eventService.getOne(vm.currentTeam.event_id_key)
                .then(function(data) {
                    if(data) {
                        vm.event = data;
                        if(vm.currentUser){
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

                        if(vm.currentUser && !vm.isAdminOfTeam) vm.isLoggedIn = true;


                        var startDate = new Date(vm.event.start_date).getTime();
                        var curdate = (new Date).getTime();


                        if(startDate > curdate){
                            vm.isSoon = true;
                        }
                    }
                    else{
                        console.log("wew");
                    }
                });

            teamService.getIsUserOfTeam(vm.currentTeam.team_id, vm.currentUser.user_id)
                .then(function(data){
                    if(data.length != 0){
                        vm.isMember = true;
                    }
                })


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
                if(game.datediff < 0){
                    vm.lastFiveGames.push(game);
                }
            }

            for(game of vm.allGameInfo){
                if(game.datediff > 0){
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
                if(game.datediff < 0){
                    vm.pastGames.push(game);
                    vm.pastGameCount ++;
                }
            }

            vm.lastFiveGames = sort(vm.lastFiveGames);


            if(vm.upcomingGame.sport === undefined){
                vm.showUpcoming = false;
            }

            if (vm.lastFiveGames.length) {
                vm.lastOpponent = vm.lastFiveGames[0].team_name;
            } else {
                vm.lastOpponent = 'None';
            }


        }

        vm.editTeam = function(){
            teamService.update(vm.currentTeam.team_id, vm.currentTeam)
                .then(function(data) {
                    Materialize.toast('Successfully updated team', 2000, 'red');
                })
                .catch(function(e){
                    Materialize.toast('Unsuccessfully updated team', 2000, 'red');
                });
        }

        vm.deleteTeam = function(){
            teamService.delete(vm.currentTeam.team_id)
                .then(function(data) {
                    Materialize.toast('Successfully deleted team', 2000, 'red');
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

        vm.searchEnter = function(e) {
            if (e.keyCode === 13) {
                search();
            }
        }

        function search(){
            if(vm.searchInput == "") {
                teamService.getAll()
                    .then(function(data){
                        vm.allTeams = data;
                    })
                    .catch(function(err){
                        console.log(err);
                    })
            }
            else{
                searchService.teams(vm.searchInput)
                    .then(function(data){
                        vm.allTeams = data;
                    })
                    .catch(function(err){
                        console.log(err);
                    })
            }
        }
    }
})();
