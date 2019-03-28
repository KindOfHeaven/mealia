const APP = {};

APP.body = jQuery('body');
APP.text = jQuery('.text');
APP.title = jQuery('.title');
APP.header = jQuery('header');
APP.subtitle = jQuery('.subtitle');

jQuery(window).on('load', function() {
	
	setTimeout(() => {init()}, 300);

})


function init() {

	APP.body.addClass("loaded");
	
	animate();

	jQuery(window).scroll(function() {
		animate()
	});
	
}

function animate() {
	const winTop = jQuery(window).scrollTop();
	const winHeight = jQuery(window).height();

	APP.text.each(function(index, element) {
		if (winTop > (jQuery(element).offset().top - winHeight)) {
			jQuery(element).addClass('_animated')
		}
	})
	APP.title.each(function(index, element) {
		if (winTop > (jQuery(element).offset().top - winHeight)) {
			jQuery(element).addClass('_animated')
		}
	})
	APP.subtitle.each(function(index, element) {
		if (winTop > (jQuery(element).offset().top - winHeight)) {
			jQuery(element).addClass('_animated')
		}
	})
}