(function() {
    'use strict';
    angular
        .module('app')
        .component('footerCard',{
            template: require('./footer-card.html'),
            controller: registrationCardController,
        });

    function footerCardController() {
        var vm = this;

        

    }
})();
