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
                scores: '<',
                events: '<'
            }
        });

    function liveGamePageController(gameService, gameLogService, sessionService, adminService) {
        var vm = this;
        vm.idToBeChanged = '';
        vm.teamToBeUpdated = '';
        vm.teamToBeEdited = '';
        vm.currentUser = '';
        vm.institutionId = '';
        vm.score = '';
        vm.idToBeChanged  = '';
        vm.scoreUpdate = '';
        vm.isAdmin = false;
        vm.scoreToBeChanged = '';
        var ids = [];
        var vals = {};
        

        vm.$onInit = function(){
            $('.modal').modal();
            $('select').material_select();
            console.log(vm.game);
            console.log(vm.teamsInGame);
            $('ul.tabs').tabs();
            console.log(vm.scores);



            vm.currentUser = sessionService.user();

            for(let event of vm.events){
                if(event.event_id == vm.game.event_id){
                    vm.institutionId = event.institution_id_key;
                }
            }

            if(vm.currentUser){
                adminService.checkAdmin(vm.currentUser.user_id)
                    .then(function(data){
                        if(data){
                            for(let x of data){
                                if(x.institution_no == vm.institutionId){
                                    vm.isAdmin = true;
                                    break;
                                }
                            }
                        }
                    })
                    .catch(function(e){
                        console.log(e);
                    })
            }

            var it=0;

            for(let team of vm.teamsInGame){
                if(ids.indexOf(team.team_id) < 0){
                    ids.push(team.team_id);
                    vals[team.team_id] = it;
                    it++
                }
            }

            for(let score of vm.scores){
                score.teamVal = vals[score.team_id]
            }

            console.log(vm.scores);
        }

        vm.deleteLog = function(id){
            for(var i=0; i<vm.scores.length; i++){
                if(vm.scores[i].gameUpdateLog_id == id){
                    vm.scores.splice(i, 1);
                    break;
                }
            }

            console.log(vm.scores);

            gameLogService.deleteGameLog(id)
                .then(function(data){
                    Materialize.toast('Successfully deleted game log!', 2000, 'red');
                })
                .catch(function(e){
                    Materialize.toast('Unsuccessfully deleted game log!', 2000, 'red');
                })
        }

        vm.getId = function(id, score){
            vm.idToBeChanged = id;
            vm.scoreToBeChanged = score;
        }

        vm.reset = function(){
            vm.teamToBeUpdated = null;
            vm.score = '';
            vm.idToBeChanged  = '';
            vm.teamToBeEdited = null;
            vm.scoreUpdate = '';
        }

        vm.editLog = function(){
            if( (vm.teamToBeEdited == null || vm.teamToBeEdited == '')
                && (vm.scoreUpdate == null || vm.scoreUpdate == '')){
                Materialize.toast('Please input a team and score!', 2000, 'red');
                vm.reset();
                return;
            }
            else if(vm.teamToBeEdited == null || vm.teamToBeEdited == ''){
                Materialize.toast('Please input a team!', 2000, 'red');
                vm.reset();
                return;
            }
            else if(vm.scoreUpdate == '' || vm.scoreUpdate == null){
                Materialize.toast('Please input a score!', 2000, 'red');
                vm.reset();
                return;
            }

            var params = {
                gameUpdateLog_id: vm.idToBeChanged,
                team_id: vm.teamToBeEdited,
                game_id: vm.game.game_id,
                score: vm.scoreUpdate,
                prev_score: vm.scoreToBeChanged,
            }
            gameLogService.updateGameLog(vm.idToBeChanged, params)
                .then(function(data){
                    Materialize.toast('Successfully edited a score!', 2000, 'red');
                    for(let team of vm.teamsInGame){
                        if(team.team_id == data.team_id){
                            data.name = team.name;
                            break;
                        }
                    }
                    for(let score of vm.scores){
                        if(score.gameUpdateLog_id == data.gameUpdateLog_id){
                            score.team_id = data.team_id;
                            score.score = data.score;
                            score.name = data.name;
                            score.teamVal = vals[data.team_id];
                            break;
                        }
                    }

                })
                .catch(function(e){
                    console.log(e);
                    Materialize.toast('Unsuccessfully edited a score!', 2000, 'red');
                })


                
            vm.reset();
        }

        vm.addLog = function(){
            if( (vm.teamToBeUpdated == null || vm.teamToBeUpdated == '')
                && (vm.score == null || vm.score == '')){
                Materialize.toast('Please input a team and score!', 2000, 'red');
                vm.reset();
                return;
            }
            else if(vm.teamToBeUpdated == null || vm.teamToBeUpdated == ''){
                Materialize.toast('Please input a team!', 2000, 'red');
                vm.reset();
                return;
            }
            else if(vm.score == '' || vm.score == null){
                Materialize.toast('Please input a score!', 2000, 'red');
                vm.reset();
                return;
            }

            var params = {
                team_id: vm.teamToBeUpdated,
                game_id: vm.game.game_id,
                score: vm.score,
            }
            gameLogService.addGameLog(params)
                .then(function(data){
                    Materialize.toast('Successfully added a score!', 2000, 'red');
                    data.teamVal = vals[data.team_id];
                    for(let team of vm.teamsInGame){
                        if(data.team_id == team.team_id){
                            data.name = team.name;
                            break;
                        }
                    }
                    vm.scores.push(data);
                })
                .catch(function(e){
                    console.log(e);
                    Materialize.toast('Unsuccessfully added a score!', 2000, 'red');
                })
            vm.reset();
        }
        
    }
})();
