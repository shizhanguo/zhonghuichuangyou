$(function(){
	$('.main_left ul li').click(function(){
		var _this=$(this).index();
		$('.main_right').hide()
		$('.main_right').eq(_this).show();
		$(this).addClass('active').siblings().removeClass('active')
	})
});
