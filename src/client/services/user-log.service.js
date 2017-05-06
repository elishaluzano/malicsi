(function() {
    'use strict';

    angular
        .module('app')
        .factory('userLogService', userLogService);

    function userLogService($http) {
        var api = '/api/userlogs/'; // tentative

        var service = {
            getAll: function() {
                return $http.get(api) // tentative
                    .then(function(response) {
                        return response.data;
                    })
                    .catch(function(err) {
                        console.log('Error in getting all user logs');
                        console.log(err.status + ': ' + err.statusText);
                    });
            },

            getOne: function() {
                return $http.get(api) // tentative
                    .then(function(response) {
                        return response.data;
                    })
                    .catch(function(err) {
                        console.log('Error in getting one user log');
                        console.log(err.status + ': ' + err.statusText);
                    });
            },

            create: function(body) {
                return $http.post(api, body) // tentative
                    .then(function(response) {
                        return response.data;
                    })
                    .catch(function(err) {
                        console.log('Error in creating a user log');
                        console.log(err.status + ': ' + err.statusText);
                    });
            }
        };

        return service;
    }

})();
