(function() {
    'use strict';

    angular
        .module('app')
        .component('searchEventPage', {
            template: require('./search-event-page.html'),
            controller: searchEventPageController,
            binding: {
                events: "<"
            }

        });

    function searchEventPageController() {
        var vm = this;
        

    };

})();
