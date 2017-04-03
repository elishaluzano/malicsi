(function() {
    'use strict';
    angular
        .module('app')
        .component('registrationCard',{
            template: require('./registration-card.html'),
            controller: registrationCardController,
        });

    function registrationCardController(userService, searchService) {
        var vm = this;
        vm.name = '';
        vm.username = '';
        vm.password = '';
        vm.password_confirm = '';
        vm.email = '';
        vm.gender = '';
        vm.birthday = '';
        vm.gender = '';

        vm.$onInit = function() {
            setTimeout(Materialize.updateTextFields, 1);
        }

        vm.register = function() {
            if (!vm.name) {
                return Materialize.toast("What's your name?", 3000, 'red');
            }

            if (!vm.birthday) {
                return Materialize.toast('When is your birthday?', 3000, 'red');
            }

            if (!vm.gender) {
                return Materialize.toast('Are you male of female', 3000, 'red');
            }

            if (!vm.contact_number.length) {
                return Materialize.toast('Can I get your digits?', 3000, 'red');
            }

            if (isNaN(vm.contact_number)) {
                return Materialize.toast('Is that really your contact number?', 3000, 'red');
            }

            if (/[\W]/.exec(vm.username)) {
                return Materialize.toast('Username should only consist of alphanumeric characters and underscores', 3000, 'red');
            }

            if (vm.password.length < 8) {
                return Materialize.toast('Your password should be at least 8 characters long', 3000, 'red');
            }

            if (vm.password !== vm.password_confirm) {
                return Materialize.toast("Passwords do not match!", 3000, 'red');
            }

            if (!/^\w+@[a-zA-Z]+\.[a-zA-Z]+/.exec(vm.email)) {
                return Materialize.toast('Is that a real email address?', 3000, 'red');
            }

            searchService.users(vm.username)
                .then(function(users) {
                    let found = false;
                    for (let user of users) {
                        if (user.username === vm.username) {
                            found = true;
                            Materialize.toast('Username has already been taken', 3000, 'red');
                            break;
                        }
                    }
                    if (!found) {
                        register();
                    }
                });


        }

        function register() {
            let body = {
                name : vm.name,
                username : vm.username,
                password : vm.password,
                gender : vm.gender,
                birthday : (new Date(vm.birthday)).toISOString().substring(0, 10),
                email : vm.email,
                contact_number : null,
                contact_person : null,
                profile_pic : (vm.gender === 'male')? 'default-boy.png' : 'default-girl.png'
            };
            
            userService.create(vm.body)
                .then(function(data) {
                    vm.name = '';
                    vm.username = '';
                    vm.password = '';
                    vm.password_confirm = '';
                    vm.email = '';
                    vm.gender = '';
                    vm.birthday = '';
                    vm.gender = '';
                    Materialize.toast("Successfully registered!", 3000, 'red');
                });           
        }

    }
})();
