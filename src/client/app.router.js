(function() {
    angular
        .module('app')
        .config(routerConfig);
    
    function routerConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state({
                name: 'userLogPage',
                url: '/log',
                component: 'userLogPage'
            })
            .state({
                name: 'userPage',
                url: '/user/{userId}',
                component: 'userPage'
            })
            .state({
                name: 'eventsPage',
                url: '/events',
                component: 'eventsPage'
            })
            .state({
                name: 'registrationPage',
                url: '/register',
                component: 'registrationCard'
            });

        $urlRouterProvider.otherwise('/');
    }

})();
