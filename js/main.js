var viewportheight;
var viewportwidth;


 if (typeof window.innerWidth != 'undefined')
 {
    viewportheight = window.innerHeight;
    viewportwidth = window.innerWidth;
 }

 else if (typeof document.documentElement != 'undefined' && typeof document.documentElement.clientWidth != 'undefined' && document.documentElement.clientWidth != 0)
 {
    viewportheight = document.documentElement.clientHeight;
    viewportwidth = window.documentElement.clientWidth;
 }

 else
 {
    viewportheight = document.getElementsByTagName('body')[0].clientHeight;
    viewportwidth = window.getElementsByTagName('body')[0].clientWidth;
 }


$(document).ready( function() {
	var navLightboxH = $('#nav-lightbox').innerHeight();
	var navLightboxT = (viewportheight - navLightboxH) / 2;
	navLightboxT += "px";
	$('#nav-lightbox').css('paddingTop', navLightboxT);
	$('#nav-lightbox').css('paddingBottom', navLightboxT);
	$('#nav-button button').animate({opacity: '1', right: '0'});
	$('.hidden').fadeIn("slow");
	$('#nav-button button').click( function() {
		$(this).toggleClass('active');
		$('#nav-lightbox').fadeToggle();
		if ($('#nav-button button').hasClass('active')) {
			$('#nav-lightbox a').animate({letterSpacing: '-1px' });
		}else {
			$('#nav-lightbox a').animate({letterSpacing: '-40px' });
		}
	});
	$('#nav-lightbox li a').click(function() {
		$(this).addClass('active');
		$('#nav-button button').click();
	});
});


$(document).ready( function() {
  
});
