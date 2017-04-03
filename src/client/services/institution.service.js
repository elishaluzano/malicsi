(function() {
    angular
        .module('app')  
        .factory('institutionService', institutionService);

    function institutionService($http) {
     
        var api = '/api/institutions/';
    
        var service = {    

            getAll: function() {
                return $http.get(api)
                    .then(function(response) {
                        return response.data;
                    })
                    .catch(function(error) {
                        console.log('Error in getting all institutions');
                        console.log(error.status + ': ' + error.statusText);
                    });
            },

            getOne: function(id) {
                return $http.get(api + id)
                    .then(function(response) {
                        return response.data;
                    })
                    .catch(function(error) {
                        console.log('Error in finding one institution');
                        console.log(error.status + ': ' + error.statusText);
                    });
            },

            getEvents: function(id) {
                return $http.get(api + id + '/events')
                    .then(function(response) {
                        return response.data;
                    })
                    .catch(function(error) {
                        console.log('Error in finding events of an institution');
                        console.log(error.status + ': ' + error.statusText);
                    });
            },

            create: function(body) {
                return $http.post(api, body)
                    .then(function(response) {
                        return response.data;
                    })
                    .catch(function(error) {
                        console.log('Error in creating institution');
                        console.log(error.status + ': ' + error.statusText);
                    });
            },
            
            update: function(id, body) {
                return $http.put(api + id, body) 
                    .then(function(response) {
                        return response.data;
                    })
                    .catch(function(error) {
                        console.log('Error in updating institution');
                        console.log(error.status + ': ' + error.statusText);
                    });
            },


            delete: function(id) {
                return $http.delete(api + id)
                    .then(function(response) {
                        return response.data;
                    })
                    .catch(function(error) {
                        console.log('Error in deleting institution');
                        console.log(error.status + ': ' + error.statusText);
                    });
            }
        };

        return service;
    }
})();
