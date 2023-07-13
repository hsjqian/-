// 首页

// 实现导航电梯功能
$(function () {
  var flag = true;

  // 导航电梯特定位置出现
  taggletop();
  function taggletop() {
    var top = $(".index1 h1").offset().top;
    if ($(document).scrollTop() >= top - 200) {
      $(".daohang").fadeIn();
    } else {
      $(".daohang").fadeOut();
    }
  }
  // 页面滚动出现导航
  $(window).scroll(function () {
    taggletop();
    // 页面滚动到某个位置，li添加active标签
    $(".content div").each(function (i, e) {
      if ($(document).scrollTop() >= $(e).offset().top - 200) {
        if (flag == true) {
          $(".daohang li")
            .eq(i)
            .addClass("active")
            .siblings()
            .removeClass("active");
        }
      }
    });
  });

  // 导航电梯点击功能
  $(".daohang li").each(function (i) {
    $(this).on("click", function () {
      flag = false;
      $(this).addClass("active").siblings().removeClass("active");
      var top = $(".content div").eq(i).offset().top;
      $("body,html")
        .stop()
        .animate(
          {
            scrollTop: top,
          },
          function () {
            flag = true;
          }
        );
    });
  });
});
