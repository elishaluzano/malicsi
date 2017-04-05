(function() {
    'use strict';

    angular
        .module('app')
        .component('sportTab', {
            template: require('./sport-tab.html'),
            controller: sportTabController
        });

    function sportTabController(sportService, searchService) {
        var vm = this;

        vm.selectedSport = null;
        vm.creatingSport = false;
        vm.editingSport = false;
        vm.deletingSport = false;
        vm.sports = [];
        vm.newSport = '';

        vm.$onInit = function() {
            sportService.getAll()
                .then(function(sports) {
                    vm.sports = sports;
                });
        }

        vm.selectSport = function(sport) {
            vm.newSport = '';
            vm.creatingSport = false;
            vm.selectedSport = angular.copy(sport);
            vm.selectedSport.originalName = vm.selectedSport.name;
        }

        vm.createSport = function() {
            vm.creatingSport = true;
            vm.selectedSport = null;
            vm.newSport = '';
        }

        vm.checkEnterCreateSport = function(e) {
            if (e.keyCode === 13) {
                vm.confirmCreateSport();
            }
        }

        vm.confirmCreateSport = function() {
            if (!vm.newSport) {
                return Materialize.toast('Enter a new sport', 3000, 'red');
            }

            searchService.sports(vm.newSport)
                .then(function(sports) {
                    if (!sports.find(function(sport) {
                        return sport.name.toLowerCase() === vm.newSport.toLowerCase();
                    })) {
                        let body = {
                            name: vm.newSport
                        };

                        sportService.create(body)
                            .then(function(sport) {
                                vm.sports.push(sport);
                                vm.creatingSport = false;
                                vm.selectSport(sport);
                                Materialize.toast(sport.name + ' has been created', 3000, 'red');
                            });
                    } else {
                        Materialize.toast(vm.newSport + ' already created', 3000, 'red');
                    }
                });

        }

        vm.editSport = function() {
            vm.editingSport = true;
            vm.deletingSport = false;
        }

        vm.confirmEditSport = function() {
            if (!vm.selectedSport.name) {
                return Materialize.toast('Enter sport name', 3000, 'red');
            }

            searchService.sports(vm.selectedSport.name)
                .then(function(sports) {
                    if (sports.find(function(sport) {
                        return sport.name.toLowerCase() === vm.selectedSport.name.toLowerCase()
                            && sport.sport_id != vm.selectedSport.sport_id;
                    })) {
                        return Materialize.toast(vm.selectedSport.name + ' is already taken', 3000, 'red');
                    }

                    let id = vm.selectedSport.sport_id;
                    let body = {
                        name: vm.selectedSport.name
                    };

                    sportService.update(id, body)
                        .then(function(newSport) {
                            vm.sports = vm.sports.map(function(sport) {
                                if (sport.sport_id == newSport.sport_id) {
                                    sport.name = newSport.name;
                                }
                                return sport;
                            });
                            Materialize.toast(vm.selectedSport.originalName + ' has been updated', 3000, 'red');
                            vm.selectedSport.originalName = newSport.name;
                            vm.editingSport = false;
                        }); 

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


    }
})();
