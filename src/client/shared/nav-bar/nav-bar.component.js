(function() {
    'use strict';

    angular
        .module('app')
        .component('navBar', {
            template: require('./nav-bar.html'),
            controller: navBarController
        });

    function navBarController(sessionService, adminService, $state) {
        var vm = this;

        vm.isAdmin = false;
        vm.searchCategory = 'all';
        vm.searchInput = '';
        vm.user = null;

        vm.username = '';
        vm.password = '';

        vm.$onInit = function() {
            $('#login').webuiPopover({ url:'#login-form' });
            $('#drop-link').webuiPopover({ url:'#additional-links' });

            $('.side-nav-button').sideNav({
                menuWidth: 300,
                edge: 'right',
                closeOnClick: true
            });
            
            sessionService.session()
                .then(function(user) {
                    vm.user = user;
                    adminService.checkAdmin(vm.user.user_id)
                        .then(function(admin) {
                            if (admin) {
                                vm.isAdmin = true;
                            }
                        });
                });
        }

        vm.focusLogin = function() {
            $('#login-username').focus();
        }

        vm.login = function() {
            sessionService.login(vm.username, vm.password)
                .then(function(user) {
                    vm.user = user;
                    vm.username = '';
                    vm.password = '';
                    if (user) { // if successful login
                        adminService.checkAdmin(vm.user.user_id)
                            .then(function(admin) {
                                if (admin) {
                                    vm.isAdmin = true;
                                }
                            });
                        WebuiPopovers.hide('#login');
                        if ($state.current.name === 'registrationPage') {
                            $state.go('landingPage');
                        } else {
                            $state.reload();
                        }
                        // if ($state.current.name === 'landingPage') {
                        //     $state.reload();
                        // } else {
                        //     $state.go('landingPage');
                        // }
                    } else { // if wrong credentials
                        Materialize.toast('Wrong credentials!', 2000, 'red');
                    }
                });
        }

        vm.logout = function() {
            sessionService.logout()
                .then(function(user) {
                    vm.user = user;
                    if ($state.current.name === 'landingPage') {
                        $state.reload();
                    } else {
                        $state.go('landingPage');
                    }
                });
        }

        vm.searchEnter = function(e) {
            if (e.keyCode === 13) {
                vm.search();
            }
        }

        vm.search = function() {
            let category = vm.searchCategory;
            category = category.charAt(0).toUpperCase() + category.slice(1);
            $state.go('search' + category + 'Page', { query: vm.searchInput });
        }

        vm.closeMenu = function() {
            WebuiPopovers.hide('#drop-link');
        }
    }

})();
