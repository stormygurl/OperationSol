jQuery(document).ready(function($) {
	$('form.form').form();

	// Tooltip settings
	if ($.isFunction($.fn.qtip)) {
		$('.tooltip').qtip({
			content: {
				text: false
			},
			style: {
				classes: 'qtip-default qtip-shadow tt',
				width: '180px'
			},
			position: {
				my: 'left center',
				at: 'right center'
			}
		});
	}

	// Changes subject to a text field when 'Other' is chosen
	$('#subject').replaceSelectWithTextInput({onValue: 'Other'});
}); // End document ready

(function ($) {
	$(window).load(function () {
		// Preload images
		var images = [
      		'form/images/close.png',
    		'form/images/success.png',
    		'form/images/error.png',
    		'form/images/default-loading.gif'
    	];

		// Preload images for any active themes
		if ($('.theme-light-light, .theme-light-rounded').length) {
			images = images.concat([
         		'form/themes/light/images/button-active-bg-rep.png',
         		'form/themes/light/images/close.png',
         		'form/themes/light/images/input-active-bg-rep.png'
         	]);
		}

		if ($('.theme-dark-dark, .theme-dark-rounded').length) {
			images = images.concat([
         		'form/themes/dark/images/button-active-bg-rep.png',
         		'form/themes/dark/images/close.png',
         		'form/themes/dark/images/input-active-bg-rep.png',
         		'form/themes/dark/images/loading.gif'
         	]);
		}

		if ($('.theme-minimal-light').length) {
			images = images.concat([
         		'form/themes/minimal/images/close-light.png'
         	]);
		}

		if ($('.theme-minimal-dark').length) {
			images = images.concat([
         		'form/themes/minimal/images/close-dark.png',
         		'form/themes/minimal/images/loading-dark.gif'
         	]);
		}

		$.preloadImages(images);
	});
})(jQuery);