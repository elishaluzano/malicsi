$('.side-nav-button').sideNav({
    menuWidth: 300, // Default is 300
    edge: 'right', // Choose the horizontal origin
    closeOnClick: true
});

$(document).ready(function() {
    Materialize.updateTextFields();
}); 

$('#drop-links').webuiPopover({url:'#additional-links'});

$(document).ready(function(){
    $('.modal').modal({
        dismissible: true
    });
});
       