require('materialize-css/dist/css/materialize.css');
require('material-design-icons/iconfont/material-icons.css');
require('./client/betelog-style.css');
window.jQuery = window.$ = require('jquery');
require('materialize-css/dist/js/materialize.js');
$(document).ready(function(){
    $('.slider').slider({
        height:570,
        interval:4000,
        indicators:false,
    });

    $('a').click(function(){
        $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
        }, 500);
    });
});

