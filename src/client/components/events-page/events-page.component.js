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
            vm.venue = '';
            vm.start_date = null;
            vm.end_date = null;
            vm.institutions = [];
            vm.ins = null;
            vm.venues = [];
            vm.files = [];

            vm.$onInit = function() {
                console.log()
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

               
                    if(vm.user){
                        adminService.getInstitutionsByAdmin(vm.user.user_id)
                            .then(function (institutions) {
                                if (institutions) {
                                    for(let inst of institutions){
                                        vm.institutions.push(inst);
                                    }
                                    vm.isAdmin = true;
                                }
                            });
                        
                        if(vm.user.user_id == 1) {
                            institutionService.getAll()
                                .then(function(data) {
                                    for(let each of data) {
                                        vm.institutions.push(each);
                                    }
                                    console.log(vm.institutions);
                                })
                            vm.isAdmin = true;
                    }
                }
            }

            vm.addEvent = function() {
                var fd = new FormData();
                fd.append('event_title', vm.event_title);
                fd.append('venue_id_key', vm.venue);
                fd.append('start_date', (new Date(vm.start_date)).toISOString().substring(0, 10));
                fd.append('end_date',  (new Date(vm.end_date)).toISOString().substring(0, 10));
                fd.append('picture', (vm.files[0])? vm.files[0] : vm.currentTeam.picture);
                fd.append('institution_id_key', vm.ins);

                console.log(vm.ins);

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
                    eventService.create(fd)
                        .then(function(data) {
                            vm.events.push(data);
                            Materialize.toast("Successfully added an event!", 3000);
                        })
                        .catch(function(err) {
                            console.log(err);
                        })
                }
            }
        }
})();
