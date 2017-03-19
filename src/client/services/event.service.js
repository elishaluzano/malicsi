(function() {
    'use strict';

    angular
        .module('app')
        .factory('eventService', eventService);

    function eventService($http) {
        var api = '';

        var service = {		
            getAll: function() {
                return $http.get(api)		
                    .then(function(response) {	
                        return response.data;
                    })
                    .catch(function(err) {
                        console.log('Error in getting all events.');
                        console.log(err.status + ': ' + err.statusText);
                    });
            },

            getOne: function(id) {
                return $http.get(api + id)		
                    .then(function(response) {	
                        return response.data;
                    })
                    .catch(function(err) {
                        console.log('Error in getting one event.');
                        console.log(err.status + ': ' + err.statusText);
                    });
            },

            create: function(body) {
                return $http.post(api, body)		
                    .then(function(response) {	
                        return response.data;
                    })
                    .catch(function(err) {
                        console.log('Error in getting creating event.');
                        console.log(err.status + ': ' + err.statusText);
                });
            },

            update: function(id, body) {
                return $http.put(api + id, body)		
                    .then(function(response) {	
                        return response.data;
                    })
                    .catch(function(err) {
                        console.log('Error in getting updating event.');
                        console.log(err.status + ': ' + err.statusText);
                    });
            },

            delete: function(id) {
                return $http.delete(api + id)		
                    .then(function(response) {	
                        return response.data;
                    })
                    .catch(function(err) {
                        console.log('Error in getting deleting an event!');
                        console.log(err.status + ': ' + err.statusText);
                    });
            }
        };

        return service;
    };
})();
