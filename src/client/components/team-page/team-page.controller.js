(function() {
    'use strict';

    angular
        .module('app')
        .component('teamPage', {
            template: require('./team-page.html'),
            controller: teamPageController,
            bindings: {
                team: '<'
            }
        });

    function teamPageController() {
        var vm = this;
    }

})();
