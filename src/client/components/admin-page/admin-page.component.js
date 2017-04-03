(function() {
    'use strict';

    angular
        .module('app')
        .component('adminPage', {
            template: require('./admin-page.html'),
            controller: adminPageController,
            bindings: {
                user: '<',
            }
        });
    
    function adminPageController($state, venueService, sportService, institutionService, userService, $q) {
        var vm = this;

        vm.sports = [];
        vm.sportToDelete = null;
        vm.newSport = '';

        vm.venues = [];
        vm.venueToEdit = null;
        vm.venueToDelete = null;
        vm.newVenue = '';

        vm.institutions = [];
        vm.admins = [];

        vm.$onInit = function() {
            sportService.getAll()
                .then(function(sports) {
                    vm.sports = sports;
                });

            venueService.getAll()
                .then(function(venues) {
                    vm.venues = venues;
                });

            $q.all([
                institutionService.getAll(),
                userService.getAdmins()
            ]).then(function(data) {
                vm.institutions = data[0];
                vm.admins = data[1];
                console.log(vm.admins);
                $('.collapsible').collapsible();
            });
            
        }
    }

})();
