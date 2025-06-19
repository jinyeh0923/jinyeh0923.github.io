var data = [
  // 網頁1
  {
    type: "短影音",
    site_name: "教學<br>技巧示範",
    image: "img/portfolio/111.jpg",
    link: "../site1/index.html",
  },
  // 網頁2
  {
    type: "短影音",
    site_name: "戰術分析<br>賽事剪輯",
    image: "img/portfolio/222.jpg",
    link: "https://www.google.com.tw/",
  },
  // 網頁2
  {
    type: "短影音",
    site_name: "寵物3D公仔<br>製作",
    image: "img/portfolio/333.jpg",
    link: "https://www.google.com.tw/",
  },
  // 網頁2
  {
    type: "短影音",
    site_name: "ATL<br>NPC入場",
    image: "img/portfolio/444.jpg",
    link: "https://www.google.com.tw/",
  },
  // 網頁2
  {
    type: "短影音",
    site_name: "樂天Kobo<br>電子書",
    image: "img/portfolio/555.jpg",
    link: "https://www.google.com.tw/",
  },
  // 網頁2
  {
    type: "短影音",
    site_name: "寵物<br>狗狗紀錄",
    image: "img/portfolio/666.jpg",
    link: "https://www.google.com.tw/",
  },
  // 網頁2
  {
    type: "短影音",
    site_name: "DIS球隊<br>跟拍紀錄",
    image: "img/portfolio/777.jpg",
    link: "https://www.google.com.tw/",
  },
  // 網頁2
  {
    type: "短影音",
    site_name: "迷因<br>慢動作挑戰",
    image: "img/portfolio/888.jpg",
    link: "https://www.google.com.tw/",
  },
  // 網頁2
  {
    type: "短影音",
    site_name: "迷因<br>排球技巧",
    image: "img/portfolio/aaa.jpg",
    link: "https://www.google.com.tw/",
  },
  // 網頁2
  {
    type: "短影音",
    site_name: "TENGA<br>情趣用品介紹",
    image: "img/portfolio/bbb.jpg",
    link: "https://www.google.com.tw/",
  },
  // 網頁2
  {
    type: "短影音",
    site_name: "法律知識分享",
    image: "img/portfolio/999.jpg",
    link: "https://www.google.com.tw/",
  },
  // 網頁2
  {
    type: "短影音",
    site_name: "ATL<br>排球館開箱",
    image: "img/portfolio/10.jpg",
    link: "https://www.google.com.tw/",
  },
  {
    type: "長影音",
    site_name: "道明排球隊<br>謝師宴回顧",
    image: "img/portfolio/long1.jpg",
    link: "https://www.google.com.tw/",
  },
  {
    type: "長影音",
    site_name: "VLOA遊戲<br>上市試玩Live",
    image: "img/portfolio/long2.jpg",
    link: "https://www.google.com.tw/",
  },
  {
    type: "長影音",
    site_name: "Go車誌<br>新車試駕",
    image: "img/portfolio/long3.jpg",
    link: "https://www.google.com.tw/",
  },
  {
    type: "長影音",
    site_name: "採訪<br>雙人棚內採訪",
    image: "img/portfolio/long4.jpg",
    link: "https://www.google.com.tw/",
  },
];

// 按鈕生成
// var set = new Set();
// var result = data.filter((item) =>
//   !set.has(item.type) ? set.add(item.type) : false
// );
// types = "<div class='filter_btn filter'>" + result[0].type + "</div>";
// types += "<div class='filter_btn filter'>" + result[1].type + "</div>";
// $(".filter-type").append(types);

var products = "",
  types = "",
  links = "";
site_name = "";

for (var i = 0; i < data.length; i++) {
  var type = data[i].type,
    image = data[i].image,
    site_name = data[i].site_name,
    link = data[i].link;

  if (typeof site_name === "undefined") {
    site_name = "";
  }

  //create product cards
  products +=
    "<a href='" +
    link +
    "' target='_blank' rel='noreferrer noopenner' class='one_project product' data-type='" +
    type +
    "'><span class='site_name'>" +
    site_name +
    "</span><img src=" +
    image +
    ">" +
    "</a>";
}

$("#products").html(products);
// $(".filter-type").append(types);

var filtersObject = {};

if ($(".product").length <= 4) {
  $("#loadMore").text("").addClass("noContent");
}

//on filter change
$(".filter").on("click", function () {
  var filterName = $(this).data("type"),
    filterVal = $(this)[0].innerHTML;

  if (filterVal == "全部") {
    delete filtersObject[filterName];
  } else {
    filtersObject[filterName] = filterVal;
  }

  var filters = "";

  for (var key in filtersObject) {
    if (filtersObject.hasOwnProperty(key)) {
      filters += "[data-type ='" + filtersObject[key] + "']";

      // console.log($(".product").filter(filters).length);
      // console.log($(".product:hidden").filter(filters).length);
      if ($(".product").filter(filters).length != 0) {
        $("#loadMore").text("").addClass("noContent");
      }
    }
  }

  if (filters == "") {
    $(".product").show();
    $(".product").css("display", "none");
    $(".product").slice(0, 4).show();
    $("#loadMore").html("<span>載入更多</span>").removeClass("noContent");
  } else {
    $(".product").hide();
    $(".product").hide().filter(filters).show();
  }
});

$(".product").css("display", "none");
$(".product").slice(0, 4).show();
$("#loadMore").on("click", function (e) {
  e.preventDefault();
  $(".product:hidden").slice(0, 4).fadeIn("slow");
  if ($(".product:hidden").length == 0) {
    $("#loadMore").text("").addClass("noContent");
  }
});
