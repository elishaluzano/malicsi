(function() {
    'use strict';
    angular
        .module('app')
        .component('playerStatsCard',{
            template: require('./player-stats-card.html'),
            controller: playerStatsCardController,
        });

    function playerStatsCardController() {
        var vm = this;

        vm.games = [
            {
                event: 'PalICSihan 2017',
                team: 'Red Team',
                opponent: 'Green Team',
                sport: 'Basketball',
                round: 'X',
                type: 'Male',
                status: 'WIN'
            },
            {
                event: 'PalICSihan 2017',
                team: 'Red Team',
                opponent: 'Green Team',
                sport: 'Basketball',
                round: 'X',
                type: 'Male',
                status: 'WIN'
            },
            {
                event: 'PalICSihan 2017',
                team: 'Red Team',
                opponent: 'Green Team',
                sport: 'Basketball',
                round: 'X',
                type: 'Male',
                status: 'WIN'
            }
        ]

        vm.$onInit = function() {
            
        }

    }
})();
