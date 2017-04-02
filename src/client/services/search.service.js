(function() {
    'use strict';

    angular
        .module('app')
        .factory('searchService', searchService);

    function searchService($http) {

        var service = {
            users: function(query) {
                return $http.get('/api/users/search/' + query)
                    .then(function(response) {
                        return response.data;
                    })
                    .catch(function(error) {
                        console.log('Error in searching users');
                        console.log(error.status + ': ' + error.statusText);
                    });
            },

            institutions: function(query) {
                return $http.get('/api/institutions/search/' + query)
                    .then(function(response) {
                        return response.data;
                    })
                    .catch(function(error) {
                        console.log('Error in searching institutions');
                        console.log(error.status + ': ' + error.statusText);
                    });
            },

            events: function(query) {
                return $http.get('/api/events/search/' + query)
                    .then(function(response) {
                        return response.data;
                    })
                    .catch(function(error) {
                        console.log('Error in searching events');
                        console.log(error.status + ': ' + error.statusText);
                    });
            },

            sports: function(query) {
                return $http.get('/api/sports/search/' + query)
                    .then(function(response) {
                        return response.data;
                    })
                    .catch(function(error) {
                        console.log('Error in searching sports');
                        console.log(error.status + ': ' + error.statusText);
                    });
            },

            teams: function(query) {
                return $http.get('/api/teams/search/' + query)
                    .then(function(response) {
                        return response.data;
                    })
                    .catch(function(error) {
                        console.log('Error in searching teams');
                        console.log(error.status + ': ' + error.statusText);
                    });
            },

            venues: function(query) {
                return $http.get('/api/venues/search/' + query)
                    .then(function(response) {
                        return response.data;
                    })
                    .catch(function(error) {
                        console.log('Error in searching venues');
                        console.log(error.status + ': ' + error.statusText);
                    });
            },

        };


        return service;

    }

})();
