(function() {
    'use strict';
    angular
        .module('app')
        .component('teamPage',{
            template: require('./team-page.html'),
            controller: teamPageController,
            bindings: {
                allGameInfo: '<',
                players: '<',
                allGames: '<',
                currentTeam: '<'
            }
        });

    function teamPageController(eventService, teamService, $state) {
        var vm = this;
        vm.pastGameCount = 0;
        vm.lastFiveGames = [];
        vm.pastGames = [];
        vm.upcomingGame = {};
        vm.showUpcoming = true;
        vm.lastOpponent = '';
        var game;
        
        vm.$onInit = function() {
            setTimeout(function(){ $('.modal').modal(); }, 1);

            var min;

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

            if(vm.upcomingGame.sport == undefined){
                vm.showUpcoming = false;
            }

            vm.lastOpponent = vm.lastFiveGames[0].team_name;

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
            var g;

            for(g of games){
                for(var i=0; i<lastFiveGames.length; i++){
                    if(g.datediff > lastFiveGames[i].datediff){
                        break;
                    }
                }
                lastFiveGames.splice(i, 0, g);
            }
            lastFiveGames = lastFiveGames.slice(0,5);
            return lastFiveGames;
        }
    }
})();
