(function() {
    'use strict';

    angular
        .module('app')
        .factory('sessionService', sessionService);

    function sessionService($http) {
        // currently logged in user
        var currentUser = null;

        var service = {
            user: function() {
                return currentUser;
            },

            login: function(username, password) {
                let credentials = {
                    username: username,
                    password: password
                };

                return $http.post('/api/login', credentials)
                    .then(function(response) {
                        if (response.data) {
                            currentUser = response.data;
                        }
                        return response.data;
                    })
                    .catch(function(err) {
                        console.log('Error in loggin in');
                        console.log(err);
                        console.log(err.status + ': ' + err.statusText);
                    });
            },

            logout: function() {
                return $http.post('/api/logout')
                    .then(function(response) {
                        currentUser = null;
                        return currentUser;
                    })
                    .catch(function(err) {
                        console.log('Error in logging out');
                        console.log(err.status + ': ' + err.statusText);
                    });
            },

            session: function(body) {
                let values = body? body : {};
                return $http.post('/api/sessions', values)
                    .then(function(response) {
                        currentUser = response.data;
                        return response.data;
                    })
                    .catch(function(err) {
                        console.log('Error in checking sessions');
                        console.log(err.status + ': ' + err.statusText);
                    });
            }
        };
        
        return service;
    }

})();
