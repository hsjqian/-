// 登录模态框

// 首页登录按钮
$(".login").on("click", function () {
  // 点击登录，登录框弹出
  $(".dowebok").fadeIn();

  // 其他界面隐藏
  $("#wrapper").css({
    display: "none",
  });

  // 改变页面背景
  $("body").css({
    background: "url('../images/4.png')",
  });

  // 登录框界面变换
  $(".dowebok").css({
    background: " url('./images/2.png')",
  });
  $(".login_box").css({
    display: "block",
  });
  $(".regist_box").css({
    display: "none",
  });
});
// 首页注册按钮
$(".regist").on("click", function () {
  $(".dowebok").fadeIn();
  $("#wrapper").css({
    display: "none",
  });
  $("body").css({
    background: "url('../images/4.png')",
  });
  $(".dowebok").css({
    background: " url('./images/3.png')",
  });
  $(".login_box").css({
    display: "none",
  });
  $(".regist_box").css({
    display: "block",
  });
});
// 界面删除按钮
$(".login_box .del").on("click", function () {
  $(".dowebok").css({
    display: "none",
  });
  $("#wrapper").css({
    display: "block",
  });
  $("body").css({
    background: "url('../images/a.png')",
    "background-size": "cover",
  });
});
$(".regist_box .del").on("click", function () {
  $(".dowebok").css({
    display: "none",
  });
  $("#wrapper").css({
    display: "block",
  });
  $("body").css({
    background: "url('../images/a.png')",
    "background-size": "cover",
  });
});

// 登录界面注册按钮
$(".reg").on("click", function () {
  $(".login_box").css({
    display: "none",
  });
  $(".regist_box").css({
    display: "block",
  });
  $(".dowebok").css({
    background: " url('./images/3.png')",
  });
  $("body").css({
    background: "url('../images/4.png') ",
  });
});
// 注册界面登录按钮
$(".reg_login").on("click", function () {
  $(".login_box").css({
    display: "block",
  });
  $(".regist_box").css({
    display: "none",
  });
  $(".dowebok").css({
    background: " url('../images/2.png') ",
  });
  $("body").css({
    background: "url('../images/4.png')",
  });
});
$(function () {
  // 正则表达式验证用户名和密码是否符合要求

  // 用户名位2-10位汉字组成
  var admin = /^[\u4e00-\u9fa5]{2,10}$/;

  // 密码为3-9位数字或者字母组成
  var password = /^[0-9a-zA-Z]{3,9}$/;
  //  声明用户数据
  //   var user = [{username:'', password:'',}];
  //   点击注册按钮，进行验证

  $("#regit").on("click", function () {
    var flag1 = false;
    var flag2 = false;
    if (!$(".regist_box #username").val().match(admin)) {
      $(this).parent().siblings(".tip").addClass("active");
      $(".regist_box #username")
        .siblings("p")
        .eq(0)
        .addClass("active")
        .siblings()
        .removeClass("active");
      flag1 = false;
    } else {
      $(".regist_box #username").siblings("p").eq(0).removeClass("active");
      flag1 = true;
    }
    if (!$(".regist_box #password").val().match(password)) {
      $(".regist_box #password").siblings(".tip").addClass("active");
      flag2 = false;
    } else {
      $(".regist_box #password").siblings(".tip").removeClass("active");
      flag2 = true;
    }
    // 两个验证成功即代表注册成功

    if (flag1 && flag2) {
      //   注册成功后将数据存储到本地存储
      var local = getuser();
      if (local.length == 0) {
        alert("注册成功");
        local.push({
          username: $(".regist_box #username").val(),
          password: $(".regist_box #password").val(),
        });
      } else {
        var flag = true;
        // 循环排除重复用户名
        for (let index = 0; index < local.length; index++) {
          if ($(".regist_box #username").val() === local[index].username) {
            $(".regist_box #username").siblings("p").eq(1).addClass("active");
            flag = false;
            break;
          }
        }
        // 没有重复即注册成功
        if (flag == true) {
          alert("注册成功");
          $(".regist_box #username").siblings("p").eq(1).removeClass("active");
          local.push({
            username: $(".regist_box #username").val(),
            password: $(".regist_box #password").val(),
          });
        }
      }
      //   将新数组保存到本地存储
      saveuser(local);
    }
  });

  //   登录按钮
  $("#submit").on("click", function () {
    var user = getuser();
    var flag = true;

    // 验证用户名是否填写
    if ($(".login_box #username").val() == "") {
      $(".login_box #username")
        .siblings("p")
        .eq(1)
        .addClass("active")
        .siblings()
        .removeClass("active");
    } else if ($(".login_box #username").val() != "") {
      $(".login_box #username").siblings("p").eq(1).removeClass("active");
    }

    // 验证密码是否填写
    if ($(".login_box #password").val() == "") {
      $(".login_box #password")
        .siblings("p")
        .eq(1)
        .addClass("active")
        .siblings()
        .removeClass("active");
    } else if ($(".login_box #password").val() != "") {
      $(".login_box #password").siblings("p").eq(1).removeClass("active");
    }

    // 两者都不为空时进行下一步检验
    if (
      $(".login_box #username").val() != "" &&
      $(".login_box #password").val() != ""
    ) {
      for (let index = 0; index < user.length; index++) {
        console.log(user[index].password);
        if ($(".login_box #username").val() == user[index].username) {
          if ($(".login_box #password").val() == user[index].password) {
            alert("登录成功");
            // 登录成功，回到首页
            $(".dowebok").fadeOut();
            $("#wrapper").css({
              display: "block",
            });
            $("body").css({
              background: "url('../images/a.png')",
              "background-size": "cover",
            });
            // 首页出现用户名
            $(".headTopmain .left .users").text("");
            $(".headTopmain .left .user").text(
              "欢迎您！" + $(".login_box #username").val()
            );
            var del = ` <a
                  href="#"
                  class="back"
                  onclick="{
                  window.location.reload();
                }" style="border:none;"
                  >退出</a
                >`;
            $(".headTopmain .left .user").append(del);
            break;
          } else {
            $(".login_box #username").siblings("p").removeClass("active");
            $(".login_box #password").siblings("p").eq(0).addClass("active");
            flag = false;
          }
        }
      }
      if (flag) {
        $(".login_box #password").siblings("p").removeClass("active");
        $(".login_box #username").siblings("p").eq(0).addClass("active");
      }
    }
  });

  //   读取本地存储的数据
  function getuser() {
    var data = localStorage.getItem("user");
    if (data !== null) {
      return JSON.parse(data);
    } else return [];
  }

  //   保存本地存储的数据
  function saveuser(user) {
    localStorage.setItem("user", JSON.stringify(user));
  }

  // 首页退出功能实现
  //   $(".headTopmain .back").on("click", function () {
  //     // 页面刷新
  //     alert("1");
  //     window.location.reload();
  //   });
});
