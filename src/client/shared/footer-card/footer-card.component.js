(function() {
    'use strict';
    angular
        .module('app')
        .component('footerCard',{
            template: require('./footer-card.html'),
            controller: footerCardController 
        });

    function footerCardController($state) {
        var vm = this;

        vm.toTop = function() {
            console.log('scrolling');
            $('html, body').animate({ scrollTop: 0 }, 500);
        }
    }
  
})();
