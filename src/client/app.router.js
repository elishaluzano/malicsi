(function() {
    angular
        .module('app')
        .config(routerConfig);
    
    function routerConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state({
                name: 'adminPage',
                url: '/admin',
                component: 'adminPage',
                resolve: {
                    user: function(sessionService) {
                        return sessionService.session();
                    },
                    name: function($state) {
                        return $state.current.name;
                    },
                    params: function($state) {
                        return $state.params;
                    }
                },
                // onEnter: function(user, name, params, $state) {
                //     user.admin = true;
                //     console.log(user);
                //     console.log(user.admin);
                //     if (!user.admin) {
                //         Materialize.toast('Unauthorized access!', 2000, 'red');
                //         name = (!name)? 'landingPage' : name;
                //         $state.go(name, params);
                //     }
                // }
            })
            .state({
                name: 'userLogPage',
                url: '/log',
                component: 'userLogPage'
            })
            .state({
                name: 'userPage',
                url: '/user/{userId}',
                component: 'userPage',
                resolve: {
                    user: function(userService, $transition$){
                        return userService.getOne($transition$.params().userId);
                    }
                }
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
                    games: function(sportService){
                        return sportService.getAll();
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
            })
            .state({
                name: 'eventPage',
                url: '/event/{eventId}',
                component: 'eventPage',
                resolve: {
                    event: function(eventService, $transition$) {
                        return eventService.getOne($transition$.params().eventId);
                    }
                }
            })
            .state({
                name: 'searchAllPage',
                url: '/search-all/{query}',
                component: 'searchAllPage',
                resolve: {
                    users: function(searchService, $transition$) {
                        return searchService.users($transition$.params().query);
                    },
                    institutions: function(searchService, $transition$) {
                        return searchService.institutions($transition$.params().query);
                    },
                    events: function(searchService, $transition$) {
                        return searchService.events($transition$.params().query);
                    },
                    teams: function(searchService, $transition$) {
                        return searchService.teams($transition$.params().query);
                    }
                }
            });

        $urlRouterProvider.otherwise('/');
    }

})();
