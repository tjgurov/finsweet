"use strict";

$(function () {

  $("#rateYo").rateYo({
    starWidth: "40px",
    rating: "4.5",
    readOnly: "true",
    spacing: "2px",
    starSvg: '<svg width="30" height="28" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.3662 1.82936C13.5032 -0.255461 16.4968 -0.255466 17.6338 1.82936L19.9256 6.03174C20.3571 6.82292 21.1214 7.37822 22.0072 7.5441L26.7121 8.42517C29.0463 8.86228 29.9713 11.7093 28.3399 13.4349L25.0514 16.9132C24.4323 17.5681 24.1404 18.4666 24.2563 19.3603L24.8723 24.1072C25.1779 26.4621 22.756 28.2217 20.6107 27.2034L16.2865 25.1507C15.4724 24.7642 14.5276 24.7642 13.7135 25.1507L9.38927 27.2034C7.24399 28.2217 4.82214 26.4621 5.12772 24.1072L5.74367 19.3603C5.85964 18.4666 5.5677 17.5681 4.94858 16.9132L1.66009 13.4349C0.0286615 11.7093 0.953722 8.86228 3.28786 8.42517L7.99278 7.5441C8.87858 7.37822 9.64288 6.82293 10.0744 6.03174L12.3662 1.82936Z"/></svg>'
  });

  /*==================MIXIT======================*/

  var mixer = mixitup('.blog__list');
  
  $('.blog__filter-btn').on('click', function() {
    $('.blog__filter-btn').removeClass('blog__filter-btn--active')
    $(this).addClass('blog__filter-btn--active')
  })

  $('.blog__filter-btn').on('click', function() {
    $('.blog__filter-btn').toggleClass('mixitup-control-active')
  })

  /*==================SLIDER======================*/

  const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    spaceBetween: 48,
    slidesPerView: 2,


    pagination: {
      el: '.testimonials__pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.testimonials__next',
      prevEl: '.testimonials__prev',

    },
  });

  /*==================ACCORDEON======================*/

  document.querySelectorAll('.faq__link').forEach((item) =>
  item.addEventListener('click', () => {
    const parent = item.parentNode;

    parent.classList.toggle('faq__link--active');
  })
);

  /*==================BURGER======================*/
  const burgerMenu = document.querySelector('.burger');
  const navMenu = document.querySelector('.header__nav');
  if(burgerMenu) {
    burgerMenu.addEventListener('click', function(e){
      document.body.classList.toggle('_lock')
      burgerMenu.classList.toggle('_active');
      navMenu.classList.toggle('_active');
    });
  }

  setInterval(() => {
    if  ($(window).scrollTop() > 0 && $('.header__nav').hasClass('_active') === false) {
      $('.burger').addClass('burger--follow')
    }
    else {
      $('.burger').removeClass('burger--follow')
    }
  }, 0);

});