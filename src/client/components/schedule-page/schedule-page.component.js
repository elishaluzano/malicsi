(function() {
    'use strict';
    angular
        .module('app')
        .component('schedulePage',{
            template: require('./schedule-page.html'),
            controller: schedulePageController,
            /*bindings: {
                games: '<'
            }*/
        });

    function schedulePageController(sportService, gameService) {
        var vm = this;
        vm.sports = [];

        vm.$onInit = function() {
           sportService.getAll()
                .then(function(data) {
                    if(data){
                        vm.sports.push(data);
                    }
                    console.log(vm.sports);
                })
        }
    }
})();
