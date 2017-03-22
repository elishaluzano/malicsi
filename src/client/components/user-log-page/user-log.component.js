(function() {
    'use strict';
    angular
        .module('app')
        .component('userLogPage',{
            template: require('./user-log-page.html'),
            controller: userLogPageController
        });

    function userLogPageController(userLogService) {
        var vm = this;
        vm.userLog = '';

        userLogService.getAll()
                .then(function(data) {
                    if(data) {
                        vm.userLog = data;
                    }
                });

    }
})();
