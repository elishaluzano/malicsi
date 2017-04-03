(function() {
    'use strict';

    angular
        .module('app')
        .component('teamLandingPage', {
            template: require('./team-landing-page.html'),
            controller: teamLandingPageController,
            bindings: {
                events: '<',
                teams: '<',
                teamPlaysGame: '<'
            }
        });

    function teamLandingPageController() {
        var vm = this;

        vm.filters = {
            Live: true,
            Soon: true,
            Done: true
        };
        
        vm.$onInit = function() {
            var curdate = new Date().getTime();

            for(let team of vm.teams){
                team.win = 0;
                team.lose = 0;
            }

            for(let team of vm.teams){
                for(let tpg of vm.teamPlaysGame){
                    if(tpg.team_id_play === team.team_id){
                        if(tpg.record === "WIN"){
                            team.win ++;
                        }
                        else if(tpg.record === "LOSE"){
                            team.lose ++;
                        }
                    }
                }
            }

            for(let event of vm.events){
                event.teams = [];
                let startDate = new Date(event.start_date).getTime();
                let endDate = new Date(event.end_date).getTime();

                if(startDate < curdate && endDate > curdate){
                    event.status = "Live";
                }
                else if(startDate > curdate){
                    event.status = "Soon";
                }
                else if(endDate < curdate){
                    event.status = "Done";
                }
            }

            for(let team of vm.teams){
                for(let event of vm.events){
                    if(event.event_id === team.event_id_key){
                        event.teams.push(team);
                        continue;
                    }
                }
            }
        }

    }
})();
