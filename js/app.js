"use strict";

window.addEventListener('load', () =>{

  // let preloader = document.getElementById('pl')
  //     preloader.classList.add('load-finish')

// form
  let cta = document.querySelectorAll('.cta-button'),
      closer = document.querySelectorAll('.closer'),
      popup = document.querySelector('.popup-001'),
      body = document.querySelector('body')

      for (let i = 0; i < cta.length; i++){   
          cta[i].addEventListener('click', () =>{
                popup.classList.add('blur', 'transition');
                body.classList.toggle('o-hidden');
          });
      };

      for (let i = 0; i < cta.length; i++){   
        closer[i].addEventListener('click', () =>{
            popup.classList.remove('blur');
            body.classList.remove('o-hidden');
          });
      };


var mySwiper = new Swiper ('.swiper-container', {
    //new added
          slidesPerView: 1,
          spaceBetween: 30,
          freeMode: false,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,
          },
    //    direction: 'vertical',
        loop: true,
          speed: 600,
          grabCursor: false,

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
    })