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
                    events: function(eventService) {
                        eventService.getOne($transition$.params().eventId);

                    }
                }
            })
            .state({
                name: 'teamPage',
                url: '/team-page/{teamId}',
                component: 'teamPage',
                resolve: {
                    allGameInfo: function(teamService, $transition$) {
                        return teamService.getAllGameInfo($transition$.params().teamId);
                    },
                    players: function(teamService, $transition$) {
                        return teamService.getPlayers($transition$.params().teamId);
                    },
                    allGames: function(teamService, $transition$) {
                        return teamService.getGames($transition$.params().teamId);
                    },
                    currentTeam: function(teamService, $transition$) {
                        return teamService.getOne($transition$.params().teamId);
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
