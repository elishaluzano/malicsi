(function() {
    'use strict';
    angular
        .module('app')
        .component('schedulePage',{
            template: require('./schedule-page.html'),
            controller: schedulePageController,
            bindings: {
                sports: '<',
                allGamesInformation: '<'
            }
        });

    function schedulePageController(sportService, eventService) {
        var vm = this;

        vm.$onInit = function() {

          $('.datepicker').pickadate({
            selectMonths: true, // Creates a dropdown to control month
            selectYears: 15 // Creates a dropdown of 15 years to control year
          });

           for(let sport of vm.sports){
                sport.games = [];
           }

           for(let game of vm.allGamesInformation){
                for(let sport of vm.sports){
                    if(game.sport_id === sport.sport_id){
                        sport.games.push(game);
                    }
                }
           }
        }


    }
})();
