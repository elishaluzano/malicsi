(function() {
    angular
        .module('app')
        .factory('teamService', teamService);

    function teamService($http) {

        var api = 'api/teams/';

        var service = {

            getAll: function() {
                return $http.get(api)
                    .then(function(response) {
                        console.log(response);
                        return response.data
                    })
                    .catch(function(err) {
                        console.log('Error in getting all teams: ');
                        console.log(err.status + ': ' + err.statusText);
                    });
            },

            getOne: function(id) {
                return $http.get(api + id)
                    .then(function(response) {
                        console.log(response);
                        return response.data;
                    })
                    .catch(function(err) {
                        console.log('Error in getting one team: ');
                        console.log(err.status + ': ' + err.statusText);
                    });
            },

            create: function (body) {
                return $http.post(api, body)
                    .then(function(response) {
                        return response.data;
                    })
                    .catch(function(err) {
                        console.log('Error in creating a team: ');
                        console.log(err.status + ': ' + err.statusText);
                    });
            },

            update: function(id, body) {
                return $http.put(api + id, body)
                    .then(function(response) {
                        console.log(response);
                        return response.data
                    })
                    .catch(function(err) {
                        console.log('Error in updating a team: ');
                        console.log(err.status + ': ' + err.statusText);
                    });  
            },

            delete: function(id) {
                return $http.delete(api + id)
                    .then(function(response) {
                        console.log(response);
                        return response.data
                    })
                    .catch(function(err) {
                        console.log('Error in deleting a team: ');
                        console.log(err.status + ': ' + err.statusText);
                    });
            },

        }

        return service;
	}

})();
