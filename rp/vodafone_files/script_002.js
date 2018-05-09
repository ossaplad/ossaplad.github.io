var DCP1373Fn = {
	getCookie: function(name) {
	  var value = '; ' + document.cookie;
	  var parts = value.split('; ' + name + '=');
	  if (parts.length == 2) return parts.pop().split(';').shift();
	},
	getParameterByName: function(name, url) {
	    if (!url) url = window.location.href;
	    name = name.replace(/[\[\]]/g, '\\$&');
	    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
	        results = regex.exec(url);
	    if (!results) return null;
	    if (!results[2]) return '';
	    return decodeURIComponent(results[2].replace(/\+/g, ' '));
	},
	isDealderCodeCorrect: function(dealercode){
		return (dealercode && (JSON.parse(dealercode).dealerCode == 'PH0002' || JSON.parse(dealercode).dealerCode == 'PH0003'));
	},
	init: function(){
		if(DCP1373Fn.isDealderCodeCorrect(DCP1373Fn.getCookie('dealer'))){
			var division = 'default';
			if(window.location.href.indexOf('mobile-details') >= 0){
				division = 'mobile-details';
			}
			else if(window.location.href.indexOf('broadband-details') >= 0){
				division = 'broadband-details';
			}
			else if(window.location.href.indexOf('checkout?') >= 0){
				division = 'checkout';
			}
			else if(window.location.href.indexOf('/cart') >= 0){
				division = 'cart';
			}
			var bannerSettings = {
				'mobile-details': {
					'location': $('.MobileDetail__show-product').eq(0),
					'inject': 'append',
					'html': '<div id=\'uniday-half-banner\' class= \'uniday-banner ' + division + '\'><div class=\'uniday-logo\'>UNiDAYS</div><p>Your 10% off plan fees won\'t be shown in the cart, but it will be on your bill.</p></div>'
				},
				'checkout': {
					'location': $('.shop-minicart .accordion-head.tablet-upwards').eq(0),
					'inject': 'after',
					'html': '<div id=\'uniday-half-banner\' class= \'uniday-banner ' + division + '\'><div class=\'uniday-logo\'>UNiDAYS</div><p>Your 10% off plan fees isn\'t shown in the total cost above, but it will be on your bill.</p></div>'
				},
				'broadband-details': {
					'location': $('.product-img').eq(0),
					'inject': 'append',
					'html': '<div id=\'uniday-half-banner\' class= \'uniday-banner ' + division + '\'><div class=\'uniday-logo\'>UNiDAYS</div><p>Your 10% off plan fees won\'t be shown in the cart, but it will be on your bill.</p></div>'
				},
				'cart': {
					'location': $('.cart-total-cost-header').eq(0),
					'inject': 'after',
					'html': '<div id=\'uniday-full-banner\' class= \'uniday-banner ' + division + '\'><div class=\'uniday-logo\'>UNiDAYS</div><p>Your 10% off plan fees isn\'t shown in the total cost above, but it will be on your bill.</p></div>'
				},
				'default': {
					'location': $('.spl-topnav-container').eq(0),
					'inject': 'after',
					'html': '<div id=\'uniday-top-banner-carousel\'><div class= \'uniday-top-banner uniday-top-banner-default\'><div><span class= \'uniday-logo\'>UNiDAYS </span> | You\'ll get up to 10% off plan fees with selected SIM Only Plans and Red Plans.</div></div></div>'
				}
			}

			switch (division) {
				case 'mobile-details':
					var sets = bannerSettings[division];
					sets['location'].append(sets['html']);
					break;
				case 'checkout':
					var sets = bannerSettings[division];
					sets['location'].after(sets['html']);
					break;
				case 'cart':
					var sets = bannerSettings[division];
					sets['location'].after(sets['html']);
					break;
				case 'broadband-details':
					var sets = bannerSettings[division];
					sets['location'].append(sets['html']);
					break;
				// default:
				// 	var sets = bannerSettings[division];
				// 	sets['location'].after(sets['html']);
				// 	$('#uniday-top-banner-carousel').slick({
				//     dots: false,
				// 		arrows: false,
				// 	  infinite: true,
				//     adaptiveHeight: true,
				//     autoplay: true,
				//     autoplaySpeed: 4000,
				//     pauseOnFocus: true,
				//     pauseOnHover: true
				//   });
				// 	break;
			}
			// TODO: may need to add default to all cases except cart and checkout
			var defaultSets = bannerSettings['default'];
			if(defaultSets['location'].length <= 0){
					defaultSets['location'] = $('.mega-menu-header').eq(0); //fix for checkout page
			}
			// megamenu change on checkout page
			if(window.location.href.indexOf('checkout?') >= 0){
				defaultSets['location'] = $('.page-container .mega-menu-v2');
			}

			defaultSets['location'].after(defaultSets['html']);

			//disable top banner carousel initial
			// if(division !== 'cart' && division !== 'checkout'){
			// 	$('#uniday-top-banner-carousel').slick({
			// 		dots: false,
			// 		arrows: false,
			// 		infinite: true,
			// 		adaptiveHeight: false,
			// 		autoplay: true,
			// 		autoplaySpeed: 4000,
			// 		pauseOnFocus: true,
			// 		pauseOnHover: true
			// 	});
			// }
			// if(defaultSets['location'].length>0){
			// 	defaultSets['location'].after(defaultSets['html']);
			// }
			// else{
			// 	$('.CarouselHero__hero-carousel').eq(0).before(defaultSets['html']);
			// }


		}
	}
}
DCP1373Fn.init();
