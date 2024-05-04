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

// gsap
// gsap.registerPlugin(ScrollTrigger);

// ScrollTrigger.defaults({
//     toggleActions: "play",
//     scroller: ".container"
// });


// 專案分類按鈕變色
flag = false

$(".filter_btn").on("click", function () {
  if (flag == false) {
    $(this).addClass('red_btn_clicked');
    flag = true;
  } else { 
    $('.filter_btn').removeClass('red_btn_clicked');
    $(this).addClass('red_btn_clicked');
  }
});