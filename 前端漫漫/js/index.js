// 轮播图
var pre = document.querySelector("#left");
var next = document.querySelector("#right");
var imgs = document.querySelectorAll(".lunbo>img");
var imga = document.querySelectorAll(".suolue>img");
var item = 0;
// 上一页按钮
pre.onclick = function () {
  for (var i = 0; i < imgs.length; i++) {
    imgs[i].classList = "";
    imga[i].classList = "";
  }
  item -= 1;
  if (item < 0) {
    item = item + imgs.length;
  }
  imgs[item].classList = "active";
  imga[item].classList = "active1";
};
// 下一页按钮
next.onclick = function () {
  for (var i = 0; i < imgs.length; i++) {
    imgs[i].classList = "";
    imga[i].classList = "";
  }
  item += 1;
  if (item == imgs.length) {
    item = item % imgs.length;
  }
  imgs[item].classList = "active";
  imga[item].classList = "active1";
};
// 购买信息
var colors = document.querySelectorAll("#color>button");
var bigs = document.querySelectorAll("#big>button");
var banbens = document.querySelectorAll("#banben>button");
var buys = document.querySelectorAll("#buy>button");
var mag1 = document.querySelector(".jiesuan #color");
var mag2 = document.querySelector(".jiesuan #big");
var mag3 = document.querySelector(".jiesuan #banben");
var mag4 = document.querySelector(".jiesuan #buy");
var money = document.querySelector(".jiage");
// 循环
// for (var i = 0; i < colors.length; i++) {
//     colors[i].onclick = function () {
//         for (var j = 0; j < colors.length; j++) {
//             colors[j].className = '';
//         }
//         this.className = 'active2';

//         var color = this.innerText;
//         mag1.innerHTML = '';
//         mag1.append(color);
//     }
// }
// 商品颜色选择
$(function () {
  $("#color>button").click(function () {
    $(this).addClass("active2");
    $(this).siblings().removeClass("active2");
    mag1.innerHTML = "";
    mag1.append(this.innerText);
  });
});

// 商品内存大小
$("#big button").each(function (i, e) {
  var price = $(".jiage").text().substr(1);
  $(this).click(function () {
    $(this).addClass("active2").siblings().removeClass("active2");
    $(".jiesuan #big").text($(this).text());
    var pri = parseInt(price) + i * 200 + 5299;
    $(".jiage").text("￥" + pri);
    var num = $(".itxt").val();
    $(".all").text("￥" + (num * pri).toFixed(2));
  });
});
// 商品版本选择
for (var i = 0; i < banbens.length; i++) {
  banbens[i].onclick = function () {
    for (var j = 0; j < banbens.length; j++) {
      banbens[j].className = "";
    }
    this.className = "active2";
    var banben = this.innerText;
    mag3.innerHTML = "";
    mag3.append(banben);
  };
}
// 商品购买方式选择
for (var i = 0; i < buys.length; i++) {
  buys[i].onclick = function () {
    for (var j = 0; j < buys.length; j++) {
      buys[j].className = "";
    }
    this.className = "active2";
    var buy = this.innerText;
    mag4.innerHTML = "";
    mag4.append(buy);
  };
}
// 小计
$(".decrement").click(function () {
  var num = $(".itxt").val();
  var price = $(".jiage").text().substring(1);
  if (num == 0) {
    return;
  }
  num--;
  $(".all").text("$" + (num * price).toFixed(2));
  $(".itxt").val(num);
});
$(".increment").click(function () {
  var num = $(".itxt").val();
  var price = $(".jiage").text().substring(1);
  num++;
  $(".itxt").val(num);
  $(".all").text("$" + (num * price).toFixed(2));
});
getsum();
function getsum(price) {
  var num = $(".itxt").val();
  var price = $(".jiage").text().substring(1);
  $(".all").text("￥" + (num * price).toFixed(2));
}
// $('#big button').click(function(){
//     getsum();
// })
$(".jiesuan")
  .children("input")
  .change(function () {
    var num = $(".itxt").val();
    var price = $(".jiage").text().substring(1);
    $(".all").text("￥" + (num * price).toFixed(2));
  });

// 上面部分页面切换
$(".row>div").eq(0).show().siblings().hide();
$(function () {
  $(".contain li").click(function () {
    $(this).addClass("show").siblings().removeClass("show");
    var index = $(this).index();
    $(".row>div").eq(index).show().siblings().hide();
  });
});

$(".bow2").hide();
$(function () {
  $(".right li").click(function () {
    $(".bow").hide();
    $(".bow2").show();
  });
  // 中间部分页面切换
  $("li")
    .eq(0)
    .click(function () {
      $(".bow2").hide();
      $(".bow").show();
    });
});
