/*----------------------- Preloading ----------------------*/
/*--------------------------------------------------------*/

//<![CDATA[
    $(window).load(function() { // makes sure the whole site is loaded
    $('#status').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(0).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(0).css({'overflow':'visible'});
    })
//]]>

$(document).ready(function(){
    $('.navigation li a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        refElement.waypoint(function(){
            $('.navigation li a').removeClass("active");
            currLink.addClass("active");
        }, {offset: 'bottom-in-view'});
    });
});

$(document).ready(function() {
    $('.tooltip').tooltipster();
    
       });


$(document).ready(function() {
    $("#form-trigger").leanModal({ overlay : 0.8, closeButton: ".modal_close" });
});

$(function() {

    $( '#ri-grid' ).gridrotator( {
        rows		: 4,
        columns		: 15,
        animType	: 'random',
        animSpeed	: 1000,
        interval	: 1200,
        step		: 1,
        w320		: {
            rows	: 3,
            columns	: 4
        },
        w240		: {
            rows	: 3,
            columns	: 4
        }
    } );
});

/* ----------------------- Flex Sliders ----------------- */
/* ------------------------------------------------------ */

$(window).load(function() {
    $('.flexslider').flexslider({
        animation: "slide",
        easing: "easeInOutCirc",
        direction: "horizontal",
        slideshowSpeed: 3000,
        pauseOnAction: false,
        pauseOnHover: false,
        controlNav: false,
        directionNav: false,
        smoothHeight: true
    });
});

$(window).load(function() {
    $('.flexslider2').flexslider({
        animation: "slide",
        easing: "easeInOutCirc",
        direction: "horizontal",
        slideshowSpeed: 3000,
        pauseOnAction: false,
        pauseOnHover: false,
        controlNav: false,
        directionNav: false,
        reverse: true
    });
});

/*-------------------- Animations ------------------ */
/* ------------------------------------------------- */

jQuery(document).ready(function($) {
    'use strict';
    $('.animated').appear(function() {
        var elem = $(this);
		if(elem.hasClass('why-us-info'))
		{      
			$('.timer').each(count);
		}
		
	    var animation = elem.data('animation');
        if ( !elem.hasClass('visible') ) {
            var animationDelay = elem.data('animation-delay');
            if ( animationDelay ) {
                setTimeout(function(){
                    elem.addClass( animation + " visible" );
                }, animationDelay);
            } else {
                elem.addClass( animation + " visible" );
            }
        }
    });
});
function count(options) {
        var $this = $(this);
        options = $.extend({}, options || {}, $this.data('countToOptions') || {});
        $this.countTo(options);
      }
/*  ---------------- Parallax Calling ---------------- */
/* --------------------------------------------------- */

$(document).ready(function(){
    if(parseInt(window.innerWidth)>1223)
    {
        $('.full-page').parallax( "70%", 0.5);
        $('.mob-dev').parallax( "50%", 0.5);
        $('.why-us').parallax( "50%", 0.5);
        $('.labs').parallax( "100%", 0.3);
        $('.testimonials').parallax( "50%", 0.5);
    }
});

/* ------------------- Scroll ---------------------- */
/* ------------------------------------------------- */

$(function() {
    $('.scroll').bind('click', function(event) {
        var $anchor = $(this);
        var headerH = $('#navigation').outerHeight();
        if(parseInt(window.innerWidth)<=1136)
        {
            $('html, body').stop().animate({
                scrollTop : $($anchor.attr('href')).offset().top + "px"
            }, 1200, 'easeInOutExpo');
        }
        else
        {
            $('html, body').stop().animate({
                scrollTop : $($anchor.attr('href')).offset().top - headerH + "px"
            }, 1200, 'easeInOutExpo');
        }
        event.preventDefault();
    });
});

/* ------------------- Sticky ---------------------- */
/* ------------------------------------------------- */

$(document).ready(function(){
    $(".navigation").sticky({topSpacing:0});
});


/*------------------------- Faders ---------------------- */
/* ------------------------------------------------------ */

$("#process-images > div:gt(0)").hide();

setInterval(function() {
    $('#process-images > div:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('#process-images');
    },
    4000);

$("#fader > div:gt(0)").hide();

setInterval(function() {
    $('#fader > div:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('#fader');
},  4000);

/*----------------------- Carousel ---------------------- */
/* ------------------------------------------------------ */

$(document).ready(function(){
    $('#ca-container').contentcarousel();
})

/*--------------------- team auto height ---------------- */
/* ------------------------------------------------------ */

$(document).ready(function(){
    var cw = $('.team-box').width();
    $('.team-box').css({'height':cw+'px'});
});

$(document).ready(function(){
    var cw = $('.you-image').width();
    $('.you-image').css({'height':cw+'px'});
});

/* ----------------- Direction-Aware-Hovering ------------------- */
/* -------------------------------------------------------------- */

$(function() {
    $(' #da-thumbs > li ').each( function() { $(this).hoverdir({
        hoverDelay : 75
    }); } );
});

/*--------------------- Video Player -------------------- */
/* ------------------------------------------------------ */

/*$(function(){
    $(".player").mb_YTPlayer();
});*/

/*------------------- Fraction Slider ------------------- */
/* ------------------------------------------------------ */

jQuery(window).load(function(){
  $('.slider').fractionSlider();
});

/*--------------------- Google Maps -------------------- */
/* ------------------------------------------------------ */

var map;
var brooklyn = new google.maps.LatLng(10.016229, 76.338969);
var MY_MAPTYPE_ID = 'custom_style';
function initialize() {
    var featureOpts = [
        {
            "stylers": [
                { "invert_lightness": true },
                { "weight": 0.5 },
                { "hue": "#ff0000" },
                { "gamma": 0.99 },
                { "saturation": -63 },
                { "lightness": 6 }
        ]
        }
    ];

    var mapOptions = {
        zoom: 18,
        scrollwheel: false,
        center: brooklyn,
        disableDefaultUI: true,
        mapTypeId: MY_MAPTYPE_ID
    };

    map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);

    var styledMapOptions = {
        name: 'Custom Style'
    };

    var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);
    var marker = new google.maps.Marker({
        position: brooklyn,
        map: map,
        title: 'Nintriva'
    });

    map.mapTypes.set(MY_MAPTYPE_ID, customMapType);
}

google.maps.event.addDomListener(window, 'load', initialize);

/*------------------------------------------------------- */
/* ------------------------------------------------------ */

$(document).ready(function()
{
$.ajax({
  url: "grabblog.php",
  method:"GET",
  context: document.body
}).done(function(data) {
  $('#fader').html( data );
});

});

