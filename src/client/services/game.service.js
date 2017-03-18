(function() {
    angular
        .module('app')  
        .factory('gameService', gameService);

    function gameService($http) {
     
        var api = '/games/';
    
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
                return $http.delele(api + id)
                    .then(function(response) {
                        return response.data;
                    })
                    .catch(function(error) {
                        console.log('Error in deleting game');
                        console.log(error.status + ': ' + error.statusText);
                    });
            }
        };

        return service;
    }
})();
