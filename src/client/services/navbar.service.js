(function() {
	'use strict';

	angular
		.module('app')
		.factory('navbarService', navbarService);

	function navbarService($http) {
		var api = '/api/events/';
		
		var service = {
			search: function() {

			},
		}

		return service;
	}
})();