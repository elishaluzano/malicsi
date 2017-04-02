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
        vm.isMale = false;

        vm.toggleEdit = function() {
            if (vm.isBeingEdited) {
                vm.user.birthday = (new Date(vm.user.birthday)).toISOString().substring(0,10);
                
                if (vm.isMale == true) {
                    vm.user.gender = 'male';
                }
                else {
                    vm.user.gender = 'female'
                }
                userService.update(vm.user.user_id, vm.user)
                    .then(function(user) {
                        // vm.user = user; // <- error pa, backend isnt returning what its supposed to
                        // vm.user.birthday = new Date(vm.user.birthday); // comment out because of above
                        vm.isBeingEdited = false;
                    });
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
            if (vm.user.gender == 'female') {
                vm.isMale = false;
            }
            else {
                vm.isMale = true;
            }
        }

    };

})();
