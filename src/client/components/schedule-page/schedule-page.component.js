(function() {
    'use strict';
    angular
        .module('app')
        .component('schedulePage',{
            template: require('./schedule-page.html'),
            controller: schedulePageController,
        });

    function schedulePageController(sportService, eventService) {
        var vm = this;

        vm.$onInit = function() {
           eventService.getAll()
                .then(function(events) {
                    console.log(events);
                    for(let event of events) {
                        eventService.getSports(event.event_id)
                            .then(function(data) {
                                console.log(data);
                            }).catch(function(err) {
                                console.log("Error:"+err);
                            })
                    }
                })
        }
    }
})();
