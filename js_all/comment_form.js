// 開啟評論的燈箱
$(function () {
    // 開啟 Modal 彈跳視窗
    $("button.write").on("click", function () {
        $("div.overlay2").addClass("-on");
    });

    // 關閉 Modal
    $("button.btn_modal_close2").on("click", function () {
        $("div.overlay2").addClass("-opacity-zero");

        // 設定隔一秒後，移除相關 class
        setTimeout(function () {
            $("div.overlay2").removeClass("-on -opacity-zero");
        }, 1000);
    });

});

// 點擊星星
var clickStar = document.getElementsByClassName("star");
// console.log(clickStar);

// ==== 星號的重要性 ===== //
for (let i = 0; i < clickStar.length; i++) {
    clickStar[i].addEventListener("click", function (e) {
        //alert("hello");
        if (e.target.closest("span")) {
            // console.log(e);
            let span_el = e.target.closest("span");
            if (span_el.classList.contains("star")) {

                let current_star = parseInt(span_el.getAttribute("data-star"));
                let star_span = span_el.closest("div.star_block").querySelectorAll("span.star");
                //console.log(star_span);
                star_span.forEach(function (star_item, i) {

                    if (parseInt(star_item.getAttribute("data-star")) <= current_star) {
                        star_span[i].classList.add("-on");
                    } else {
                        star_span[i].classList.remove("-on");
                    }
                });
            }
        }
    })
}


// 上傳圖檔
var choose_file = document.getElementById("choose_file");
var file_input = document.getElementById("file_input");
choose_file.addEventListener("click", function () {
    //事件監聽
    file_input.click();
});

file_input.addEventListener("change", function () {
    console.log(this.files[0].name);
    //console.log(this.files[0].name); this是指上一行的 file_input
    //[0].name 取得檔案名稱
    // alert("a");
    var file_name = document.getElementById("file_name");
    file_name.innerHTML = this.files[0].name;
    //放入檔案名稱

    //讀取所選擇的檔案
    let reader = new FileReader();
    //new FileReader() 預覽檔案
    reader.readAsDataURL(this.files[0]);
    //讀取索引值為0的內容
    //讀取this.files[0]這個檔案
    reader.addEventListener("load", function () {
        //讀取完檔案會執行下列 function()的程式
        // console.log(reader.result);
        var img_block = document.getElementById("img_block");
        //取得html上img_block這個元素
        var img_str = '<img src="' + reader.result + '"class="small_width">';
        img_block.insertAdjacentHTML("beforeend", img_str);
        //beforeend在結束標籤之前
    });

});