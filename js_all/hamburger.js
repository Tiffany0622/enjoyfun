// 點擊後顯示選單

    $(function () {
        // 點擊按鈕，選單縮放
        $("button.btn_switch").on("click", function () {
            $("nav.main_nav").slideToggle();
        });

    });

// 控制漢堡button變化

    $(function () {

        // hamburger icon 的切換
        $("button.hamburger").on("click", function () {
            $(this).toggleClass("is-active");
        });

    });
