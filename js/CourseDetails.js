$(function(){
	var QRcode=document.querySelector('.QRcode')
	var APrice=sessionStorage.getItem('Price');
	$('.sidebar_one').hover(function(){
	var Oleft=$('.main_contenr').offset().left+1050;
		$('.QRcode').toggle();
		$('.QRcode').css('left',Oleft+'px')
	});
	$('.Price').html(APrice);
	$('.introduce img').click(function(){
		location.href='play.html';
	})
	$('.details button').click(function(){
		var _this=$(this).index();
		$('.contenr>div').eq(_this).show().siblings().hide();
		this.className='active';
		$(this).siblings().removeClass('active');
	});
	
	
	$('.s_btn').click(function(){
		if($('.Price').html()=='免费'){
			$('.SignUp_one').show();
		}else{
			$('.SignUp_four').show()
		}
		$('.Mask').show();
	});
	function hide(){
		$('.SignUp_one').hide();
		$('.Mask').hide();
		$('.SignUp_two').hide();
		$('.SignUp_three').hide();
		$('.SignUp_four').hide();
	}
	$('.Off').click(function(){
		hide();
	});
	$('.SignUp_two_Continue').click(function(){
		hide();
	});
	$('.SignUp_two_start').click(function(){
		hide();
	});
	$('.Mask').click(function(){
		hide();
	});
	$('.SignUp_one_btn').click(function(){
		$('.SignUp_one').hide();
		$('.SignUp_two').show();
		$('.introduce_p').show()
	});
	$('.SignUp_four_btn').click(function(){
		$('.SignUp_three').show();
		$('.Mask').show();
	});
	$('.SignUp_three_btn').click(function(){
		hide();
		$('.SignUp_two').show();
		$('.Mask').show();
		$('.introduce_p').show()
	});
	$('.branch li').click(function(){
		$(this).addClass('active_a').siblings().removeClass('active_a')
	})
	$('.Mask').height($(document).height());
	$(window).scroll(function(){
		$(document).scrollTop()!=0?$('.sidebar').show():$('.sidebar').hide();
	});
	
	$('.sidebar_three').click(function(){
		$(document).scrollTop(0)
	})
});
