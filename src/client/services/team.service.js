(function() {
    angular
        .module('app')
        .factory('teamService', teamService);

    function teamService($http) {

        var api = '/api/teams/';

        var service = {

            getAll: function() {
                return $http.get(api)
                    .then(function(response) {
                        return response.data
                    })
                    .catch(function(err) {
                        console.log('Error in getting all teams: ');
                        console.log(err.status + ': ' + err.statusText);
                    });
            },

            getOne: function(id) {
                return $http.get(api + id)
                    .then(function(response) {
                        return response.data;
                    })
                    .catch(function(err) {
                        console.log('Error in getting one team: ');
                        console.log(err.status + ': ' + err.statusText);
                    });
            },

            getUsers: function(id) {
                return $http.get(api + id + '/users')
                    .then(function(response) {
                        return response.data;
                    })
                    .catch(function(err) {
                        console.log('Error in getting users of a team');
                        console.log(err.status + ': ' + err.statusText);
                    });
            },

            getGames: function(id) {
                return $http.get(api + id + '/plays')
                    .then(function(response) {
                        return response.data;
                    })
                    .catch(function(err) {
                        console.log('Error in getting games of a team');
                        console.log(err.status + ': ' + err.statusText);
                    });
            },

            create: function (body) {
                return $http.post(api, body)
                    .then(function(response) {
                        return response.data;
                    })
                    .catch(function(err) {
                        console.log('Error in creating a team: ');
                        console.log(err.status + ': ' + err.statusText);
                    });
            },

            update: function(id, body) {
                let options = {
                    transformRequest: angular.identity,
                    headers: {
                        'Content-Type': undefined
                    }
                };

                return $http.put(api + id, body, options)
                    .then(function(response) {
                        return response.data
                    })
                    .catch(function(err) {
                        console.log('Error in updating a team: ');
                        console.log(err.status + ': ' + err.statusText);
                    });  
            },

            delete: function(id) {
                return $http.delete(api + id)
                    .then(function(response) {
                        return response.data
                    })
                    .catch(function(err) {
                        console.log('Error in deleting a team: ');
                        console.log(err.status + ': ' + err.statusText);
                    });
            },

            getAllGameInfo: function(id) {
                return $http.get(api + id + '/allgameinfo')
                    .then(function(response) {
                        return response.data
                    })
                    .catch(function(err) {
                        console.log('Error in getting last five games information');
                        console.log(err.status + ': ' + err.statusText);
                    });
            },

            getPlayers: function(id) {
                return $http.get(api + id + '/users')
                    .then(function(response) {
                        return response.data
                    })
                    .catch(function(err) {
                        console.log('Error in getting players of team');
                        console.log(err.status + ': ' + err.statusText);
                    });
            },

            getAllTeamPlaysGame: function() {
                return $http.get(api + 'teamplaysgame')
                    .then(function(response) {
                        return response.data
                    })
                    .catch(function(err) {
                        console.log('Error in getting team plays game');
                        console.log(err.status + ': ' + err.statusText);
                    });
            },

            getOneTeamPlaysGame: function(id) {
                return $http.get(api + id + '/oneteamplaysgame')
                    .then(function(response) {
                        return response.data
                    })
                    .catch(function(err) {
                        console.log('Error in getting one team plays game');
                        console.log(err.status + ': ' + err.statusText);
                    });
            },

            addIsComposedOf: function(body) {
                return $http.post(api + 'composedOf', body)
                    .then(function(response) {
                        return response.data;
                    })
                    .catch(function(err) {
                        console.log('Error in adding team is composed of user!');
                        console.log(err.status + ': ' + err.statusText);
                    });
            },

            deleteIsComposedOf: function(team_id, user_id) {
                return $http.delete(api + 'composedOf/' + team_id + '/' + user_id)
                    .then(function(response) {
                        return response.data;
                    })
                    .catch(function(err) {
                        console.log('Error in deleting user from team!');
                        console.log(err.status + ': ' + err.statusText);
                    });
            },

            getIsUserOfTeam: function(team_id, user_id) {
                return $http.get(api + user_id + '/userofteam/' + team_id)
                    .then(function(response) {
                        return response.data;
                    })
                    .catch(function(err) {
                        console.log('Error checking if team is composed of user!');
                        console.log(err.status + ': ' + err.statusText);
                    });
            },

        }

        return service;
	}

})();
