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
        })
        .directive('collapsibleDirective', collapsibleDirective);

    function collapsibleDirective() {
        var directive = {
            link: link,
            restrict: 'EA'
        };
        return directive;
        
        function link(scope, element, attrs) {
            $(element).collapsible();
        }

    }

    function landingPageController(eventService, teamService) {
        var vm = this;
        
        vm.$onInit = function() {
            console.log(vm.events);
        }
    }
})();
