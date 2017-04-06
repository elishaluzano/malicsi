(function() {
    'use strict';

    angular
        .module('app')
        .component('eventsPage', {
            template: require('./events-page.html'),
            controller: eventsPageController,
            bindings: {
                events: '<'
            }
        });

        /* ADD sessionService, userService as parameter */
        function eventsPageController(eventService, sessionService, adminService, institutionService, venueService) {
            var vm = this;
            vm.isAdmin = false;
            vm.user = null;
            vm.event_title = '';
            vm.picture = '';
            vm.venue = '';
            vm.start_date = null;
            vm.end_date = null;
            vm.institutions = [];
            vm.ins = null;
            vm.venues = [];

            vm.$onInit = function() {
                vm.modalOpen = true;
                 $('select').material_select();

                /* check the current user if admin */
                vm.user = sessionService.user();
                
                venueService.getAll()
                    .then(function(v) {
                        console.log(v); 
                        for(let data of v) {
                            vm.venues.push(data);
                        }
                    })
                    .catch(function(err) {
                        console.log(err);
                    })

                if (vm.user) {
                    if(vm.user.user_id == 1) {
                        institutionService.getAll()
                            .then(function(data) {
                                for(let each of data) {
                                    vm.institutions.push(each);
                                }
                            })
                        vm.isAdmin = true;
                    }else{
                        adminService.getInstitutionsByAdmin(vm.user.user_id)
                            .then(function (user) {
                                if (user) {
                                    vm.institutions.push(user);
                                    vm.isAdmin = true;
                                }
                            });
                    }
                }
            }

            vm.addEvent = function() {
                const body = {
                    event_title: vm.event_title,
                    venue_id_key: vm.venue,
                    start_date: (new Date(vm.start_date)).toISOString().substring(0, 10),
                    end_date: (new Date(vm.end_date)).toISOString().substring(0, 10),
                    picture: vm.picture,
                    institution_id_key: vm.ins
                }
                
                if(vm.event_title == '') {
                    Materialize.toast("Please add an Event Title", 3000);
                }
                else if(vm.venue == null) {
                    Materialize.toast("Please add a Venue", 3000);
                }
                else if(vm.start_date == null || vm.end_date == null) {
                    Materialize.toast("Date details incomplete.", 3000);
                }
                /*else if(vm.picture == '') {
                    Materialize.toast("Please upload a logo", 3000);
                }*/
                else if(vm.ins == null) {
                    Materialize.toast("Please add an Institution", 3000);
                }
                else{
                    eventService.create(body)
                        .then(function(data) {
                            Materialize.toast("Successfully added an event!", 3000);
                        })
                        .catch(function(err) {
                            console.log(err);
                        })
                }
            }
        }
})();
