(function() {
    'use strict';
    angular
        .module('app')
        .component('userLogPage',{
            template: require('./user-log-page.html'),
            controller: userLogPageController,
            bindings: {
                userLogs: '<',
                user: '<'
            }
        });

    function userLogPageController(userLogService, sessionService) {
        var vm = this;
        vm.isAdmin = false;
        vm.ownLog = [];

        vm.$onInit = function() {
            console.log(vm.userLogs);
            if (vm.user.user_id == 1) {
                for (let each of vm.userLogs) {
                    vm.ownLog.push(each);
                }
            } else {
                for (let each of vm.userLogs) {

                    if (each.user_id == vm.user.user_id) {
                        vm.ownLog.push(each);
                    }
                }
            }
        }
    }
})();
