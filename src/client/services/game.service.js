(function() {
    angular
        .module('app')  
        .factory('gameService', gameService);

    function gameService($http) {
     
        var api = 'api/games/';
    
        var service = {    

            getAll: function() {
                return $http.get(api)
                    .then(function(response) {
                        return response.data;
                    })
                    .catch(function(error) {
                        console.log('Error in getting all games');
                        console.log(error.status + ': ' + error.statusText);
                    });
            },

            getOne: function(id) {
                return $http.get(api + id)
                    .then(function(response) {
                        return response.data;
                    })
                    .catch(function(error) {
                        console.log('Error in finding one game');
                        console.log(error.status + ': ' + error.statusText);
                    });
            },

            getTeamsInGame: function(id) {
                return $http.get(api + id + '/teams')
                    .then(function(response) {
                        return response.data;
                    })
                    .catch(function(error) {
                        console.log('Error in getting teams in game');
                        console.log(error.status + ': ' + error.statusText);
                    });
            },
            
            create: function(body) {
                return $http.post(api, body)
                    .then(function(response) {
                        return response.data;
                    })
                    .catch(function(error) {
                        console.log('Error in creating game');
                        console.log(error.status + ': ' + error.statusText);
                    });
            },
            
            update: function(id, body) {
                return $http.put(api + id, body) 
                    .then(function(response) {
                        return response.data;
                    })
                    .catch(function(error) {
                        console.log('Error in updating game');
                        console.log(error.status + ': ' + error.statusText);
                    });
            },


            delete: function(id) {
                return $http.delete(api + id)
                    .then(function(response) {
                        return response.data;
                    })
                    .catch(function(error) {
                        console.log('Error in deleting game');
                        console.log(error.status + ': ' + error.statusText);
                    });
            },


            getAllGamesInformation: function() {
                return $http.get(api + 3 + '/gameinfo')
                    .then(function(response) {
                        return response.data;
                    })
                    .catch(function(error) {
                        console.log('Error in getting game information');
                        console.log(error.status + ': ' + error.statusText);
                    });
            },


            endGame: function(id) {
                return $http.put(api + id + '/endgame')
                    .then(function(response) {
                        return response.data;
                    })
                    .catch(function(error) {
                        console.log('Error in ending game');
                        console.log(error.status + ': ' + error.statusText);
                    });
            },


            openGame: function(id) {
                return $http.put(api + id + '/opengame')
                    .then(function(response) {
                        return response.data;
                    })
                    .catch(function(error) {
                        console.log('Error in re-opening game');
                        console.log(error.status + ': ' + error.statusText);
                    });
            }
        };

        return service;
    }
})();
