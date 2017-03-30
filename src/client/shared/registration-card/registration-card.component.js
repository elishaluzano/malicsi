(function() {
    'use strict';
    angular
        .module('app')
        .component('registrationCard',{
            template: require('./registration-card.html'),
            controller: registrationCardController,
        });

    function registrationCardController(userService) {
        var vm = this;
        vm.name = '';
        vm.username = '';
        vm.password = '';
        vm.password_confirm = '';
        vm.email = '';
        vm.gender = '';
        vm.birthday = '';
        vm.female = false;
        vm.male = false;

        vm.register = function() {
            var sex;
            if(vm.female == true){
                sex = "Female";
            }
            else{
                sex = "Male";
            }
            if (vm.password != vm.password_confirm) {
                Materialize.toast("Passwords do not match!", 3000, 'red');
            }
            else {
                vm.body = {
                    name : vm.name,
                    username : vm.username,
                    password : vm.password,
                    gender : sex,
                    birthday : (new Date(vm.birthday)).toISOString().substring(0, 10),
                    email : vm.email,
                    contact_number : null,
                    contact_person : null,
                    profile_pic : null
                }
            }
            userService.create(vm.body)
                .then(function(data) {
                    if(data) {
                        console.log(data);
                        vm.name = '';
                        vm.username = '';
                        vm.password = '';
                        vm.password_confirm = '';
                        vm.email = '';
                        vm.gender = '';
                        vm.birthday = '';
                        vm.female = false;
                        vm.male = false;
                        Materialize.toast("Successfully registered!", 3000, 'red');
                    }
                    else{
                        Materialize.toast("Register unsuccessful!", 3000, 'red');
                    }
                });
        }

    }
})();
