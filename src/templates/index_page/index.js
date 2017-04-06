$(document).ready(function() {
    Materialize.updateTextFields();
});

$('.side-nav-button').sideNav({
    menuWidth: 300,
    edge: 'right',
    closeOnClick: true
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

$('#login').webuiPopover({url:'#login-form'});

$('#drop-links').webuiPopover({url:'#additional-links'});

$(document).ready(function(){
    $('.slider').slider({
        indicators: false
	  });
    $('.slider').slider('pause');
});

function nextFunction(){
  $('.slider').slider('next');
}

function prevFunction(){
  $('.slider').slider('prev');
}

