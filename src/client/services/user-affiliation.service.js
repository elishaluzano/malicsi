(function() {
    'use strict';

    angular
        .module('app')
        .factory('userAffiliationService', userAffiliationService);

    function userAffiliationService($http) {

        var api = '/api/useraffiliations/';

        var service = {

            getAll: function() {
                return $http.get(api)
                    .then(function(response) {
                        return response.data;
                    })
                    .catch(function(err) {
                        console.log('Error in getting all user affiliations!');
                        console.log(err.status + ': ' + err.statusText);
                    });
            },

            getAllById: function(id) {
                console.log(id);
                return $http.get(api + id)
                    .then(function(response) {
                        console.log(response.data);
                        return response.data;
                    })
                    .catch(function(err) {
                        console.log('Error in getting one user affiliation!');
                        console.log(err.status + ': ' + err.statusText);
                    });
            },

            create: function(body) {
                return $http.post(api, body)
                    .then(function(response) {
                        return response.data;
                    })
                    .catch(function(err) {
                        console.log('Error in creating user affiliation!');
                        console.log(err.status + ': ' + err.statusText);
                    });
            },

            update: function(id, body) {
                return $http.put(api + id, body)
                    .then(function(response) {
                        return response.data;
                    })
                    .catch(function(err) {
                        console.log('Error in updating user affiliation!');
                        console.log(err.status + ': ' + err.statusText);
                    });
            },

            delete: function(id) {
                return $http.delete(api + id)
                    .then(function(response) {
                        return response.data;
                    })
                    .catch(function(err) {
                        console.log('Error in deleting user affiliation!');
                        console.log(err.status + ': ' + err.statusText);
                    });
            }

        };

        return service;

    }

})();
