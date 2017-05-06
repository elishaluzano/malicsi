(function($){
  $(function(){

    $('.button-collapse').sideNav();

  }); // end of document ready
})(jQuery); // end of jQuery name space

$(document).ready(function(){
	$('.parallax').parallax();
});
$(document).ready(function(){
	$('select').material_select();
	// the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
	$('.modal').modal({
		opacity: .5, // Opacity of modal background
	});
});
$('.side-nav-button').sideNav({
	menuWidth: 300, // Default is 300
	edge: 'right', // Choose the horizontal origin
	closeOnClick: true
});
$('#drop-links').webuiPopover({url:'#additional-links'});