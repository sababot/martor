(function ($) {

	// Products Slick
	$('.products-slick').each(function () {
		var $this = $(this),
			$nav = $this.attr('data-nav');

		$this.slick({
			slidesToShow: 4,
			slidesToScroll: 2,
			autoplay: true,
			infinite: true,
			speed: 300,
			dots: true,
			arrows: true,
			appendArrows: $nav ? $nav : false,
			responsive: [{
				breakpoint: 991,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
			]
		});
	});




})(jQuery);
