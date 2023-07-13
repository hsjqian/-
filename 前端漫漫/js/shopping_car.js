// 我的购物车

// 数量加减功能
// 数量加
$(".goods").on("click", ".good .dec", function () {
  var num = $(this).parent().find("input").val();
  num++;
  $(this).parent().find("input").val(num);
  var p = $(this).parent().siblings(".g-price").text();
  p = p.substr(1);
  $(this)
    .parent()
    .siblings(".price")
    .text("￥" + (p * num).toFixed(2));
  if (!$(this).parent().siblings("input").prop("checked") == false) {
    getsum();
    getprice();
  }
});
// 数量减
$(".goods").on("click", ".ind", function () {
  var num = $(this).parent().find("input").val();
  if (num == 0) {
    return;
  }
  num--;
  $(this).parent().find("input").val(num);
  var p = $(this).parent().siblings(".g-price").text();
  p = p.substr(1);
  $(this)
    .parent()
    .siblings(".price")
    .text("￥" + (p * num).toFixed(2));
  $(this).parent().find("input").val(num);
  if (!$(this).parent().siblings("input").prop("checked") == false) {
    getsum();
    getprice();
  }
});
// 选择框变换
$(".num")
  .children("input")
  .change(function () {
    var num = $(this).val();
    if (num < 0) {
      $(this).val(0);
      num = 0;
    }
    var p = $(this).parent().siblings(".g-price").text();
    p = p.substr(1);
    $(this)
      .parent()
      .siblings(".price")
      .text("￥" + (num * p).toFixed(2));
    getsum();
    getprice();
  });

// 合计
// 数量合计
getsum();
function getsum() {
  var sum = 0;
  $(".good")
    .children("input:checked")
    .each(function () {
      sum += parseInt($(this).siblings(".num").children("input").val());
    });
  $(".nums").text(sum);
}
// 价格合计
getprice();
function getprice() {
  var p = 0;
  $(".good")
    .children("input:checked")
    .each(function () {
      var price = $(this).siblings(".price").text();
      price = parseFloat(price.substr(1));
      p += price;
    });
  $(".prices").text("￥" + p.toFixed(2));
}
// 删除商品
$(".goods ").on("click", ".del", function () {
  $(this).parent().parent().remove();
  getsum();
  getprice();
});
// 重置商品
$(".goods").on("click", ".re", function () {
  $(this).parent().siblings(".num").find("input").val(0);
  $(this).parent().siblings(".price").text("￥0.00");
  getsum();
  getprice();
});
// 删除选中商品
$(".bottom").on("click", ".del1", function () {
  $(".good")
    .children("input")
    .each(function () {
      if ($(this).prop("checked") == true) {
        $(this).parent().remove();
        getsum();
        getprice();
      }
    });
});
// 清理购物车
$(".bottom").on("click", ".delall", function () {
  $(".good").remove();
  getsum();
  getprice();
});
// 选择复选框
$(".goods").on("click", "input", function () {
  getnum();
  getsum();
  getprice();
});
// 全选框功能
$(".bow2").on("click", ".check_all", function () {
  if ($(this).prop("checked") == true) {
    $(function () {
      $(".good").children("input").prop("checked", true);
      getsum();
      getprice();
      $(".check_all").prop("checked", true);
    });
  }
  if ($(this).prop("checked") == false) {
    $(function () {
      $(".good").children("input").prop("checked", false);
      getsum();
      getprice();
      $(".check_all").prop("checked", false);
    });
  }
});
// 判断全选框
function getnum() {
  // 计数器num
  var num = 0;
  // 商品数量len
  var len = $(".goods .good").length;
  // 循环，若复选框选上，则计数器加一
  $(".good")
    .children("input")
    .each(function () {
      if ($(this).prop("checked") == true) {
        num++;
      }
    });
  // 当商品数量跟复选框计数器个数相同，则代表全选
  if (num == len) {
    $(".check_all").prop("checked", true);
  } else {
    $(".check_all").prop("checked", false);
  }
}

// 加入购物车功能
// 判断手机信息是否选择完全
function cnt() {
  var i = 0;
  var j = 0;
  var k = 0;
  var l = 0;
  if ($(".mes #color .active2").length == 0) {
    $(".mes #color #cho").css("display", "inline");
    i = 1;
  } else {
    $(".mes #color #cho").css("display", "none");
    i = 0;
  }
  if ($(".mes #big .active2").length == 0) {
    $(".mes #big #cho").css("display", "inline");
    j = 1;
  } else {
    $(".mes #big #cho").css("display", "none");
    j = 0;
  }
  if ($(".mes #banben .active2").length == 0) {
    $(".mes #banben #cho").css("display", "inline");
    k = 1;
  } else {
    $(".mes #banben #cho").css("display", "none");
    k = 0;
  }
  if ($(".mes #buy .active2").length == 0) {
    $(".mes #buy #cho").css("display", "inline");
    l = 1;
  } else {
    $(".mes #buy #cho").css("display", "none");
    l = 0;
  }
  return i + j + k + l;
}
// 点击一次信息按钮，就消除提示
$(".mes button").on("click", function () {
  $(this).siblings("#cho").css("display", "none");
});
// 加入购物车功能按钮
$(".hexin .jiesuan .shop button").on("click", function () {
  // 如果信息选择完全，则加入购物车
  if (cnt() == 0) {
    addgoods();
  }
});
// 加入购物车信息
function addgoods() {
  // 获取需要加入到购物车的手机信息
  var img = $(".lunbo>.active").attr("src");
  var color = $(".phone1 #color .active2").text();
  var big = $(".phone1 #big .active2").text();
  var banben = $(".phone1 #banben .active2").text();
  var buy = $(".phone1 #buy .active2").text();
  var price = $(".jiesuan .jiage").text().substr(1);
  var num = $(".jiesuan input").val();
  var prices = ($(".jiesuan .jiage").text().substr(1) * num).toFixed(2);
  // 创建新div
  var good =
    `<div class="good">
              <input type="checkbox" />
              <img src="` +
    img +
    `" alt="图片" />
              <p class="text">已选择： Apple iPhone 6s (A1700)
              <br />型号：` +
    color +
    big +
    banben +
    buy +
    `
              </p>
              <span class="g-price"><em>￥` +
    price +
    `</em></span>
              <span class="num">
                <a
                  href="javascript:;"
                  style="width: 15.2px; text-align: center"
                  class="ind"
                >
                  -
                </a>
                <input type="text" value="` +
    num +
    `" />
                <a href="javascript:;" class="dec">+</a>
              </span>
              <span class="price"><em>￥` +
    prices +
    `</em></span>
              <span style="margin-top: 20px"
                ><a href="javascript:;" class="del">删除</a>
                <a href="javascript:;" class="re">重置</a>
              </span>
            </div>`;

  $(".bow2 .goods").append(good);
}
