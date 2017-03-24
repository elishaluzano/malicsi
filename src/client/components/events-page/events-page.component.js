(function() {
    'use strict';

    angular
        .module('app')
        .component('eventsPage', {
            template: require('./events-page.html'),
            controller: eventsPageController
        });

    function eventsPageController(eventService, sessionService) {
        var vm = this;

        vm.events = [];
        vm.isAdmin = [];

        vm.$onInit = function() {
            sessionService.session()
                .then(function(data) {
                    let user = data;

                    eventService.getAll()
                        .then(function(data) {
                            if ()
                        });
                    
                });

        }

    }

})();
