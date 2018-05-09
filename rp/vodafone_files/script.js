var DCP1585Fn = {
	getCookie: function(name) {
	  var value = '; ' + document.cookie;
	  var parts = value.split('; ' + name + '=');
	  if (parts.length == 2) return parts.pop().split(';').shift();
	},
	isDealderCodeCorrect: function(dealercode){
		return (dealercode && (JSON.parse(dealercode).dealerCode == 'WEB0002'));
	},
	init: function(){
		if(DCP1585Fn.isDealderCodeCorrect(DCP1585Fn.getCookie('dealer'))){
			var division = 'default';
			var bannerSettings = {
				'default': {
					'location': $('.spl-topnav-container').eq(0),
					'inject': 'after',
					'html': '<div id=\'acn-top-banner-carousel\'><div class= \'acn-top-banner acn-top-banner-default\'><div><span class= \'acn-logo\'></span>|&nbsp;&nbsp;Need help with your order? Call your Vodafone ACN team on <a href=\'tel:1300365898\'>1300 365 898</a>.</div></div></div>'
				}
			}
			var defaultSets = bannerSettings['default'];
			if(defaultSets['location'].length <= 0){
					defaultSets['location'] = $('.mega-menu-header').eq(0); //fix for checkout page
			}

			// megamenu change on checkout page
			if(window.location.href.indexOf('checkout?') >= 0){
				defaultSets['location'] = $('.page-container .mega-menu-v2');
			}
			defaultSets['location'].after(defaultSets['html']);

			//change mobile detail Need help contact detail
			var supportHTML = '<div class=\'FreedomDevicePageWrapper__help-support-section new\'>';
			supportHTML 		+= '<div class=\'FreedomDevicePageWrapper__wrapper\'>';
			supportHTML 		+= '<div class=\'FreedomDevicePageWrapper__help-text\'>';
			supportHTML 		+= '<span>Need help with your order?</span> Our Vodafone ACN team is ready to help.</div>';
			supportHTML 		+= '<div class=\'FreedomDevicePageWrapper__separator\'></div>';
			supportHTML 		+= '<div class=\'FreedomDevicePageWrapper__help-number\'><i class=\'icon__icon icon__icon--v_phone\'></i><a href=\'tel:1300 365 898\'>1300 365 898</a></div>';
			supportHTML 		+= '</div></div>';
			var supportHolder = $('.FreedomDevicePageWrapper__help-support-section').eq(0);
			if(supportHolder.length > 0){
				supportHolder.hide();
				supportHolder.after(supportHTML);
			}

			//change MBB detail Need help contact detail
			var MBBsupportHTML = '<div class=\'help-and-support new\'>';
			MBBsupportHTML 		+= '<div class=\'wrapper\'>';
			MBBsupportHTML 		+= '<div class=\'help-text\'>';
			MBBsupportHTML 		+= '<strong>Need help with your order?</strong> Our sales team are ready to help.</div>';
			MBBsupportHTML 		+= '<div class=\'separator\'></div>';
			MBBsupportHTML 		+= '<div class=\'help-number\'><div class="seed-font-icon"></div><a href=\'tel:1300 365 898\'><strong>1300 365 898</strong></a></div>';
			MBBsupportHTML 		+= '<div style=\'clear:both;\'></div>';
			MBBsupportHTML 		+= '</div></div>';
			var MBBsupportHolder = $('.device-page-acq .help-and-support').eq(0);
			if(MBBsupportHolder.length > 0){
				MBBsupportHolder.hide();
				MBBsupportHolder.after(MBBsupportHTML);
			}

			if (document.location.host + document.location.pathname === 'www.vodafone.com.au/mobile-broadband/plans') {
				// replace 1300 301 474 to 1300 365 898 on MBB plan page
				$('a[href^=tel]').each(function() {
				    if($(this).attr('href').indexOf('1300301474') > -1){
							$(this).attr('href','tel:1300365898');
							$(this).attr('onclick','VCA_A(\'lid\',\':main:txt:tel-1300365898\',this.href);  return false;');
							$(this).html('1300 365 898');
						}
				});
			}

			if (document.location.host + document.location.pathname === 'www.vodafone.com.au/business') {
				// replace 1300 111 111 to 1300 365 898 on business ladding page
				$('a[href^=tel]').each(function() {
				    if($(this).attr('href').indexOf('1300111111') > -1 && $(this).parent().hasClass('CarouselHero__action') === false){
							$(this).attr('href','tel:1300365898');
							$(this).html('1300 365 898');
						}
				});

				$('.CarouselHero__slider-item .CarouselHero__content').each(function(){
						if($(this).find('.description').text().indexOf('1300 111 111')>-1){
							// $(this).find('.description').text('Call us today on 1300 365 898.')
							$(this).parent('.CarouselHero__slider-item-container').find('.CarouselHero__action').hide();
							// $(this).parent('.CarouselHero__slider-item-container').find('.CarouselHero__action a').attr('href', 'tel:1300365898');
							// $(this).parent('.CarouselHero__slider-item-container').find('.CarouselHero__action a').html('Call now');
							// $(this).parent('.CarouselHero__slider-item-container').find('.CarouselHero__action a').attr('onclick','VCA_A(\'pid\',\':biz:car-2:tel-1300365898\',this.href);  return false;');
						}
				});

			}



		}
	}
}
DCP1585Fn.init();
