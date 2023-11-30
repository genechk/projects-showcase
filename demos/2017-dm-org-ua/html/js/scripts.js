var projectSlick = function ($) {
		$('.project-slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			dots: false,
			fade: true,
			asNavFor: '.project-nav',
		});
	},
	navSlick = function ($) {
		$('.project-nav').slick({
			slidesToScroll: 1,
			vertical: true,
			asNavFor: false,
			slidesToShow: 10,
			arrows: true,
			dots: false,
			centerMode: false,
			focusOnSelect: true,
			swipeToSlide: true,
			mobileFirst: true,
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 4,
						asNavFor: '.project-slider',
						vertical: false,
					},
				},
				{
					breakpoint: 749,
					settings: {
						vertical: false,
						asNavFor: '.project-slider',
						slidesToShow: 3,
					},
				},
				{
					breakpoint: 1,
					settings: 'unslick',
				},
			],
		});
	},
	checkSize = function () {
		var $projectSlider = jQuery('.project-nav');

		if (jQuery('#projects-detailed').css('visibility') === 'hidden') {
			$projectSlider.find('a').unbind('click');
		} else {
			$projectSlider.find('a').click(function (event) {
				event.preventDefault();
			});

			if (!$projectSlider.hasClass('slick-initialized')) {
				navSlick(jQuery);
				jQuery('.project-slider').slick('setOption', '', '', true);
			}
		}
	};

var smoothScroll = function ($) {
	'use strict';
	$(document).ready(function () {
		$('.scrollable a[href*=#]').on('click', function () {
			if (
				location.pathname.replace(/^\//, '') ==
					this.pathname.replace(/^\//, '') &&
				location.hostname == this.hostname &&
				this.hash.replace(/#/, '')
			) {
				var $ScrollTargetId = $(this.hash),
					$ScrollTargetAnchor = $('[name=' + this.hash.slice(1) + ']');
				var $ScrollTarget = $ScrollTargetId.length
					? $ScrollTargetId
					: $ScrollTargetAnchor.length
					? $ScrollTargetAnchor
					: false;

				if ($ScrollTarget) {
					var ScrollTargetOffset = $ScrollTarget.offset().top;
					$('html,body').animate({ scrollTop: ScrollTargetOffset }, 500);
					return false;
				}
				return false;
			}
		});
	});
};

jQuery(document).ready(function ($) {
	// Slick sliders
	projectSlick($);
	navSlick($);

	// run test on initial page load
	checkSize();
	smoothScroll($);

	// run test on resize of the window
	$(window).resize(checkSize);
});
