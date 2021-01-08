//  GO-TOP按鈕
// DOM 載入完成後執行
 $(function () {

    // 點擊按鈕，頁面滑到最上方
    $("#go_top").on("click", function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 750);
    });

    $(window).scroll(function(){
        var scrollTop = $(window).scrollTop();

        if(scrollTop > 0){
            $("#go_top").addClass('-onScroll');
        }else{
            $("#go_top").removeClass('-onScroll');
        }
    });

});

// 燈箱切換

$(function () {

    // 開啟 Modal 彈跳視窗
    $(".testlogin").on("click", function () {
        $("div.overlay").addClass("-on");
    });

    // 關閉 Modal
    $("button.btn_modal_close").on("click", function () {
        $("div.overlay").addClass("-opacity-zero");

        // 設定隔一秒後，移除相關 class
        setTimeout(function () {
            $("div.overlay").removeClass("-on -opacity-zero");
        }, 1000);
    });

});

// 登入註冊
let spanOption = document.querySelectorAll(".sign span");

spanOption.forEach(function (span) {
    span.addEventListener("click", function (e) {
        
        //Remove class active
        e.target.parentElement.querySelectorAll(".active").forEach(function (element) {
            element.classList.remove("active");
        });
        //Add class active
        e.target.classList.add("active");
      
       if (e.target.classList.contains("sign-in")) {
         
        document.querySelectorAll(".sign-in-up form").forEach(function (element) {
            element.classList.remove("active");
        });
         
        document.querySelector(".sign-in-form").classList.add("active");
        
       } else {
         
        document.querySelectorAll(".sign-in-up form").forEach(function (element) {
            element.classList.remove("active");
        });
         
        document.querySelector(".sign-up-form").classList.add("active");
       }
    })
})


//當欄位被focus時，提示字元消失；未輸入移開，加入提示字元
$(document).ready(function () {
    $('input[type="text"]').focus(function () {
        $(this).attr('placeholder', '');
    }).blur(function () {
        if ($(this).val() == '') {
            $(this).attr('placeholder', '今天你享趣哪玩?');
        }
    });
});



// tab 頁籤切換
$(function () {
    $("a.tab").on("click", function (e) {
        e.preventDefault();

        /* 將頁籤列表移除所有 -on，再將指定的加上 -on */
        $(this).closest("ul").find("a.tab").removeClass("-on");
        $(this).addClass("-on");

        /* 找到對應的頁籤內容，加上 -on 來顯示 */
        $("div.tab").removeClass("-on");
        $("div.tab." + $(this).attr("data-target")).addClass("-on");
    });
});

