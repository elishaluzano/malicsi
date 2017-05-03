(function() {
    'use strict';
    angular
        .module('app')
        .component('playerStatsCard',{
            template: require('./player-stats-card.html'),
            controller: playerStatsCardController,
            bindings: {
                user: '<'
            }
        });

    function playerStatsCardController(teamService) {
        var vm = this;
        vm.objects = [];
    
        vm.$onInit = function() {
            teamService.getTeamId(vm.user.user_id)
                .then(function(ids) {
                    for(let id of ids) {
                        teamService.getTeamStats(id.team_player_id)
                            .then(function(stats) {
                                for(let stat of stats) {
                                    vm.objects.push(stat);
                                }
                            }).catch(function(err) {
                                console.log(err);
                            })
                    }
                }).catch(function(err) {
                    console.log(err);
                })
        }

    }
})();
