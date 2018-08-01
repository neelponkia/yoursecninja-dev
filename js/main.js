$(document).ready( function() {
	"use strict";
	
	$("#service-box-1").hover(function() {
		$("#service-title-1").addClass('active-title');
		$("#team-icon-size").attr('src', 'img/icons/team.png');
	}, function() {
		$("#service-title-1").removeClass('active-title');
		$("#team-icon-size").attr('src', 'img/icons/team-black.png');
	});
	$("#service-box-2").hover(function() {
		$("#service-title-2").addClass('active-title');
		$("#cloud-icon-size").attr('src', 'img/icons/cloud.png');
	}, function() {
		$("#service-title-2").removeClass('active-title');
		$("#cloud-icon-size").attr('src', 'img/icons/cloud-black.png');
	});
	$("#service-box-3").hover(function() {
		$("#service-title-3").addClass('active-title');
		$("#pentest-icon-size").attr('src', 'img/icons/infected.png');
	}, function() {
		$("#service-title-3").removeClass('active-title');
		$("#pentest-icon-size").attr('src', 'img/icons/infected-black.png');
	});
	$("#service-box-4").hover(function() {
		$("#service-title-4").addClass('active-title');
		$("#training-icon-size").attr('src', 'img/icons/presentation.png');
	}, function() {
		$("#service-title-4").removeClass('active-title');
		$("#training-icon-size").attr('src', 'img/icons/presentation-black.png');
	});
	$("#service-box-5").hover(function() {
		$("#service-title-5").addClass('active-title');
		$("#globe-icon-size").attr('src', 'img/icons/globe.png');
	}, function() {
		$("#service-title-5").removeClass('active-title');
		$("#globe-icon-size").attr('src', 'img/icons/globe-black.png');
	});
	$("#service-box-6").hover(function() {
		$("#service-title-6").addClass('active-title');
		$("#shield-icon-size").attr('src', 'img/icons/shield2.png');
	}, function() {
		$("#service-title-6").removeClass('active-title');
		$("#shield-icon-size").attr('src', 'img/icons/shield2-black.png');
	});
	  

	$('.owl-carousel-client').owlCarousel({
        items: 3,
        loop: true,
        margin: 30,
        autoplayHoverPause: true,
        dots: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1,
            },
            768: {
                items: 2,
            },
            961: {
                items: 3,
            }
        }
    });

	var owl = $(".owl-carousel-partners");
	 
	  owl.owlCarousel({
	    margin:80, 
	    items: 5,
        loop: true,
        autoplayHoverPause: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 3,
            },
            991: {
                items: 4,
            },
            1024: {
                items: 5,
            }
        }
	  });

	  $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#header').addClass('header-scrolled');
        } else {
            $('#header').removeClass('header-scrolled');
        }
    });

	//Smooth Scroll
var headerHight = $('header').outerHeight();
	// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top - 60
        }, 1000);
      }
    }
  });
});