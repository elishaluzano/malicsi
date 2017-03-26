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

    function sportCardController(eventService) {
        var vm = this;
        vm.sports = [];
        vm.sportsAndGames = [];

        vm.$onInit = function(){

            for(var i=0; i<vm.information.length; i++){
                if(vm.sports.indexOf(vm.information[i].sport) < 0){
                    vm.sports.push(vm.information[i].sport);
                    vm.sportsAndGames.push({name: vm.information[i].sport, games: [vm.information[i]]});
                }
                else{
                    for(var j=0; j<vm.sportsAndGames.length; j++) {
                        if(vm.sportsAndGames[j].name == vm.information[i].sport){
                            vm.sportsAndGames[j].games.push(vm.information[i]);
                        }
                    }
                }
            }

            for(var i=0; i<vm.sportsAndGames.length; i++){
                var games = [];
                var gamesPerSport = [];

                for(var j=0; j<vm.sportsAndGames[i].games.length; j++){

                    if(games.indexOf(vm.sportsAndGames[i].games[j].game_id) < 0){
                        games.push(vm.sportsAndGames[i].games[j].game_id);
                        vm.sportsAndGames[i].games[j].team = [vm.sportsAndGames[i].games[j].team];
                        gamesPerSport.push(vm.sportsAndGames[i].games[j]);
                    }

                    else{
                        for(var k=0; k<gamesPerSport.length; k++) {
                            if(gamesPerSport[k].game_id == vm.sportsAndGames[i].games[j].game_id){
                                gamesPerSport[k].team.push(vm.sportsAndGames[i].games[j].team);
                            }
                        }
                    }
                }

                vm.sportsAndGames[i].games = gamesPerSport;
            }
            console.log(vm.sportsAndGames);
        }
        
    }
})();
