(function() {
    'use strict';

    angular
        .module('app')
        .component('sponsorsPage', {
            template: require('./sponsors-page.html'),
            controller: sponsorsPageController,
            bindings: {
                sponsors: '<'
            }
        });

        function sponsorsPageController() {
            var vm = this;
            

        }
})();
