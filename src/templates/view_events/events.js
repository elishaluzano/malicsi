$(document).ready(function() {
  
    $('.modal').modal();
    $('select').material_select();


$('.side-nav-button').sideNav({
    menuWidth: 300,
    edge: 'right',
    closeOnClick: true
});


$('#login').webuiPopover({url:'#login-form'});

$('#drop-links').webuiPopover({url:'#additional-links'});

});

