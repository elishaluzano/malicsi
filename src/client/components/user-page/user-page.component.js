(function() {
    'use strict';

    angular
        .module('app')
        .component('userPage', {
            template: require('./user-page.html'),
            controller: userPageController,
            bindings: {
                user: '<'
            }
        });

    function userPageController(userService, sessionService, searchService, $state, userAffiliationService, userLogService) {
        var vm = this;
        vm.isSameUser = false;
        vm.isBeingEdited = false;
        vm.files = [];
        vm.usercopy = null;
        vm.isAdmin = false;
        vm.affiliations = [];

        vm.$onInit = function() {
            $('.modal').modal();
            vm.usercopy = angular.copy(vm.user);
            vm.user.birthday = new Date(vm.user.birthday);
            sessionService.session()
                .then(function(user) {
                    if (user && user.user_id === vm.user.user_id) {
                        vm.isSameUser = true;
                    }
                    if (user && user.isOverallAdmin) {
                        vm.isAdmin = true;
                    }
                });
            userAffiliationService.getAllById(vm.user.user_id)
                .then(function(affiliations) {
                    vm.affiliations = affiliations;
                });
        }

        vm.discardChanges = function() {
            Materialize.toast('Changes were discarded', 3000, 'red');
            vm.user = vm.usercopy;
            vm.isBeingEdited = false;
        }

        vm.toggleEdit = function() {
            if (vm.isBeingEdited) {
                if (!vm.user.name) {
                    return Materialize.toast("What's your name?", 3000, 'red');
                }

                if (!vm.user.birthday) {
                    return Materialize.toast('When is your birthday?', 3000, 'red');
                }

                if (!vm.user.gender) {
                    return Materialize.toast('Are you male of female', 3000, 'red');
                }

                if (!vm.user.contact_number.length) {
                    return Materialize.toast('Can I get your digits?', 3000, 'red');
                }

                if (isNaN(vm.user.contact_number)) {
                    return Materialize.toast('Is that really your contact number?', 3000, 'red');
                }

                if (/[\W]/.exec(vm.user.username)) {
                    return Materialize.toast('Username should only consist of alphanumeric characters and underscores', 3000, 'red');
                }

                if (vm.user.password.length < 6) {
                    return Materialize.toast('Your password should be at least 6 characters long', 3000, 'red');
                }

                if (/*!/^\w+@[a-zA-Z]+\.[a-zA-Z]+/.exec(vm.user.email)*/
                    !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.exec(vm.user.email)) {
                    return Materialize.toast('Is that a real email address?', 3000, 'red');
                }

                searchService.users(vm.user.username)
                    .then(function(users) {
                        let found = false;
                        for (let user of users) {
                            if (user.username === vm.user.username && user.user_id != vm.user.user_id) {
                                found = true;
                                Materialize.toast('Username has already been taken', 3000, 'red');
                                break;
                            }
                        }
                        if (!found) {
                            var fd = new FormData();
                            fd.append('name', vm.user.name);
                            fd.append('username', vm.user.username);
                            fd.append('password', vm.user.password);
                            fd.append('email', vm.user.email);
                            fd.append('contact_number', vm.user.contact_number);
                            fd.append('birthday', (new Date(vm.user.birthday)).toISOString().substring(0,10));
                            fd.append('isOverallAdmin', vm.user.isOverallAdmin);
                            fd.append('contact_person', vm.user.contact_person);
                            fd.append('gender', vm.user.gender);
                            fd.append('profile_pic', (vm.files[0])? vm.files[0] : vm.user.profile_pic);
                            userService.update(vm.user.user_id, fd)
                                .then(function(user) {
                                    vm.user = user;
                                    vm.user.birthday = new Date(vm.user.birthday);
                                    vm.isBeingEdited = false;
                                    sessionService.session(user)
                                        .then(function(user) {
                                            var string = "Successfully updated user.";
                                            var log = {
                                                user_id: user.user_id,
                                                institution_id: user.institution_id,
                                                action: string
                                            }

                                            userLogService.create(log)
                                                .then(function(data) {
                                                  
                                                })
                                                .catch(function(err) {
                                                    console.log(err);
                                                })
                                            window.location.reload(true);
                                        });
                                });
                            vm.usercopy = vm.user;
                        }
                    });

            }
            else {
                vm.isBeingEdited = true;
            }
        }

        vm.deleteUser = function() {
            var string = vm.user.username + " has been deleted.";
            sessionService.logout()
                .then(function() {
                    var log = {
                        user_id: vm.user.user_id,
                        institution_id: vm.user.institution_id,
                        action: string
                    };

                    userLogService.create(log)
                        .then(function(data) {
                            userService.delete(vm.user.user_id)
                                .then(function() {
                                    Materialize.toast('You account has been deleted', 3000, 'red');
                                    window.location.reload();
                                });
                        })
                        .catch(function(err) {
                            console.log(err);
                        });
                });
        }
        
    };

})();
