(function() {
	angular
		.module('app')
		.factory('adminService', adminService);

	function adminService($http) {
		var api = '/api/';

		var service = {
			
			checkAdmin: function(id) {
				return $http.get(api + 'checkAdmin/' + id)
					.then(function(response) {
						return response.data
					})
					.catch(function(err) {
						console.log("Error in checking admin!");
						console.log(err.status + ': ' + err.statusText);
					});
			},

			getAdmins: function() {
				return $http.get(api + '/admins')
					.then(function(response) {
						return response.data
					})
					.catch(function(err) {
						console.log("Error in getting all admins!");
						console.log(err.status + ': ' + err.statusText);
					});
			},

			getAdmin: function(id) {
				return $http.get(api + "admins/" + id)
					.then(function(response) {
						return response.data
					})
					.catch(function(err) {
						console.log("Error in getting admin!");
						console.log(err.status + ': ' + err.statusText);
					});
			}

			create: function(body) {
				return $http.post(api, body)
					.then(function(response) {
						return response.data
					})
					.catch(function(err) {
						console.log("Error in creating an admin!");
						console.log(err.status + ': ' + err.statusText);
					});
			}
		}

		return service;
	}
})();
