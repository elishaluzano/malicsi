(function() {
    'use strict';
    angular
        .module('app')
        .component('landingPage',{
            template: require('./landing-page.html'),
            controller: landingPageController,
            bindings: {
                events: '<'
            }
        });

    function landingPageController(eventService) {
        var vm = this;
        
        vm.$onInit = function() {
            console.log(vm.events);
        }
    }
})();
