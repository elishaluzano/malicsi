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
                return $http.post('/api/login')
                    .then(function(response) {
                        if (response.data) {
                            user = response.data;
                        }
                        return response.data;
                    })
                    .catch(function(err) {
                        console.log('Error in loggin in');
                        console.log(err.status + ': ' + err.statusText);
                    });
            },

            logout: function() {
                return $http.post('/api/logout')
                    .then(function(response) {
                        user = null;
                        return response.data;
                    })
                    .catch(function(err) {
                        console.log('Error in logging out');
                        console.log(err.status + ': ' + err.statusText);
                    });
            },

            session: function() {
                return $http.post('/api/sessions')
                    .then(function(response) {
                        user = response.data;
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
