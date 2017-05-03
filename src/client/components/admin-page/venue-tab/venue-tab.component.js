(function() {
    'use strict';

    angular
        .module('app')
        .component('venueTab', {
            template: require('./venue-tab.html'),
            controller: venueTabController
        });

    function venueTabController(venueService, searchService, userLogService) {
        var vm = this;

        vm.selectedVenue = null;
        vm.creatingVenue = false;
        vm.editingVenue = false;
        vm.deletingVenue = false;
        vm.venues = [];
        vm.newVenue = '';

        vm.$onInit = function() {
            venueService.getAll()
                .then(function(venues) {
                    vm.venues = venues;
                });
        }

        vm.selectVenue = function(venue) {
            vm.selectedVenue = angular.copy(venue);
            vm.selectedVenue.originalName = vm.selectedVenue.name;
        }


        vm.createVenue = function() {
            vm.creatingVenue = true;
            vm.selectedVenue = null;
            vm.newVenue = '';
        }

        vm.checkEnterCreateVenue = function(e) {
            if (e.keyCode === 13) {
                vm.confirmCreateVenue();
            }
        }

        vm.confirmCreateVenue = function() {
            if (!vm.newVenue) {
                return Materialize.toast('Enter a new venue', 3000, 'red');
            }

            searchService.venues(vm.newVenue)
                .then(function(venues) {
                    if (!venues.find(function(venue) {
                        return venue.name.toLowerCase() === vm.newVenue.toLowerCase();
                    })) {
                        let body = {
                            name: vm.newVenue
                        };

                        venueService.create(body)
                            .then(function(venue) {
                                vm.venues.push(venue);
                                vm.creatingVenue = false;
                                vm.selectVenue(venue);
                                Materialize.toast(venue.name + ' has been created', 3000, 'red');
                                var string = venue.name + " has been created.";
                                var log = {
                                    user_id: 1,
                                    institution_id: 0,
                                    action: string
                                }

                                userLogService.create(log)
                                    .then(function(data) {
                                      
                                    })
                                    .catch(function(err) {
                                        console.log(err);
                                    })
                            });
                    } else {
                        Materialize.toast(vm.newVenue + ' already created', 3000, 'red');
                    }
                });

        }

        vm.editVenue = function() {
            vm.editingVenue = true;
            vm.deletingVenue = false;
        }

        vm.confirmEditVenue = function() {
            if (!vm.selectedVenue.name) {
                return Materialize.toast('Enter venue name', 3000, 'red');
            }

            searchService.venues(vm.selectedVenue.name)
                .then(function(venues) {
                    if (venues.find(function(venue) {
                        return venue.name.toLowerCase() === vm.selectedVenue.name.toLowerCase()
                            && venue.venue_id != vm.selectedVenue.venue_id;
                    })) {
                        return Materialize.toast(vm.selectedVenue.name + ' is already taken', 3000, 'red');
                    }

                    let id = vm.selectedVenue.venue_id;
                    let body = {
                        name: vm.selectedVenue.name
                    };

                    venueService.update(id, body)
                        .then(function(newVenue) {
                            vm.venues = vm.venues.map(function(venue) {
                                if (venue.venue_id == newVenue.venue_id) {
                                    venue.name = newVenue.name;
                                }
                                return venue;
                            });
                            Materialize.toast(vm.selectedVenue.originalName + ' has been updated', 3000, 'red');
                            vm.selectedVenue.originalName = newVenue.name;
                            vm.editingVenue = false;
                            var string = vm.selectedVenue.originalName + " has been updated.";
                            var log = {
                                user_id: 1,
                                institution_id: 0,
                                action: string
                            }

                            userLogService.create(log)
                                .then(function(data) {
                                  
                                })
                                .catch(function(err) {
                                    console.log(err);
                                })
                        }); 

                })

        }

        vm.cancelEditVenue = function() {
            vm.editingVenue = false;
        }

        vm.deleteVenue = function() {
            vm.deletingVenue = true;
            vm.editingVenue = false;   
        }

        vm.confirmDeleteVenue = function() {
            let id = vm.selectedVenue.venue_id;

            venueService.delete(id)
                .then(function() {
                    vm.venues = vm.venues.filter(function(venue) {
                        if (venue.venue_id == id) {
                            return false;
                        }
                        return true;    
                    });
                    Materialize.toast(vm.selectedVenue.originalName + ' has been deleted', 3000, 'red');
                    vm.selectedVenue = null;
                    vm.deletingVenue = false;
                    var string = admin.username + " has been deleted.";
                    var log = {
                        user_id: 1,
                        institution_id: 0,
                        action: string
                    }

                    userLogService.create(log)
                        .then(function(data) {
                          
                        })
                        .catch(function(err) {
                            console.log(err);
                        })
                });
        }

        vm.cancelDeleteVenue = function() {
            vm.deletingVenue = false;
        }


    }
})();
