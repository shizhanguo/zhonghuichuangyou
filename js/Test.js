var timer = document.getElementById("timer");
var Aimg = document.querySelectorAll('.topic_one p img');
var timer = null;
var timeIndex = 0;
setTime()
        timer=setInterval(setTime,1000)
 function setTime(){
            var minutes = parseInt((timeIndex % 3600) / 60);
            var seconds = parseInt(timeIndex % 60);
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            $("#showtime").text( minutes + ":" + seconds);
            if(minutes>=90){
            	$('.main_right_sp').html('考试结束');
            	clearInterval(timer);
            }else{
            	timeIndex++;
            };
        };
$('.Assignment').click(function(){
	$('.topic_sub p i').each(function(i){
		
	})
})
$('.Return').click(function(){
	$(document).scrollTop(0)
})

$('.topic_a ul li img').click(function(){
	var Html=$(this).siblings().html();
	$(this).parents().siblings('.topic_sub').children().children('i').html(Html)
})

function ScrollTop(a) {
	$(document).scrollTop($(a).offset().top)
}
$('.li_one').click(function() {
	ScrollTop('.topic_a')
});
$('.li_two').click(function() {
	ScrollTop('.topic_b')
});
$('.li_three').click(function() {
	ScrollTop('.topic_c')
});
$('.li_four').click(function() {
	ScrollTop('.topic_d')
});