(function () {
	'use strict'

	angular
		.module('app');
		.component('eventCard', {
			template: require('./event-card.html'),
			controller: eventCardController,
			bindings: {
				event: '<'
			}
		});

	function eventCardController(){
		var vm = this;
    }

})();
