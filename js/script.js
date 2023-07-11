// insert common part
$("#wn__header").load("header.html");
$("footer").load("footer.html");

$(function () {
  // scroll top
  var scrollTop = $("#goTop");
  $(window).scroll(function () {
    var topPos = $(this).scrollTop();
    if (topPos > 100) {
      $(scrollTop).css("opacity", "1");
    } else {
      $(scrollTop).css("opacity", "0");
    }
  });
  $(scrollTop).click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      800
    );
    return false;
  });
});

// 關於我們slide2
var swiper = new Swiper("#multi_swiper", {
  slidesPerView: 4,
  spaceBetween: 25,
  loop: true,
  autoplay: {
    // delay: 2500,
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
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 25,
    },
  },
});

// 高爾夫slide
var swiper = new Swiper("#score_cards_swiper", {
  loop: true,
  // effect: "fade",
  speed: 1500,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
});

// gsap
gsap.registerPlugin(ScrollTrigger);

// ScrollTrigger.defaults({
//     toggleActions: "play",
//     scroller: ".container"
// });
