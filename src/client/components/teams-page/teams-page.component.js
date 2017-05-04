(function() {
    'use strict';

    angular
        .module('app')
        .component('teamsPage', {
            template: require('./teams-page.html'),
            controller: teamsPageController,
            bindings: {
                events: '<',
                teams: '<',
                teamPlaysGame: '<'
            }
        });

    function teamsPageController() {
        var vm = this;
        vm.events2 = [{event_title: "HI"}];

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

                let toDate = Math.floor(new Date().getTime()/1000/60/60/24);
                let startDate = Math.floor(new Date(event.start_date).getTime()/1000/60/60/24);
                let endDate = Math.floor(new Date(event.end_date).getTime()/1000/60/60/24);

                if (toDate >= startDate && toDate <= endDate) {
                    event.status = 'Live';
                }
                else if (toDate < startDate) {
                    event.status = 'Soon';
                }
                else {
                    event.status = 'Done';
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


            var len = vm.events.length;
            if(len%2 != 0)  vm.events2 = vm.events.splice(Math.floor(len/2)+1, len-1);
            else vm.events2 = vm.events.splice(len/2, len);
            console.log(vm.events2);
            console.log(vm.events);



        }




    }
})();
