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
        function eventsPageController(eventService, sessionService, adminService, institutionService, venueService, searchService) {
            var vm = this;
            vm.isAdmin = false;
            vm.user = null;
            vm.event_title = '';
            vm.venue = '';
            vm.start_date = new Date();
            vm.end_date = new Date();
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
                                if (institutions.length) {
                                    for(let inst of institutions){
                                        vm.institutions.push(inst);
                                    }
                                    vm.isAdmin = true;
                                }
                            });
                        if(vm.user.isOverallAdmin) {
                            institutionService.getAll()
                                .then(function(data) {
                                    for(let each of data) {
                                        vm.institutions.push(each);
                                    }
                                    console.log(vm.institutions);
                                    vm.isAdmin = true;
                                })
                        
                     }
            }

            vm.addEvent = function() {
                searchService.events(vm.event_title)
                    .then(function(events) {
                        if (events.find(function(event) {
                            return event.event_title.toLowerCase() === vm.event_title.toLowerCase()
                                && event.event_id != vm.event_id;
                        })) {
                            return Materialize.toast(vm.event_title + ' is already taken', 3000, 'red');
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
                        else if (new Date(vm.start_date).getTime() > new Date(vm.end_date).getTime()) {
                            Materialize.toast("Start date must be before end date", 3000);
                        }
                        else if(vm.ins == null) {
                            Materialize.toast("Please add an Institution", 3000);
                        }
                        else if(!vm.files[0]) {
                            Materialize.toast("Please upload a logo", 3000);
                        }
                        else{
                            console.log(vm.venue);
                            var fd = new FormData();
                            fd.append('event_title', vm.event_title);
                            fd.append('venue', vm.venue);
                            fd.append('start_date', (new Date(vm.start_date)).toISOString().substring(0, 10));
                            fd.append('end_date',  (new Date(vm.end_date)).toISOString().substring(0, 10));
                            fd.append('picture', vm.files[0]);
                            fd.append('institution_id_key', vm.ins);
                            eventService.create(fd)
                                .then(function(data) {
                                    console.log(data);
                                    vm.events.push(data);
                                    Materialize.toast("Successfully added an event!", 3000);
                                    $('#modal-add-event').modal('close');
                                })
                                .catch(function(err) {
                                    console.log(err);
                                })
                        }
                    });
            }
        }
        }
})();
