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

        vm.selectedSport = null;
        vm.editingSport = false;
        vm.deletingSport = false;
        vm.sports = [];

        vm.selectedVenue = null;
        vm.editingVenue = false;
        vm.deletingVenue = false;
        vm.venues = [];

        vm.selectedInstitution = null;
        vm.editingInstitution = false;
        vm.deletingInstitution = false;
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
            });
            
        }

        vm.selectSport = function(sport) {
            vm.selectedSport = angular.copy(sport);
            vm.selectedSport.originalName = vm.selectedSport.name;
        }

        vm.editSport = function() {
            vm.editingSport = true;
            vm.deletingSport = false;
        }

        vm.confirmEditSport = function() {
            if (!vm.selectedSport.name) {
                return Materialize.toast('Enter sport name', 3000, 'red');
            }

            let id = vm.selectedSport.sport_id;
            let body = {
                name: vm.selectedSport.name
            };

            sportService.update(id, body)
                .then(function(newSport) {
                    vm.sports = vm.sports.map(function(sport) {
                        if (sport.sport_id == newSport.sport_id) {
                            console.log(sport);
                            sport.name = newSport.name;
                        }
                        return sport;
                    });
                    Materialize.toast(vm.selectedSport.originalName + ' has been updated', 3000, 'red');
                    vm.selectedSport.originalName = newSport.name;
                    vm.editingSport = false;
                }); 
        }

        vm.cancelEditSport = function() {
            vm.editingSport = false;
        }

        vm.deleteSport = function() {
            vm.deletingSport = true;
            vm.editingSport = false;   
        }

        vm.confirmDeleteSport = function() {
            let id = vm.selectedSport.sport_id;

            sportService.delete(id)
                .then(function() {
                    vm.sports = vm.sports.filter(function(sport) {
                        if (sport.sport_id == id) {
                            return false;
                        }
                        return true;    
                    });
                    Materialize.toast(vm.selectedSport.originalName + ' has been deleted', 3000, 'red');
                    vm.selectedSport = null;
                    vm.deletingSport = false;
                });
        }

        vm.cancelDeleteSport = function() {
            vm.deletingSport = false;
        }

        vm.selectVenue = function(venue) {
            vm.selectedVenue = angular.copy(venue);
            vm.selectedVenue.originalName = vm.selectedVenue.name;
            console.log(vm.selectedVenue);
        }

        vm.editVenue = function() {
            vm.editingVenue = true;
            vm.deletingVenue = false;
        }

        vm.confirmEditVenue = function() {
            if (!vm.selectedVenue.name) {
                return Materialize.toast('Enter venue name', 3000, 'red');
            }

            let id = vm.selectedVenue.venue_id;
            let body = {
                name: vm.selectedVenue.name
            };

            venueService.update(id, body)
                .then(function(newVenue) {
                    console.log(newVenue);
                    vm.venues = vm.venues.map(function(venue) {
                        if (venue.venue_id == newVenue.venue_id) {
                            venue.name = newVenue.name;
                        }
                        return venue;
                    });
                    Materialize.toast(vm.selectedVenue.originalName + ' has been updated', 3000, 'red');
                    vm.selectedVenue.originalName = newVenue.name;
                    vm.editingvenue = false;
                }); 
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
                });
        }

        vm.cancelDeleteVenue = function() {
            vm.deletingVenue = false;
        }



        vm.selectInstitution = function(institution) {
            vm.selectedInstitution = angular.copy(institution);
            vm.selectedInstitution.originalName = institution.name;
        }



        vm.editInstitution = function() {
            vm.editingInstitution = true;
            vm.deletingInstitution = false;
        }


        vm.confirmEditInstitution = function() {
            if (!vm.selectedInstitution.name) {
                return Materialize.toast('Enter institution name', 3000, 'red');
            }

            if (!vm.selectedInstitution.description) {
                return Materialize.toast('Enter institution description', 3000, 'red');
            }

            let id = vm.selectedInstitution.institution_id;
            let body = {
                name: vm.selectedInstitution.name,
                description: vm.selectedInstitution.description
            };

            institutionService.update(id, body)
                .then(function(newInstitution) {
                    vm.institutions = vm.institutions.map(function(institution) {
                        if (institution.institution_id == vm.selectedInstitution.institution_id) {
                            institution.name = newInstitution.name;
                            institution.description = newInstitution.description;
                        }
                        return institution;
                    });
                });
        }

        vm.cancelEditInstitution = function() {
            vm.editingInstitution = false;
        }

        vm.deleteInstitution = function() {
            vm.editingInstitution = false;
            vm.deletingInstitution = true;
        }

        vm.confirmDeleteInstitution = function() {
            institutionService.delete(vm.selectedInstitution.institution_id)
                .then(function() {
                    
                });
        }































































    }

})();
