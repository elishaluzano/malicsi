(function() {
    'use strict';
    angular
        .module('app')
        .component('sportCard',{
            template: require('./sport-card.html'),
            controller: sportCardController,
            bindings: {
                information: '<'
            }
        });

    function sportCardController(gameService) {
        var vm = this;
        vm.gameNow = false;
        vm.sports = [];
        vm.sportsAndGames = [];

        vm.$onInit = function(){
            console.log(vm.information);
            for(let game of vm.information.games){
                console.log(game);
                if (game.now) {
                    vm.gameNow = true
                }; 
                game.time = new Date(game.time);    
                gameService.getTeamsInGame(game.game_id)
                    .then(function(data){
                        game.teams = data;
                    })
                    .catch(function(err){
                        console.log(err);
                    })
            }

            /*console.log(vm.information);
            vm.information.forEach(function(information){
                if(vm.sports.indexOf(information.sport) < 0){
                    vm.sports.push(information.sport);
                    vm.sportsAndGames.push({name: information.sport, games: [information]});
                }
                else{
                    vm.sportsAndGames.forEach(function(sportAndGame){
                        if(sportAndGame.name == information.sport){
                            sportAndGame.games.push(information);
                        }
                    });
                }
            });

            vm.sportsAndGames.forEach(function(sportAndGame){
                var games = [];
                var gamesPerSport = [];

                (sportAndGame.games).forEach(function(game){
                    if(games.indexOf(game.game_id) < 0){
                        games.push(game.game_id);
                        game.team = [game.team];
                        gamesPerSport.push(game);
                    }
                    else{
                        gamesPerSport.forEach(function(gamePerSport){
                            if(gamePerSport.game_id == game.game_id){
                                gamePerSport.team.push(game.team);
                            }
                        });
                    }
                });

                sportAndGame.games = gamesPerSport;
            });*/
        }
        
    }
})();
