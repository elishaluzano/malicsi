(function() {
    angular
<<<<<<< HEAD
        .module('app')  
        .factory('userService', userService);

    function userService($http) {
     
        var api = '/api/users/';
    
        var service = {    
=======
        .module('app')
        .factory('userService', userService);

    function userService($http) {

        var api = '/api/users/';

        var service = {
>>>>>>> 1407cf627d758a71081a1559215ee3f50f1b2b16

            getAll: function() {
                return $http.get(api)
                    .then(function(response) {
                        return response.data;
                    })
<<<<<<< HEAD
                    .catch(function(error) {
                        console.log('Error in getting all users');
                        console.log(error.status + ': ' + error.statusText);
=======
                    .catch(function(err) {
                        console.log('Error in getting all users!');
                        console.log(err.status + ': ' + err.statusText);
>>>>>>> 1407cf627d758a71081a1559215ee3f50f1b2b16
                    });
            },

            getOne: function(id) {
                return $http.get(api + id)
                    .then(function(response) {
                        return response.data;
                    })
<<<<<<< HEAD
                    .catch(function(error) {
                        console.log('Error in finding one user');
                        console.log(error.status + ': ' + error.statusText);
=======
                    .catch(function(err) {
                        console.log('Error in getting one user!');
                        console.log(err.status + ': ' + err.statusText);
>>>>>>> 1407cf627d758a71081a1559215ee3f50f1b2b16
                    });
            },

            create: function(body) {
                return $http.post(api, body)
                    .then(function(response) {
                        return response.data;
                    })
<<<<<<< HEAD
                    .catch(function(error) {
                        console.log(body);
                        console.log('Error in creating user');
                        console.log(error.status + ': ' + error.statusText);
                    });
            },
            
            update: function(id, body) {
                return $http.put(api + id, body) 
                    .then(function(response) {
                        return response.data;
                    })
                    .catch(function(error) {
                        console.log('Error in updating user');
                        console.log(error.status + ': ' + error.statusText);
                    });
            },


=======
                    .catch(function(err) {
                        console.log('Error in creating user!');
                        console.log(err.status + ': ' + err.statusText);
                    });
            },

            update: function(id, body) {
                return $http.put(api + id, body)
                    .then(function(response) {
                        return response.data;
                    })
                    .catch(function(err) {
                        console.log('Error in updating user!');
                        console.log(err.status + ': ' + err.statusText);
                    });
            },

>>>>>>> 1407cf627d758a71081a1559215ee3f50f1b2b16
            delete: function(id) {
                return $http.delete(api + id)
                    .then(function(response) {
                        return response.data;
                    })
<<<<<<< HEAD
                    .catch(function(error) {
                        console.log('Error in deleting user');
                        console.log(error.status + ': ' + error.statusText);
                    });
            }
        };

        return service;
    }
=======
                    .catch(function(err) {
                        console.log('Error in deleting user!');
                        console.log(err.status + ': ' + err.statusText);
                    });
            }

        };

        return service;

    }

>>>>>>> 1407cf627d758a71081a1559215ee3f50f1b2b16
})();
