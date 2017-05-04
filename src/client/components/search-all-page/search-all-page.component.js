(function() {
    'use strict';
    
    angular
        .module('app')
        .component('searchAllPage', {
            template: require('./search-all-page.html'),
            controller: searchAllPageController,
            bindings: {
                users: '<',
                institutions: '<',
                events: '<',
                teams: '<'
            }
        });

    function searchAllPageController() {
        var vm = this;

        vm.filters = {
            Profiles: true,
            Teams: true,
            Events: true,
            Sponsors: true,
        };
    }

})();
