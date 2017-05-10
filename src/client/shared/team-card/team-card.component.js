(function() {
    'use strict';
    angular
        .module('app')
        .component('teamCard',{
            template: require('./team-card.html'),
            controller: teamCardController,
            bindings: {
                allGameInfo: '<',
                players: '<',
                allGames: '<',
                currentTeam: '<',
                componentName: '<',
                params: '<',
                allTeams: '<'
            }
        });

    function teamCardController(sessionService, adminService, eventService, teamService, $state) {
        var vm = this;
        vm.pastGameCount = 0;
        vm.lastFiveGames = [];
        vm.pastGames = [];
        vm.upcomingGame = {};
        vm.showUpcoming = true;
        vm.lastOpponent = '';
        vm.currentUser;
        vm.isAdminOfTeam = false;
        var game;
        
        vm.$onInit = function() {
            setTimeout(function(){ $('.modal').modal(); }, 1);
            var min;
            console.log(vm.currentTeam);

            sessionService.session()
                .then(function(user) {
                    if (user) {
                        vm.currentUser = user;
                        adminService.checkAdminOfTeam(vm.currentUser.user_id, vm.currentTeam.team_id)
                            .then(function(data){
                                console.log(data);
                                if(data) vm.isAdminOfTeam = true;
                                else vm.isAdminOfTeam = false;
                            }).catch(function(err){
                                console.log(err);
                            })
                    }
                });


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
    }
})();
