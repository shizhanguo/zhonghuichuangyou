$(function(){
	$('.main_left_tab ul li').click(function(){
		var _this=$(this).index();
		$(this).addClass('active').siblings().removeClass('active');
		$('.video div').eq(_this).show().siblings().hide()
	});
	$('.play_ul>li>p').click(function(){
		$(this).next().toggle();
	});
	
})
