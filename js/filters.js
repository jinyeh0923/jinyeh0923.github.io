var data = [
  // 網頁1
  {
    type: "個人專案",
    site_name: "日金旅遊",
    image: "img/thumbnail_site1b.jpg",
    link: "../site1/index.html",
  },
  // 網頁2
  {
    type: "個人專案",
    image: "img/2.jpg",
    link: "https://www.google.com.tw/",
  },
  // 網頁3
  {
    type: "個人專案",
    image: "img/3.jpg",
    link: "https://www.google.com.tw/",
  },
  // 網頁4
  {
    type: "個人專案",
    image: "img/4.jpg",
    link: "https://www.google.com.tw/",
  },
  // 網頁5
  {
    type: "團體專案",
    image: "img/5.jpg",
    link: "https://www.google.com.tw/",
  },
  // 網頁6
  {
    type: "團體專案",
    image: "img/6.jpg",
    link: "https://www.google.com.tw/",
  },
  // 網頁6
  {
    type: "團體專案",
    image: "img/6.jpg",
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

if ($(".product").length <= 6) {
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
    $(".product").slice(0, 6).show();
    $("#loadMore").html("<span>載入更多</span>").removeClass("noContent");
  } else {
    $(".product").hide();
    $(".product").hide().filter(filters).show();
  }
});

$(".product").css("display", "none");
$(".product").slice(0, 6).show();
$("#loadMore").on("click", function (e) {
  e.preventDefault();
  $(".product:hidden").slice(0, 6).fadeIn("slow");
  if ($(".product:hidden").length == 0) {
    $("#loadMore").text("").addClass("noContent");
  }
});
