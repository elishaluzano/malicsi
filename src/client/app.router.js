(function() {
    angular
        .module('app')
        .config(routerConfig);
    
    function routerConfig($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state({
                name: 'userPage',
                url: '/user/{userId}',
                component: 'userPage'
            });

        $urlRouterProvider.otherwise('/');

    }

})();
