jQuery(document).ready(function() {

	const header = jQuery('#header');

	jQuery(window).on('scroll', function() {
	
		const top = jQuery(window).scrollTop();

		if (top) {
			header.addClass('fixed');
		} else {
			header.removeClass('fixed')
		}

	})

})