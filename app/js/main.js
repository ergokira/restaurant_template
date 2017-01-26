
$(document).ready(function(){
    "use strict"; // Start of use strict

	// Closes the Responsive Menu on Menu Item Click
	$('.navbar-collapse ul li a').on('click', function(event) {
		if (window.matchMedia("(max-width: 768px)").matches) {
			$(this).closest('.collapse').collapse('toggle');
		}
		$('.main-nav li').removeClass('active');
		$(this).parent().addClass('active');
	});

	//Script to Activate the Carousel
	$('.carousel').carousel({
		interval: 3000, //changes the speed
		pause:null  //If set to "hover", pauses the cycling of the carousel on mouseenter and resumes the cycling of the carousel on mouseleave. If set to null, hovering over the carousel won't pause it.
	})

	// Offset for Main Navigation
    $('#header-main-nav').affix({
        offset: {
            top: 100
        }
    })
	
   
}); // End of use strict
