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
                name: 'registrationPage',
                url: '/register',
                component: 'registrationCard'
            })
            .state({
                name: 'schedulePage',
                url: '/schedule',
                component: 'schedulePage',
                resolve: {
                    games: function(gameService){
                        return gameService.getAll();
                    }
                
                }
            })
            .state({
                name: 'landingPage',
                url: '/',
                component: 'landingPage',
                resolve: {
                    events: function(eventService) {
                        return eventService.getAll();
                    } 
                }
            })
            .state({
                name: 'eventsPage',
                url: '/events',
                component: 'eventsPage',
                resolve: {
                    events: function(eventService) {
                        return eventService.getAll();

                    }
                }
            });

        $urlRouterProvider.otherwise('/');
    }

})();
