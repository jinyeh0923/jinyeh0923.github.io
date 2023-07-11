// document.addEventListener("DOMContentLoaded", function (event) {
$(function () {
  !(function (s, o) {
    o(function () {
      o("#menubox").click(function () {
        // console.log("55555");

        o("#nav-menu").toggleClass("show"),
          o("#menuBGB").toggleClass("show"),
          o("html").toggleClass("overflow"),
          o("#menubox").toggleClass("show"),
          o(".Menu1 .Menu2Group").removeClass("show"),
          o(".Menu1 .Menu1a").removeClass("show");
      }),
        document.addEventListener("visibilitychange", function () {
          "hidden" == document.visibilityState &&
            (o("#nav-menu").removeClass("show"),
            o("#menuBGB").removeClass("show"),
            o("html").removeClass("overflow"),
            o("#menubox").removeClass("show"),
            o(".Menu1 .Menu2Group").removeClass("show"),
            o(".Menu1 .Menu1a").removeClass("show"));
        });
      if (
        (function () {
          (this.switch = !0),
            (this.resize = () => {
              s.matchMedia("(min-width: 991px)").matches
                ? this.switch &&
                  ((this.switch = !1),
                  o(".Menu1").unbind(),
                  o("#sideMenuGroup").css("display", "flex"),
                  o("#menuBGB").removeClass("show"),
                  o(".Menu1").hover(
                    function (e) {
                      e.stopPropagation();
                      let t = o(this);

                      // console.log("8888");

                      o(".Menu1 .Menu2Group").removeClass("show"),
                        o(".Menu2Group", t).addClass("show"),
                        o(".Menu1 .Menu1a").removeClass("show"),
                        o(".Menu1a", t).addClass("show"),
                        o(".Menu1a", t).addClass("show");
                    },
                    function (e) {
                      let t = o(this);
                      e.stopPropagation(),
                        "spacing" == e.target.className &&
                          (o(".Menu2Group", t).removeClass("show"),
                          o(".Menu1a", t).removeClass("show")),
                        o(".Menu2Group", t).length > 0 &&
                          (o("#menuBG").removeClass("show"),
                          (this.isClick = !0),
                          this.isClick &&
                            ((this.isClick = !1),
                            o(".Menu1").css("pointerEvents", "none"),
                            setTimeout(() => {
                              (this.isClick = !0),
                                o(".Menu1").css("pointerEvents", "auto");
                            }, 200)));
                    }
                  ))
                : this.switch &&
                  ((this.switch = !0),
                  o(".Menu1").unbind(),
                  o("#sideMenuGroup").css("display", "none"),
                  o(".Menu1").click(function (e) {
                    e.stopPropagation();
                    let t = o(this);
                    o(".Menu2Group", t).hasClass("show")
                      ? (o(".Menu1 .Menu2Group").removeClass("show"),
                        o(".Menu1 .Menu1a").removeClass("show"))
                      : (o(".Menu1 .Menu2Group").removeClass("show"),
                        o(".Menu1 .Menu1a").removeClass("show"),
                        o(".Menu2Group", t).addClass("show"),
                        o(".Menu1a", t).addClass("show"));
                  }));
            }),
            (this.init = () => {
              this.resize();
            }),
            this.init();
        })()
      ) {
      }
    });
  })(window, $);
});
