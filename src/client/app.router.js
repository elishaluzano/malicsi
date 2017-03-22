(function() {
    angular
        .module('app')
        .config(routerConfig);
    
    function routerConfig($stateProvider, $urlRouterProvider) {
        
        // $stateProvider.state({});
        // $urlRouterProvider.otherwise('/');
        
        $stateProvider
            .state({
                name: 'userLogPage',
                url: '/log',
                component: 'userLogPage'
            });

        $urlRouterProvider.otherwise('/');
    }

})();
