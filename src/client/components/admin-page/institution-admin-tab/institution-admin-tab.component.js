(function() {
    'use strict';

    angular
        .module('app')
        .component('institutionAdminTab', {
            template: require('./institution-admin-tab.html'),
            controller: institutionAdminTabController
        });

    function institutionAdminTabController(institutionService, userService, adminService, searchService) {
        var vm = this;

        vm.selectedInstitution = null;
        vm.editingInstitution = false;
        vm.deletingInstitution = false;
        vm.institutions = [];
        vm.newInstitutionName = '';
        vm.newInstitutionDescription = ''
        vm.files = [];

        vm.newAdmin = '';
        vm.admins = [];
        vm.selectedAdmins = [];

        vm.$onInit = function() {
            institutionService.getAll()
                .then(function(institutions) {
                    vm.institutions = institutions;
                });
            
            userService.getAdmins()
                .then(function(admins) {
                    vm.admins = admins;
                });
        }



        vm.selectInstitution = function(institution) {
            vm.creatingInstitution = false;
            vm.newAdmin = '';
            vm.selectedInstitution = angular.copy(institution);
            vm.selectedInstitution.originalName = institution.name;

            vm.selectedAdmins = angular.copy(vm.admins).filter(function(admin) {
                if (vm.selectedInstitution.institution_id == admin.institution_no) {
                    return true;
                }
                return false;
            });
        }


        vm.createInstitution = function() {
            vm.creatingInstitution = true;
            vm.selectedInstitution = null;
            vm.newInstitutionName = '';
            vm.newInstitutionDescription = ''
        }

        vm.checkEnterCreateInstitution = function(e) {
            if (e.keyCode === 13) {
                vm.confirmCreateInstitution();
            }
        }

        vm.confirmCreateInstitution = function() {
            if (!vm.newInstitutionName) {
                return Materialize.toast('Enter a new institution name', 3000, 'red');
            }

            if (!vm.newInstitutionDescription) {
                return Materialize.toast('Enter a new institution description', 3000, 'red');
            }

            let body = {
                name: vm.newInstitutionName,
                description: vm.newInstitutionDescription
            };

            institutionService.create(body)
                .then(function(institution) {
                    vm.institutions.push(institution);
                    vm.creatingInstitution = false;
                    vm.selectInstitution(institution);
                    Materialize.toast(institution.name + ' has been created', 3000, 'red');
                });
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
            
            let fd = new FormData();

            fd.append('name', vm.selectedInstitution.name);
            fd.append('description', vm.selectedInstitution.description);
            fd.append('picture', (vm.files[0])? vm.files[0] : vm.selectedInstitution.picture);

            institutionService.update(id, fd)
                .then(function(newInstitution) {
                    vm.institutions = vm.institutions.map(function(institution) {
                        if (institution.institution_id == vm.selectedInstitution.institution_id) {
                            Materialize.toast(vm.selectedInstitution.originalName + ' has been updated', 3000, 'red');
                            vm.selectedInstitution = institution = angular.copy(newInstitution);
                        }
                        return institution;
                    });
                    vm.editingInstitution = false;
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
                    vm.institutions = vm.institutions.filter(function(institution) {
                        if (vm.selectedInstitution.institution_id == institution.institution_id) {
                            return false;
                        }
                        return true;
                    });
                    Materialize.toast(vm.selectedInstitution.name + ' has been deleted', 3000, 'red');vm.selectedInstitution = null;
                    vm.deletingInstitution = false;
                });
        }

        vm.cancelDeleteInstitution = function() {
            vm.deletingInstitution = false;
        }

        vm.checkEnterAddAdmin = function(e) {
            if (e.keyCode === 13) {
                vm.addAdmin();
            }
        }

        vm.addAdmin = function() {
            if (!vm.newAdmin) {
                return Materialize.toast('Enter a username', 3000, 'red');
            }

            let adminExists = vm.selectedAdmins.find(function(admin) {
                return admin.username === vm.newAdmin;
            });
            
            if (adminExists) {
                return Materialize.toast(vm.newAdmin + ' is already an admin', 3000, 'red');
            }

            searchService.users(vm.newAdmin)
                .then(function(users) {
                    if (users.length !== 1) {
                        Materialize.toast(vm.newAdmin + ' does not exist', 3000, 'red');
                    } else {

                        let admin = users[0];
                        admin.institution_no = vm.selectedInstitution.institution_id;

                        let body = {
                            institution_no: admin.institution_no,
                            user_no: admin.user_id,
                            picture: '/images/temp-bg-2.jpg'
                        };

                        adminService.create(body)
                            .then(function() {
                                vm.admins.push(admin);
                                vm.selectedAdmins.push(admin); 
                                Materialize.toast(admin.username + ' has been added as an admin', 3000, 'red');
                                vm.newAdmin = '';
                            });
                    }
                });
        }

        vm.deleteAdmin = function(deletedAdmin) {
            adminService.deleteAsAdmin(deletedAdmin.institution_no, deletedAdmin.user_id)
                .then(function() {
                    vm.selectedAdmins = vm.selectedAdmins.filter(function(admin) {
                        if (admin.user_id == deletedAdmin.user_id) {
                            return false;
                        }
                        return true;
                    });

                    vm.admins = vm.admins.filter(function(admin) {
                        if (admin.user_id == deletedAdmin.user_id) {
                            return false;
                        }
                        return true;
                    });

                    Materialize.toast(deletedAdmin.name + ' has been removed as admin from ' + vm.selectedInstitution.name, 3000, 'red');
                });
        }

    }
})();
