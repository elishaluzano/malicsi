(function() {
    'use strict';
    angular
        .module('app')
        .component('schedulePage',{
            template: require('./schedule-page.html'),
            controller: schedulePageController,
            bindings: {
                sports: '<',
                allGamesInformation: '<'
            }
        });

    function schedulePageController(sportService, eventService) {
        var vm = this;

        vm.showInfo = [];
        vm.months = ['Jan', 'Feb', 'Mar',
                    'Apr', 'May', 'Jun',
                    'Jul', 'Aug', 'Sep',
                    'Oct', 'Nov', 'Dec'];

        vm.days = [];

        vm.monthcodes = [
            {Jan: 1},
            {Feb: 4},
            {Mar: 4},
            {Apr: 0},
            {May: 2},
            {Jun: 5},
            {Jul: 0},
            {Aug: 3},
            {Sep: 6},
            {Oct: 1},
            {Nov: 4},
            {Dec: 6}
        ]

        vm.monthnums = {
            Jan: 1,
            Feb: 2,
            Mar: 3,
            Apr: 4,
            May: 5,
            Jun: 6,
            Jul: 7,
            Aug: 8,
            Sep: 9,
            Oct: 10,
            Nov: 11,
            Dec: 12
        }

        vm.yearcodes = [
            {17: 4},
            {18: 2},
            {19: 0},
            {20: 6},
        ]

        vm.daycodes = {
            1: 'Sun',
            2: 'Mon',
            3: 'Tue',
            4: 'Wed',
            5: 'Thu',
            6: 'Fri',
            0: 'Sat',
        }

        vm.date = '';

        vm.setmonth = (new Date()).getMonth() + 1;
        for(let key in vm.monthnums){
            if(vm.monthnums[key] == vm.setmonth){
                vm.setmonth = key;
                break;
            }
        }
        vm.setyear = (new Date()).getFullYear();

        vm.calendar = [];

        vm.$onInit = function() {

          $('.datepicker').pickadate({
            selectMonths: true, // Creates a dropdown to control month
            selectYears: 15 // Creates a dropdown of 15 years to control year
          });

           for(let sport of vm.sports){
                sport.games = [];
           }

           for(let game of vm.allGamesInformation){
                for(let sport of vm.sports){
                    if(game.sport_id === sport.sport_id){
                        sport.games.push(game);
                    }
                }
           }


            vm.hello();
            vm.hi(vm.setmonth, vm.setyear, (new Date().getDate()));

        }


    vm.hello = function(){
            vm.calendar = [];
            var mo = vm.setmonth;
            var yr = parseInt(vm.setyear);
            console.log(vm.setmonth);
            var year = '';
            var month = '';
            for(let each of vm.monthcodes) {
                if(each[mo] != undefined) month = each[mo];
            };

            for(let each of vm.yearcodes) {
                if(each[((yr)+"")[0] + ((yr)+"")[1]] != undefined) year = each[((yr)+"")[0] + ((yr)+"")[1]];
            };
            console.log(month);
            console.log(year);
            vm.days = [];

            
            for(var i=1; i<31; i++){
                vm.days.push({
                    month: mo,
                    year: yr,
                    date: i,
                    val: (Math.floor((year%100)/4)+i+year+month+(year%100))%7,
                    weekday: vm.daycodes[(Math.floor((year%100)/4)+i+year+month+(year%100))%7]
                })
            }

            var week = [];
            var x = vm.days.length;
            for(let i=0; i<x; i++){
                if(i==0){
                    if(vm.days[i].val == 0){ var val = 7 }
                    else{var val = (vm.days[i].val)}
                    for(let j=0; j<val-1; j++){
                        week.push({date: '', val: 0, weekday: ''});
                    }
                }
                if(vm.days[i].val % 7 != 1) week.push(vm.days[i])
                else{
                    vm.calendar.push(week);
                    week = [];
                    week.push(vm.days[i]);
                }
            }

            var y = [];
            console.log(vm.calendar);
    }


    vm.hi = function(month, year, date){
        vm.date = date;
        var month = vm.monthnums[month];
        vm.showInfo = [];
        var arr = [];

        for(let sport of vm.sports){
            for(let game of sport.games){
                let gameday = new Date(game.time);
                console.log(gameday);
                console.log(month + " " + year + " " + date)
                if(gameday.getDate() == date &&
                    gameday.getMonth()+1 == month &&
                    gameday.getFullYear() == year){
                    game.on = true;
                }
                else{
                    game.on = false;
                }
            }
        }

        console.log(vm.sports);

    }

    }
})();
