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
    
    function adminPageController($state, venueService, sportService, institutionService, userService) {
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
            $('.modal').modal();
        
            sportService.getAll()
                .then(function(sports) {
                    vm.sports = sports;
                });

            venueService.getAll()
                .then(function(venues) {
                    vm.venues = venues;
                });

            institutionService.getAll()
                .then(function(institutions) {
                    vm.institutions = institutions;
                });

            userService.getAdmins()
                .then(function(admins) {
                    vm.admins = admins;
                });
        }

        vm.promptSportEdit = function(sport) {
            vm.sportToEdit = $.extend(true, [], sport);
            vm.sportToEdit.originalName = sport.name;
        }

        vm.confirmSportEdit = function() {
            if (!vm.sportToEdit.name) {
                return Materialize.toast('Enter a new sport', 3000, 'red');
            }

            let body = {
                name: vm.sportToEdit.name
            };

            sportService.update(vm.sportToEdit.sport_id, body)
                .then(function() {
                    vm.sports = vm.sports.map(function(sport) {
                        if (sport.sport_id === vm.sportToEdit.sport_id) {
                            sport.name = vm.sportToEdit.name;
                        }
                        return sport;
                    });
                    $('#edit-sport-modal').modal('close');
                });
        }

        vm.promptSportDelete = function(sport) {
            vm.sportToDelete = sport;
        }

        vm.confirmSportDelete = function() {
            sportService.delete(vm.sportToDelete.sport_id)
                .then(function() {
                    vm.sports = vm.sports.filter(function(sport) {
                        return sport.sport_id !== vm.sportToDelete.sport_id;
                    });
                    Materialize.toast(vm.sportToDelete.name + ' has been deleted', 3000, 'red');
                    vm.sportToDelete = null;
                });
        }

        vm.checkEnterSport = function(e) {
            if (e.keyCode === 13) {
                vm.addSport();
            }
        }

        vm.addSport = function(e) {
            if (!vm.newSport) {
                return Materialize.toast('Enter a sport', 3000, 'red');    
            }
            let body = {
                name: vm.newSport
            };

            sportService.create(body)
                .then(function(sport) {
                    vm.sports.push(sport);
                    vm.newSport = '';
                });
        }

        vm.promptVenueEdit = function(venue) {
            vm.venueToEdit = $.extend(true, [], venue);
            vm.venueToEdit.originalName = venue.name;
        }

        vm.confirmVenueEdit = function() {
            if (!vm.venueToEdit.name) {
                return Materialize.toast('Enter a new venue', 3000, 'red');
            }

            let body = {
                name: vm.venueToEdit.name
            };

            venueService.update(vm.venueToEdit.venue_id, body)
                .then(function() {
                    vm.venues = vm.venues.map(function(venue) {
                        if (venue.venue_id === vm.venueToEdit.venue_id) {
                            venue.name = vm.venueToEdit.name;
                        }

                        return venue;
                    });
                    $('#edit-venue-modal').modal('close');
                });
        }

        vm.promptVenueDelete = function(venue) {
            vm.venueToDelete = venue;
        }

        vm.confirmVenueDelete = function() {
            venueService.delete(vm.venueToDelete.venue_id)
                .then(function() {
                    vm.venues = vm.venues.filter(function(venue) {
                        return venue.venue_id !== vm.venueToDelete.venue_id;
                    });
                    Materialize.toast(vm.venueToDelete.name + ' has been deleted', 3000, 'red');
                    vm.venueToDelete = null;
                });
        }

        vm.checkEnterVenue = function(e) {
            if (e.keyCode === 13) {
                vm.addVenue();
            }
        }

        vm.addVenue = function(e) {
            if (!vm.newVenue) {
                return Materialize.toast('Enter a venue', 3000, 'red');
            }

            let body = {
                name: vm.newVenue
            };

            venueService.create(body)
                .then(function(venue) {
                    vm.venues.push(venue);
                    vm.newVenue = '';
                });
        }

    }

})();
