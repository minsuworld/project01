$(function () {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 40,
    loop: true,
    autoplay: {
      delay: 3200,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      1500: {
        slidesPerView: 2,
      },
      1122: {
        slidesPerView: 1,
      },
      900: {
        slidesPerView: 2,
      },
    },
  });
})

$(function () {
  $(".ham").click(function () {
    $(this).toggleClass("on");
    $('.gnb').toggleClass('on')
  });
});

$(function () {
  $('.lang>span').on('click', function () {
    $('.lang_').slideToggle('on')
  })
})

$(document).ready(function () {
  $('.sec4_tap span').click(function () {
    var tab_id = $(this).attr('data-tab');

    $('.sec4_tap span').removeClass('on')
    $('.sec4_con').removeClass('on');

    $(this).addClass('on')
    $("#" + tab_id).addClass('on')
  })
})