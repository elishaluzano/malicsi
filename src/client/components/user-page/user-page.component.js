(function() {
    'use strict';

    angular
        .module('app')
        .component('userPage', {
            template: require('./user-page.html'),
            controller: userPageController
        });

    function userPageController(userService, sessionService, $location) {
        var vm = this;
        vm.user = null;
        vm.isSameUser = false;
        vm.isBeingEdited = false;

        vm.toggleEdit = function() {
            if (vm.isBeingEdited) {
                vm.isBeingEdited = false;
            }
            else {
                vm.isBeingEdited = true;
            }
        }
        
        var path = $location.path();
        var fields = path.split('/user/');
        var id = fields[1];
        
        userService.getOne(id)
            .then(function(data) {
                vm.user = data;
                if (vm.user.user_id === sessionService.user().user_id) {
                    vm.isSameUser = true;
                }
            });
    };

})();
