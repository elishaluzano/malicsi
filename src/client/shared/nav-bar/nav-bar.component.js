(function() {
    'use strict';

    angular
        .module('app')
        .component('navBar', {
            template: require('./nav-bar.html'),
            controller: navBarController
        });

    function navBarController(sessionService, adminService) {
        var vm = this;

        vm.isAdmin = false;
        vm.searchCategory = 'all';
        vm.searchInput = '';
        vm.user = null;

        vm.username = '';
        vm.password = '';

        vm.$onInit = function() {
            $('#login').webuiPopover({ url:'#login-form' });
            $('#drop-links').webuiPopover({ url:'#additional-links' });

            $('.side-nav-button').sideNav({
                menuWidth: 300,
                edge: 'right',
                closeOnClick: true
            });
        }

        vm.focusLogin = function() {
            $('#username').focus();
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
                    } else { // if wrong credentials
                        Materialize.toast('Wrong credentials!', 2000, 'red');
                    }
                });
        }

        vm.logout = function() {
            sessionService.logout()
                .then(function(user) {
                    vm.user = user;
                });
        }
    }

})();
