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

            checkAdminOfInstitution: function(userId, institutionId) {
				return $http.get(api + 'checkAdminOfInstitution/' + userId + '/' + institutionId)
                    .then(function(response) {
						return response.data
					})
					.catch(function(err) {
						console.log("Error in checking of admin of institution!");
						console.log(err.status + ': ' + err.statusText);
					});
			},

			checkAdminOfEvent: function(userId, eventId) {
				return $http.get(api + 'checkAdminOfEvent/' + userId + '/' + eventId)
                    .then(function(response) {
						return response.data
					})
					.catch(function(err) {
						console.log("Error in checking of admin of event!");
						console.log(err.status + ': ' + err.statusText);
					});
			},

			checkAdminOfGame: function(userId, gameId) {
				return $http.get(api + 'checkAdminOfGame/' + userId + '/' + gameId)
                    .then(function(response) {
						return response.data
					})
					.catch(function(err) {
						console.log("Error in checking of admin of game!");
						console.log(err.status + ': ' + err.statusText);
					});
			},

			checkAdminOfTeam: function(userId, teamId) {
				return $http.get(api + 'checkAdminOfTeam/' + userId + '/' + teamId)
                    .then(function(response) {
						return response.data
					})
					.catch(function(err) {
						console.log("Error in checking of admin of team!");
						console.log(err.status + ': ' + err.statusText);
					});
			},

			getInstitutionsByAdmin: function(id) {
				return $http.get(api + 'admins/' + id + '/institutions')
					.then(function(response) {
						return response.data
					})
					.catch(function(err) {
						console.log("Error in getting institutions of admin!");
						console.log(err.status + ': ' + err.statusText);
					});
			},

			getAdmins: function() {
				return $http.get(api + 'admins')
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
			},

			create: function(body) {
				return $http.post(api + 'admins', body)
					.then(function(response) {
						return response.data
					})
					.catch(function(err) {
						console.log("Error in creating an admin!");
						console.log(err.status + ': ' + err.statusText);
					});
			},

			deleteAsAdmin: function(institution_id, user_id) {
				return $http.delete(api + "admins/" + institution_id + "/" + user_id)
					.then(function(response) {
						console.log(data);
						return response.data;
					})
					.catch(function(error) {
						console.log("Error in deleting as admin!");
						console.log(error.status + ": " + + error.statusText);
					});
			}
		};

		return service;
	}
})();
