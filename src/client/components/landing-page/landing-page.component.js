(function() {
    'use strict';
    angular
        .module('app')
        .component('landingPage',{
            template: require('./landing-page.html'),
            controller: landingPageController
        });

    function landingPageController(eventService) {
        var vm = this;
        vm.events = '';
        
    }
})();
