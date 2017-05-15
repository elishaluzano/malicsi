(function() {
    angular
        .module('app')
        .factory('userService', userService);

    function userService($http) {

        var api = '/api/users/';

        var service = {

            getAll: function() {
                return $http.get(api)
                    .then(function(response) {
                        return response.data;
                    })
                    .catch(function(err) {
                        console.log('Error in getting all users!');
                        console.log(err.status + ': ' + err.statusText);
                    });
            },

            getOne: function(id) {
                return $http.get(api + id)
                    .then(function(response) {
                        return response.data;
                    })
                    .catch(function(err) {
                        console.log('Error in getting one user!');
                        console.log(err.status + ': ' + err.statusText);
                    });
            },

            getAdmins: function() {
                return $http.get('/api/admins')
                    .then(function(response) {
                        return response.data;
                    })
                    .catch(function(err) {
                        console.log('Error in getting all admins!');
                        console.log(err.status + ': ' + err.statusText);
                    });
            },

            create: function(body) {
                return $http.post(api, body)
                    .then(function(response) {
                        return response.data;
                    })
                    .catch(function(err) {
                        console.log('Error in creating user!');
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
                        return response.data;
                    })
                    .catch(function(err) {
                        console.log('Error in updating user!');
                        console.log(err.status + ': ' + err.statusText);
                    });
            },

            delete: function(id) {
                return $http.delete(api + id)
                    .then(function(response) {
                        return response.data;
                    })
                    .catch(function(err) {
                        console.log('Error in deleting user!');
                        console.log(err.status + ': ' + err.statusText);
                    });
            }

        };

        return service;

    }

})();
