//banner  swiper
var bannerSwiper = new Swiper('.banner .swiper-container',{
    pagination: '.banner .pagination',
    paginationClickable: true,
    loop:true,
    autoplayDisableOnInteraction : false,
    autoplay:3000
})

$('.banner .arrow-left').on('click', function(e){
    e.preventDefault()
    bannerSwiper.swipePrev()
  })
  $('.banner .arrow-right').on('click', function(e){
    e.preventDefault()
    bannerSwiper.swipeNext()
  })
  
  
  
//team swiper  
var proSwiper = new Swiper('.team .swiper-container',{
    pagination: '.team .pagination',
    paginationClickable: true,
    slidesPerView: 5,
    loop: true,
//  autoplay:2000
})
$('.team .arrow-left').on('click', function(e){
    e.preventDefault()
    proSwiper.swipePrev()
 });
  $('.team .arrow-right').on('click', function(e){
    e.preventDefault()
    proSwiper.swipeNext()
  });
  

