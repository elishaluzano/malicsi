(function() {
    angular
        .module('app')
        .config(routerConfig);
    
    function routerConfig($stateProvider, $urlRouterProvider) {

        // $stateProvider.state({});
        // $urlRouterProvider.otherwise('/');
        $stateProvider
        	.state({
        		name: 'registrationCard',
        		url: '/',
        		component: 'registrationCard'
        	});

        $urlRouterProvider.otherwise('/');
    }

})();
