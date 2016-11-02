$(function(){
	function SessionStorageA(obj){
			var _this=$(obj).next().children('input').val();
				sessionStorage.setItem('Price',_this)
				window.location.href='CourseDetails.html';
	};
	function SessionStorageB(obj){
			var _this=$(obj).siblings('input').val();
				sessionStorage.setItem('Price',_this)
				window.location.href='CourseDetails.html';
	};
	$('.contenr_list_a img').click(function(){
			SessionStorageA(this);
	});
	$('.contenr_list_a p').click(function(){
			SessionStorageB(this);
	});
	var index=0;
	$('.paging ul li').click(function(){
		$(this).addClass('paging_active').siblings().removeClass('paging_active');
		index=$(this).index();
		hide()
	});
	function hide(){
		index!=0?$('.paging_btn_one').show():$('.paging_btn_one').hide()
	}
	function paging(){
		hide()
		$('.paging ul li').eq(index).addClass('paging_active').siblings().removeClass('paging_active')
	};
	$('.paging_btn_two').click(function(){
		if(index>=$('.paging ul li').length-1){return;}else{index++;paging()}
	});
	$('.paging_btn_one').click(function(){
		if(index==0){return;}else{index--;paging()}
	});
	$('.nav input').focus(function(){
		$(this).val('')
		$(this).width('200px')
	});
	$('.nav input').blur(function(){
		if(this.value==''){
			$(this).val('搜索...')
			$(this).width('80px')
		}
	});
});
