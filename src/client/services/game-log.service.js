(function() {
    angular
        .module('app')  
        .factory('gameLogService', gameLogService);

    function gameLogService($http) {
     
        var api = 'api/gamelogs/';
    
        var service = {    

            getAll: function() {
                return $http.get(api)
                    .then(function(response) {
                        return response.data;
                    })
                    .catch(function(error) {
                        console.log('Error in getting all game logs');
                        console.log(error.status + ': ' + error.statusText);
                    });
            },

            getOne: function(id) {
                ///api/gamelogs/:id/game
                return $http.get(api + id + '/game')
                    .then(function(response) {
                        return response.data;
                    })
                    .catch(function(error) {
                        console.log('Error in finding one game log');
                        console.log(error.status + ': ' + error.statusText);
                    });
            },

            addGameLog: function(body) {
                return $http.post(api, body)
                    .then(function(response) {
                        return response.data;
                    })
                    .catch(function(error) {
                        console.log('Error in adding one game log');
                        console.log(error.status + ': ' + error.statusText);
                    });
            },

            updateGameLog: function(id, body) {
                return $http.put(api + id, body)
                    .then(function(response) {
                        return response.data;
                    })
                    .catch(function(error) {
                        console.log('Error in updating one game log');
                        console.log(error.status + ': ' + error.statusText);
                    });
            },

            deleteGameLog: function(id) {
                return $http.delete(api + id)
                    .then(function(response) {
                        return response.data;
                    })
                    .catch(function(error) {
                        console.log('Error in deleting one game log');
                        console.log(error.status + ': ' + error.statusText);
                    });
            }
        };

        return service;
    }
})();
