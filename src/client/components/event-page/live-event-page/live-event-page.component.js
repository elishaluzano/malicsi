(function() {
    'use strict';

    angular
        .module('app')
        .component('liveEventPage', {
            template: require('./live-event-page.html'),
            controller: liveEventPageController,
            bindings: {
                event: '<'
            }
        });

    function liveEventPageController(eventService) {
        var vm = this;

        vm.sports = [];
        vm.games = [];
        vm.dates = [];

        vm.sportsFilter = {};

        vm.statusFilter = {
            done: false,
            ongoing: false,
            upcoming: false
        };

        vm.$onInit = function() {
            eventService.getSports(vm.event.event_id)
                .then(function(sports) {
                    for (let sport of sports) {
                        vm.sportsFilter[sport.name] = false;
                    }
                    vm.sports = sports;
                });
            
            eventService.getGames(vm.event.event_id)
                .then(function(games) {

                    let startDate = new Date(vm.event.start_date);
                    let endDate = new Date(vm.event.end_date);
                    
                    console.log(startDate);
                    console.log(endDate);

                    startDate = new Date(startDate.setDate(startDate.getDate() - 1));
                    endDate = new Date(endDate.setDate(endDate.getDate() - 1));

                    while (startDate.getTime() !== endDate.getTime()) {
                        vm.dates.push({
                            date: startDate
                        });
                        startDate = new Date(startDate.setDate(startDate.getDate() + 1));
                    }

                    vm.dates.push({
                        date: new Date(startDate.setDate(startDate.getDate() + 1))
                    });
                    console.log(vm.dates);

                    
                });
            
        }
    }

})();
