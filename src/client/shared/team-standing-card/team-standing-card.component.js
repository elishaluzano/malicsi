(function() {
    'use strict';

    angular
        .module('app')
        .component('teamStandingCard', {
            template: require('./team-standing-card.html'),
            controller: teamStandingCardController
        });
    
    function teamStandingCardController() {
        var vm = this;

        
    }
})();
