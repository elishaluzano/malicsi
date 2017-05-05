(function() {
    'use strict';

    angular
        .module('app')
        .component('sponsorsPage', {
            template: require('./sponsors-page.html'),
            controller: sponsorsPageController,
            bindings: {
                sponsors: '<'
            }
        });

        function sponsorsPageController() {
            var vm = this;
            
            /*vm.activePage = 1;
            vm.sponPage = [];
            vm.sponDisplay = [];
            vm.pages = [];

            vm.$onInit = function(){

                var array = [];

                console.log(vm.sponsors);

                for(let spon of vm.sponsors){
                    if(array.length != 10){
                        array.push(spon);
                    }
                    else{
                        vm.sponPage.push(array);
                        array = [];
                    }
                }

                if(array.length != 0){
                    vm.sponPage.push(array);
                }

                var i=1;
                for(let page of vm.sponPage){
                    vm.pages.push({num:i});
                    i++;
                }


            }


            vm.setActivePage = function(index) {
                vm.activePage = index;
                vm.sponDisplay = vm.sponPage[index-1];
            }

            vm.changePage = function(index){
                vm.page = [vm.sponsors[1]];
                console.log(index);
            }*/

        }
})();
