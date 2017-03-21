(function() {
  angular
    .module('app')
    .factory('venueService', venueService);

  function venueService($http) {
    var api = '/api/venues/';



    var service = {
      getOne: function(id) {
        return $http.get(api + id)
          .then(function(response) {
            return response.data;
          })
          .catch(function(err) {
            console.log('Failed in getting one venue!');
            console.log(err.status + ': ' + err.statusText);
          });
      },

      getAll: function() {
        return $http.get(api)
          .then(function(response) {
            return response.data;
          })
          .catch(function(err) {
            console.log('Failed to get venues!');
            console.log(err.status + ': ' + err.statusText);
          })
      },

      update: function(id, body) {
        return $http.put(api + id, body)
          .then(function(response) {
            return response.data;
          })
          .catch(function(er) {
            console.log('Failed to update venue!');
            console.log(err.status + ': ' + err.statusText);
          })
      },

      create: function(body) {
        return $http.post(api, body)
          .then(function(response) {
            return response.data;
          })
          .catch(function(err) {
            console.log('Failed to create venue');
            console.log(err.status + ': ' + err.statusText);
          })
      },


      delete: function(id) {
        return $http.delete(api + id)
          .then(function(response) {
            return response.data;
          })
          .catch(function(err) {
            console.log('Failed to delete venue!');
            console.log(err.status + ': ' + err.statusText);
          })
      }

    };

    return service
    }

})();
