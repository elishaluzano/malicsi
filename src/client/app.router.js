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
                    },
                    componentName: function($state) {
                        return $state.current.name;
                    },
                    params: function($state) {
                        console.log($state.params);
                        return $state.params;
                    }
                },
                onEnter: function(user, componentName, params, $state) {
                    if (!user) {
                        Materialize.toast('User does not exist', 3000, 'red');
                        if (!componentName) {
                            componentName = 'landingPage';
                        }
                        $state.go(componentName, params);
                    }
                }
            })
            .state({
                name: 'sponsorPage',
                url: '/sponsor/{sponsorId}',
                component: 'sponsorPage',
                resolve: {
                    institution: function(institutionService, $transition$) {
                        return institutionService.getOne($transition$.params().sponsorId);
                    },
                    
                    componentName: function($state) {
                        return $state.current.name;
                    },
                    params: function($state) {
                        return $state.params;
                    }
                },
                onEnter: function(institution, componentName, params, $state) {
                    if (!institution) {
                        Materialize.toast('Institution does not exist', 3000, 'red');
                        if (!componentName) {
                            componentName = 'landingPage';
                        }
                        $state.go(componentName, params);
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
                    sports: function(sportService){
                        return sportService.getAll();
                    },
                    allGamesInformation: function(gameService){
                        return gameService.getAllGamesInformation();
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
                    },
                    componentName: function($state) {
                        return $state.current.name;
                    },
                    params: function($state) {
                        return $state.params;
                    }
                },
                onEnter: function(event, componentName, params, $state) {
                    if (!event) {
                        Materialize.toast('Event does not exist', 3000, 'red');
                        if (!componentName) {
                            componentName = 'landingPage';
                        }
                        $state.go(componentName, params);
                    }
                }
            })
            .state({
                name: 'teamPage',
                url: '/team/{teamId}',
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
                    },
                    componentName: function($state) {
                        return $state.current.name;
                    },
                    params: function($state) {
                        console.log($state);
                        return $state.params;
                    },
                    allTeams: function(teamService) {
                        return teamService.getAll();
                    },
                    teamPlaysGame: function(teamService, $transition$) {
                        return teamService.getOneTeamPlaysGame($transition$.params().teamId);
                    }
                },
                onEnter: function(currentTeam, componentName, params, $state) {
                    if (!currentTeam) {
                        Materialize.toast('Team does not exist', 3000, 'red');
                        if (!componentName) {
                            componentName = 'landingPage';
                        }
                        $state.go(componentName, params);
                    }
                }
            })
            .state({
                name: 'teamLandingPage',
                url: '/teams',
                component: 'teamLandingPage',
                resolve: {
                    events: function(eventService, $transition$) {
                        return eventService.getAll();
                    },
                    teams: function(teamService, $transition$) {
                        return teamService.getAll();
                    },
                    teamPlaysGame: function(teamService, $transition$) {
                        return teamService.getAllTeamPlaysGame();
                    },
                }
            })
            .state({
                name: 'doneEventsPage',
                url: '/done-events/{eventId}',
                component: 'doneEventsPage',
                bindings: {
                    event: 'event'            
                },
                resolve: {
                    event: function($stateParams, eventService) {
                        return eventService.getDoneEventInfo($stateParams.eventId);
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
            })
            .state({
                name: 'sponsorsPage',
                url: '/sponsors',
                component: 'sponsorsPage',
                resolve: {
                    sponsors: function(institutionService) {
                        return institutionService.getAll();
                    }
                }
            });

        $urlRouterProvider.otherwise('/')

    }

})();
