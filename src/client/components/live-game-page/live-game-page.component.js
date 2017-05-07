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

    function liveGamePageController(gameService, sportService, gameLogService, sessionService, adminService, userLogService) {
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
        vm.isOverallAdmin = false;
        vm.scoreToBeChanged = '';
        vm.teamDel = '';
        vm.gameDel = '';
        vm.time = '';
        vm.teamIdToBeChanged = '';
        var ids = [];
        var vals = {};
        

        vm.$onInit = function(){
            $('.modal').modal();
            $('select').material_select();
            console.log(vm.game);
            console.log(vm.teamsInGame);
            $('ul.tabs').tabs();
            console.log(vm.scores);

            sessionService.session()
                .then(function(user) {
                    if (user) {
                        vm.currentUser = user;
                        vm.isOverallAdmin = vm.currentUser.isOverallAdmin;
                        adminService.checkAdminOfGame(vm.currentUser.user_id, vm.game.game_id)
                        .then(function(game){
                            if(game){
                                vm.isAdmin = true;
                            }
                        })
                        .catch(function(e){
                            console.log(e);
                        })
                    }
                });
            

            for(let event of vm.events){
                if(event.event_id == vm.game.event_id){
                    vm.institutionId = event.institution_id_key;
                }
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

            sportService.getOne(vm.game.sport_id)
                .then(function(sport){
                    vm.game.sport = sport.name;
                });

            console.log(vm.teamsInGame);


        }

        vm.deleteLog = function(id){

            var params = {
                team_id: vm.teamDel,
                game_id: vm.gameDel,
                prev_score: vm.scoreToBeChanged
            }


            console.log(vm.idToBeChanged);

            gameLogService.deleteGameLog(vm.idToBeChanged, params)
                .then(function(data){
                    for(let team of vm.teamsInGame){
                        if(team.team_id == vm.teamDel){
                            team.score -= vm.scoreToBeChanged;
                        }
                    }
                    for(var i=0; i<vm.scores.length; i++){
                        if(vm.scores[i].gameUpdateLog_id == id){
                            vm.scores.splice(i, 1);
                            break;
                        }
                    }
                    console.log(vm.idToBeChanged, params);
                    Materialize.toast('Successfully deleted game log!', 2000, 'red');
                    var logName = "Deleted " + vm.idToBeChanged + " log.";
                    var log = {
                        user_id: vm.currentUser.user_id,
                        institution_id: vm.institutionId,
                        action: logName
                    };

                    userLogService.create(log)
                        .then(function(data) {})
                        .catch(function(err){
                            console.log(err);
                        })


                })
                .catch(function(err){
                    console.log(err);
                    Materialize.toast('Unsuccessfully deleted game log!', 2000, 'red');
                })

                vm.reset();
        }


        vm.getIdDel = function(team, game, id, score){
            vm.teamDel = team;
            vm.gameDel = game;
            vm.idToBeChanged = id;
            vm.scoreToBeChanged = score;
            console.log(vm.idToBeChanged)
            console.log(vm.scores);
        }

        vm.getId = function(id, score, teamId){
            vm.idToBeChanged = id;
            vm.scoreToBeChanged = score;
            vm.teamIdToBeChanged = teamId;
        }

        vm.reset = function(){
            vm.teamToBeUpdated = null;
            vm.score = '';
            vm.idToBeChanged  = '';
            vm.teamToBeEdited = null;
            vm.scoreUpdate = '';
            vm.teamIdToBeChanged = '';
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
                prev_team_id: vm.teamIdToBeChanged,
                game_id: vm.game.game_id,
                score: vm.scoreUpdate,
                prev_score: vm.scoreToBeChanged,
            }

            console.log(params);
            gameLogService.updateGameLog(parseInt(vm.idToBeChanged), params)
                .then(function(data){

                    console.log(data);
                    Materialize.toast('Successfully edited a score!', 2000, 'red');
                    console.log("here");
                    if(params.team_id == params.prev_team_id){
                        for(let team of vm.teamsInGame){
                            if(team.team_id == data.team_id){
                                data.name = team.name;
                                team.score -= vm.scoreToBeChanged;
                                team.score += vm.scoreUpdate;
                                break;
                            }
                        }
                    }
                    else{
                        for(let team of vm.teamsInGame){
                            if(team.team_id == data.team_id){
                                data.name = team.name;
                                team.score += vm.scoreUpdate;
                            }
                            else if(team.team_id == data.prev_team_id){
                                team.score -= vm.scoreToBeChanged;
                            }
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

                    var logName = "Updated " + vm.idToBeChanged + " log.";
                    var log = {
                        user_id: vm.currentUser.user_id,
                        institution_id: vm.institutionId,
                        action: logName
                    };
                    userLogService.create(log)
                        .then(function(data) {
                        });
                
                    vm.reset();

                })
                .catch(function(e){
                    console.log(e);
                    Materialize.toast('Unsuccessfully edited a score!', 2000, 'red');
                
            vm.reset();
                })


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
                            team.score += vm.score;
                            console.log(team.score);
                            break;
                        }
                    }
                    console.log(data);
                    vm.scores.push(data);

                    var logName = "Added " + vm.idToBeChanged + " log.";
                    var log = {
                        user_id: vm.currentUser.user_id,
                        institution_id: vm.institutionId,
                        action: logName
                    };
                    userLogService.create(log)
                        .then(function(data) {
                        });
                    vm.reset();
                })
                .catch(function(e){
                    console.log(e);
                    Materialize.toast('Unsuccessfully added a score!', 2000, 'red');
                    vm.reset();
                })
        }

        vm.endGame = function(){
            gameService.endGame(vm.game.game_id)
                .then(function(data){
                    vm.game.status = 'FINISHED';

                    var winTeam = '';
                    var loseTeam = '';

                    if(vm.teamsInGame[0].score == vm.teamsInGame[1].score){
                        gameService.setDrawRecord(vm.game.game_id)
                            .then(function(data){
                                Materialize.toast('Successfully ended game!', 2000, 'red');
                            })
                            .catch(function(data){
                                Materialize.toast('Unsuccessfully ended game!', 2000, 'red');
                            })
                    }
                    else{
                        console.log('not draw');
                        if(vm.teamsInGame[0].score > vm.teamsInGame[1].score){
                            winTeam = vm.teamsInGame[0];
                            loseTeam = vm.teamsInGame[1];
                        }
                        else{
                            winTeam = vm.teamsInGame[1];
                            loseTeam = vm.teamsInGame[0];
                        }
                        var params = {
                            team1_id: winTeam.team_id,
                            team2_id: loseTeam.team_id
                        }

                        gameService.setRecord(vm.game.game_id, params)
                            .then(function(data){
                                Materialize.toast('Successfully ended game!', 2000, 'red');
                            })
                            .catch(function(data){
                                Materialize.toast('Unsuccessfully ended game!', 2000, 'red');
                            })
                    }

                    var logName = "Ended " + vm.game.game_id + " game.";
                    var log = {
                        user_id: vm.currentUser.user_id,
                        institution_id: vm.institutionId,
                        action: logName
                    };
                    userLogService.create(log)
                        .then(function(data) {
                        });
                })
                
        }

        vm.openGame = function(){
            gameService.openGame(vm.game.game_id)
                .then(function(data){
                    vm.game.status = 'ONGOING';
                    gameService.setRecord(vm.game.game_id)
                            .then(function(data){
                                Materialize.toast('Successfully opened game!', 2000, 'red');
                            })
                            .catch(function(data){
                                Materialize.toast('Unsuccessfully opened game!', 2000, 'red');
                            })
                    var logName = "Opened " + vm.game.game_id + " game.";
                    var log = {
                        user_id: vm.currentUser.user_id,
                        institution_id: vm.institutionId,
                        action: logName
                    };
                    userLogService.create(log)
                        .then(function(data) {
                        });
                })
                .catch(function(data){
                    Materialize.toast('Unsuccessfully opened game!', 2000, 'red');
                })
                
        }
        
    }
})();
