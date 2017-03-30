(function() {
    'use strict';
    angular
        .module('app')
        .component('doneEventPage',{
            template: require('./done-event-page.html'),
            controller: doneEventPageController,
            bindings: {
                event: '<'
            }
        });
       /* .directive('tabDirective', tabDirective);

        function tabDirective() {
            var directive= {
                link: link,
                restrict: 'EA'
            };
            return directive;
            function link(scope, element, attrs) {
                $(element).tabs();
            }
        }*/

    function doneEventPageController(eventService, gameService) {
        /*var vm = this;
        vm.sports = {};
        vm.sportsAndGames = [];

        vm.$onInit = function() {
            $('ul.tabs').tabs();
            vm.event.reduce(function(obj, e){
                if(!obj.hasOwnProperty(e.sport)) { // kung may ganun sport na kung meron push nalang sa array
                    obj[e.sport] = [];
                }
                obj[e.sport].push(e);
                console.log("object: " + obj);
                return obj;
            }, vm.sports);

            angular.forEach(vm.sports, function(value, key){
                var temp = {};
                vm.sports[key] = value.reduce(function(sport, e) {
                    if(!temp.hasOwnProperty(e.game_id)) {
                        temp[e.game_id] = [];
                    }
                    temp[e.game_id].push(e);
                    console.log(temp);
                    return temp; 
                }, temp);
            });*/

            var vm = this;
            vm.sports = [];
            vm.sportsAndGames = [];

            vm.$onInit = function() {
                console.log(vm.event);
                vm.event.forEach(function(event) {
                    if(vm.sports.indexOf(event.sport) < 0) {
                        vm.sports.push(event.sport);
                        vm.sportsAndGames.push({
                            name: information.sport,
                            games: [event]});
                    } else {
                        vm.sportsAndGames.forEach(function(sportAndGame) {
                            if(sportAndGame.name == event.sport) {
                                sportAndGame.games.push(event);
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
                });

        }
        
    }
})();