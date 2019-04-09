;(function (argument) {
	/* body... */
	"use strict";
	$(document).ready(function (argument) {
		/* body... */
		$('#slider-carousel').carouFredSel({
			responsive:true,
			width:'100%',
			circular:true,
			scroll:{
				items:1,
				duration:500,
				pauseOnHover:true
			},
			auto:true,
			items:{
				visible:{
					min:1,
					max:1
				}, 
				height:"variable",
			},
			pagination:{
				container:'.slider-pager',
				anchorBuilder:false
			}
		});

		$('.portfolio-carousel').carouFredSel({
			responsive:true,
			width:'100%',
			circular:true,
			prev:'#prev',
			next:'#next',
			scroll:{
				items:1,
				duration:500,
				pauseOnHover:true
			},
			auto:true,
			items:{
				visible:{
					min:1,
					max:4
				}, 
				height:"variable",
			}
		});

		$('.team-carousel').carouFredSel({
			responsive:true,
			width:'100%',
			circular:true,
			prev:'#team-prev',
			next:'#team-next',
			scroll:{
				items:1,
				duration:500,
				pauseOnHover:true
			},
			auto:true,
			items:{
				visible:{
					min:1,
					max:4
				}, 
				height:"variable",
			}
		});


		$('.testimonial-carousel').carouFredSel({
			responsive:true,
			width:'100%',
			circular:true,
			scroll:{
				items:1,
				duration:500,
				pauseOnHover:true
			},
			auto:true,
			items:{
				visible:{
					min:1,
					max:1
				}, 
				height:"variable",
			},
			pagination:{
				container:'.testi-pager',
				anchorBuilder:false
			}
		});

		$(window).scroll(function (argument) {
			/* body... */
			var top = $(window).scrollTop();
			if (top >= 60) {
				$('header').addClass('secondary-dark-blue-bg');
			}else{
				$('header').removeClass('secondary-dark-blue-bg');
			}
		})
	})
})(jQuery);