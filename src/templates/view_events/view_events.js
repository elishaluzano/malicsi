$(document).ready(function() {
    Materialize.updateTextFields();
    $('.modal').modal();
    $('select').material_select();
});

$('.side-nav-button').sideNav({
    menuWidth: 300,
    edge: 'right',
    closeOnClick: true
});

$('.carousel.carousel-slider').carousel({fullWidth: true});
autoplay()   
function autoplay() {
    $('.carousel.carousel-slider').carousel('next');
    setTimeout(autoplay, 6000);
}        

$('#login').webuiPopover({url:'#login-form'});

$('#drop-links').webuiPopover({url:'#additional-links'});

 $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15, // Creates a dropdown of 15 years to control year
    container: 'body'
  });