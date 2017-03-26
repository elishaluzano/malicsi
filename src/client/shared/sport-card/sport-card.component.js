(function() {
    'use strict';
    angular
        .module('app')
        .component('sportCard',{
            template: require('./sport-card.html'),
            controller: sportCardController,
            bindings: {
                games: '<',
                sports: '<'
            }
        });

    function sportCardController(eventService) {
        var vm = this;

        vm.$onInit = function(){

            for(var i=0; i<vm.sports.length; i++){
                vm.sports[i].games = [];
            }

            for(var i=0; i<vm.sports.length; i++){
                for(var j=0; j<vm.games.length; j++){
                    if(vm.sports[i].sport_id == vm.games[j].sport_id_key){
                        vm.sports[i].games.push(vm.games[j]);
                        vm.games.splice(j,1);
                    }
                }
            }

            console.log(vm.sports);
        }
        
    }
})();
