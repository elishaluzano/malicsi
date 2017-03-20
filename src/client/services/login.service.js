(function() {
    'use strict';

    angular
        .module('app')
        .factory('loginService', loginService);

    function loginService($http) {
        // currently logged in user
        var user = null;

        var service = {
            getUser: function() {
                return user;
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
