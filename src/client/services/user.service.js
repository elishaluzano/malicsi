(function() {
    angular
        .module('app')  
        .factory('userService', userService);

    function userService($http) {
     
        var api = '/users/';
    
        var service = {    

            getAll: function() {
                return $http.get(api)
                    .then(function(response) {
                        return response.data;
                    })
                    .catch(function(error) {
                        console.log('Error in getting all users');
                        console.log(error.status + ': ' + error.statusText);
                    });
            },

            getOne: function(id) {
                return $http.get(api + id)
                    .then(function(response) {
                        return response.data;
                    })
                    .catch(function(error) {
                        console.log('Error in finding one user');
                        console.log(error.status + ': ' + error.statusText);
                    });
            },

            create: function(body) {
                return $http.post(api, body)
                    .then(function(response) {
                        return response.data;
                    })
                    .catch(function(error) {
                        console.log('Error in creating user');
                        console.log(error.status + ': ' + error.statusText);
                    });
            },
            
            update: function(id, body) {
                return $http.put(api + id, body) 
                    .then(function(response) {
                        return response.data;
                    })
                    .catch(function(error) {
                        console.log('Error in updating user');
                        console.log(error.status + ': ' + error.statusText);
                    });
            },


            delete: function(id) {
                return $http.delete(api + id)
                    .then(function(response) {
                        return response.data;
                    })
                    .catch(function(error) {
                        console.log('Error in deleting user');
                        console.log(error.status + ': ' + error.statusText);
                    });
            }
        };

        return service;
    }
})();
