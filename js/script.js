new WOW().init();
$(function () {
    $(window).scroll(function () {
        var scrollVal = $(this).scrollTop();
        $("span.qScrollTop").text(scrollVal);

        if (scrollVal <= 60) {
            /* 如果滾動的物件捲動 > 500 則觸發指定的動作。*/
            $(".menu").removeClass("Sticky");

        } else {
            $(".menu").addClass("Sticky");

        }
    });
});

// var myFullpage = new fullpage('#fullpage', {
//     scrollBar: true,
//     // responsiveWidth: '768',
//     autoScrolling: false,

// });

// menu
var isActive = false;
$('.js-menu').on('click', function () {
    if (isActive) {
        $(this).removeClass('active');
        $('body').removeClass('menu-open');
    } else {
        $(this).addClass('active');
        $('body').addClass('menu-open');
    }

    isActive = !isActive;
});

$('nav a').click(function(){
    if (isActive) {
        $('.js-menu').removeClass('active');
        $('body').removeClass('menu-open');
    } else {
        $('.js-menu').addClass('active');
        $('body').addClass('menu-open');
        $('body').css('overflow-y','hidden');
    }

    isActive = !isActive;
});


// $(window).scroll(function () {
//     if ($(document).scrollTop() > 50) {
//         $('.nav').addClass('affix');

//     } else {
//         $('.nav').removeClass('affix');
//     }
// });

// 連結滾動動畫
$(document).ready(function () {
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 2000, function () {
                window.location.hash = hash;
            });
        } 
    });
});

$('[data-fancybox]').fancybox({
    loop: true,
    protect: true,
    buttons: [
        'close'
    ]
});

jQuery(document).ready(function ($) {
    $(".fancybox").fancybox({
        fitToView: false,
        maxWidth: "90%"
    });
});

// swiper
var swiper1 = new Swiper('.mySwiper1', {
    direction: 'horizontal',
    effect: 'slide',
    loop: true,
    speed: 1500,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    pagination: '.swiper-pagination',
    paginationClickable: true,
    mousewheelControl: true,

    hashnav: true,
    replaceState: true,
});

var swiper2 = new Swiper(".mySwiper2", {
    direction: "horizontal",
    effect: 'fade',
    loop: true,
    speed: 1000,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
});


