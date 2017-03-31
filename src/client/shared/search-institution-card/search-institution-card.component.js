(function() {
    'use strict';

    angular
        .module('app')
        .component('searchInstitutionCard', {
            template: require('./search-institution-card.html'),
            controller: searchInstitutionCardController,
            bindings: {
                institution: '<'
            }
        });

    function searchInstitutionCardController(institutionService) {
        var vm = this;
        
    };

})();
