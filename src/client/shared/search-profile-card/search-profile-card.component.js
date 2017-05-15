(function () {
    'use strict';

    angular
        .module('app')
        .component('searchProfileCard', {
            template: require('./search-profile-card.html'),
            controller: searchProfileCardController,
            bindings: {
                user: '<'
            }
        });

    function searchProfileCardController(userAffiliationService) {
        var vm = this;

        vm.affiliations = [];

        vm.$onInit = function(){
            userAffiliationService.getAllById(vm.user.user_id)
                .then(function(affiliations) {
                    vm.affiliations = affiliations;
                });
                
        }
    }
})();
