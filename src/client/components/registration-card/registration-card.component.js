(function() {
	'use strict';
	angular
		.module('app')
		.component('registrationCard',{
			template: require('./registration-card.html'),
			controller: registrationCardController,
		});

	function registrationCardController(userService){
		var vm = this;
		vm.first_name;
		vm.last_name;
		vm.email;
		vm.email_confirm;
		vm.password_confirm;

		vm.register = function(){
			if(vm.email != vm.email_confirm || vm.password != vm.password_confirm){
				console.log('Emails do not match'); // should be a toast
			}
			else if(vm.password != vm.password_confirm){
				console.log("Passwords do not match!"); // should be a toast;
			}
			else{
				vm.body = {
					name : vm.last_name + ' ' + vm.first_name,
					username : "username", //hardcoded waiting for ui team
					password : vm.password,
					gender : 'F', //hardcoded waiting for ui team
					birthday : '1111-11-11', //hardcoded waiting for ui team
					email : vm.email,
					contact_number : null,
					contact_person : null,
					profile_pic : null
				}
				console.log(vm.body);
			}
			userService.create(vm.body)
				.then(function(data){
					if(data){
						console.log(data);
					}
				});
		}

	}
})();