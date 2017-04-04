(function() {
    'use strict';
    
    angular
        .module('app')
        .component('searchInstitutionPage', {
            template: require('./search-institution-page.html'),
            controller: searchInstitutionPageController,
            bindings: {
                institutions: '<',
                allEvents: '<'
            }
        });

    function searchInstitutionPageController() {
        var vm = this;
        vm.eventSponsored = 'all';

        vm.$onInit = function() {
            console.log(vm.institutions);
            console.log(vm.allEvents);
        }

    }

})();   
