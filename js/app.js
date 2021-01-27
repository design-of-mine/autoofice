window.onload = function(){

$( document ).ready(function() {
  $('.cta-button').on('click', function(){
    $('.popup-001').addClass('blur')
    $('body').toggleClass('o-hidden')
  })
      $('.closer').on('click', function(){
        $(this).parent('div').removeClass('tr-none blur')
        $('body').removeClass('o-hidden')
    })
})

var mySwiper = new Swiper ('.swiper-container', {

    //new added
          slidesPerView: 1,
          spaceBetween: 30,
          freeMode: false,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
    //end new added
    
        // Optional parameters
    //    direction: 'vertical',
        loop: true,
          speed: 600,
          grabCursor: false,
    
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
            dynamicBullets: true,
        },
    //      autoplay: {
    //        delay: 2500,
    //        disableOnInteraction: false,
    //      },
    
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      })
    }