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

    function userPageController(userService, sessionService, $location) {
        var vm = this;
        vm.isSameUser = false;
        vm.isBeingEdited = false;

        vm.toggleEdit = function() {
            if (vm.isBeingEdited) {
                vm.user.birthday = (new Date(vm.user.birthday)).toISOString().substring(0,10);
                userService.update(vm.user.user_id, vm.user)
                    .then(function(user) {
                        vm.user = user;
                    });
                vm.isBeingEdited = false;
            }
            else {
                vm.isBeingEdited = true;
            }
        }

        vm.deleteUser = function() {
            userService.delete(vm.user.user_id)
                .then(function(data) {
                    
                });
        }

        vm.$onInit = function() {
            $('.modal').modal();
            vm.user.birthday = new Date(vm.user.birthday);
            if (sessionService.user() && vm.user.user_id === sessionService.user().user_id) {
                vm.isSameUser = true;
            }
        }

    };

})();
