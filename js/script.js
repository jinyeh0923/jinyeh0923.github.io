// insert common part
$("#wn__header").load("header.html");
$("footer").load("footer.html");

// $(window).scroll(function () {
//   if ($(document).scrollTop() > 50) {
//     $("#wn__header").addClass("affix");
//   } else {
//     $("#wn__header").removeClass("affix");
//   }
// });

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

$(document).ready(function () {
  $(".your-class").slick({
    infinite: true,
    autoplay: true,
  });
});

// gsap
// gsap.registerPlugin(ScrollTrigger);

// ScrollTrigger.defaults({
//     toggleActions: "play",
//     scroller: ".container"
// });

// 專案分類按鈕變色
flag = false;

$(".filter_btn").on("click", function () {
  if (flag == false) {
    $(this).addClass("red_btn_clicked");
    flag = true;
  } else {
    $(".filter_btn").removeClass("red_btn_clicked");
    $(this).addClass("red_btn_clicked");
  }
});

// 合作流程slide
var swiper = new Swiper("#multi_swiper", {
  slidesPerView: 4,
  spaceBetween: 25,
  loop: true,
  centeredSlides: true,
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
      slidesPerView: 3,
      spaceBetween: 25,
    },
  },
});

// 第二種slide
var swiper = new Swiper("#multi_swiper2", {
  effect: "coverflow",
  grabCursor: true,
  slidesPerView: 2,
  spaceBetween: 25,
  centeredSlides: true,
  loop: true,
  coverflowEffect: {
    rotate: 0,
    stretch: -10,
    depth: 100,
    modifier: 3,
    slideShadows: true,
  },
  autoplay: {
    delay: 2500,
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
      slidesPerView: 3,
      spaceBetween: 25,
    },
  },
});
