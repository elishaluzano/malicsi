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
            })
            .state({
                name: 'sportCard',
                url: '/sportcard/{eventId}',
                component: 'sportCard',
                resolve: {
                    information: function(eventService, $transition$) {
                        return eventService.getGeneralInformation($transition$.params().eventId);
                    }
                }
            });

        $urlRouterProvider.otherwise('/');
    }

})();
