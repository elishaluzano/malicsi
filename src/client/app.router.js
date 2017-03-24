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
                name: 'gameHistoryPage',
                url: '/gameHistory',
                component: 'gameHistoryPage'
            });

        $urlRouterProvider.otherwise('/');
    }

})();
