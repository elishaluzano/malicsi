(function() {
    'use strict';
    angular
        .module('app')
        .component('liveGamePage',{
            template: require('./live-game-page.html'),
            controller: liveGamePageController,
            bindings: {
                game: '<',
                teamsInGame: '<',
                scores: '<'
            }
        });

    function liveGamePageController(gameService) {
        var vm = this;

        

        vm.$onInit = function(){
            vm.scores = [
                {
                    team_id: 1,
                    score: 2,
                    time: '2017-04-04 23:51:23'
                },
                {
                    team_id: 1,
                    score: 2,
                    time: '2017-04-04 23:52:23'
                },
                {
                    team_id: 1,
                    score: 2,
                    time: '2017-04-04 23:53:23'
                },
                {
                    team_id: 2,
                    score: 2,
                    time: '2017-04-04 23:55:23'
                },
                {
                    team_id: 2,
                    score: 2,
                    time: '2017-04-04 23:56:23'
                },
                {
                    team_id: 2,
                    score: 2,
                    time: '2017-04-04 23:57:23'
                },
                {
                    team_id: 3,
                    score: 3,
                    time: '2017-04-04 23:59:23'
                },
            ]
            console.log(vm.game);
            console.log(vm.teamsInGame);
            $('ul.tabs').tabs();
            console.log(vm.scores);

            var ids = [];
            var vals = {};

            var it=0;

            for(let score of vm.scores){
                if(ids.indexOf(score.team_id) < 0){
                    ids.push(score.team_id);
                    vals[score.team_id] = it;
                    it++;
                }
            }

            for(let score of vm.scores){
                score.teamVal = vals[score.team_id];
            }
        }
        
    }
})();
