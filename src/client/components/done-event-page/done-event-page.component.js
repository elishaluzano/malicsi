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
        var vm = this;
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
            });
        }

        vm.getTeamsInGame = function(id) {
            return gameService.getTeamsInGame(id)
                .then(function(res) {
                    return res;
                });
        }
        
    }
})();
