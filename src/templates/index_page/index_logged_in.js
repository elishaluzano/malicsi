$('.side-nav-button').sideNav({
    menuWidth: 300, // Default is 300
    edge: 'right', // Choose the horizontal origin
    closeOnClick: true
});

$(document).ready(function() {
    $('select').material_select();
});   

$(document).ready(function() {
    Materialize.updateTextFields();
}); 

$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});

$('.carousel.carousel-slider').carousel({fullWidth: true});
autoplay()   
function autoplay() {
    $('.carousel.carousel-slider').carousel('next');
    setTimeout(autoplay, 6000);
}        

$('#drop-links').webuiPopover({url:'#additional-links'});