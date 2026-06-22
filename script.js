document.addEventListener("DOMContentLoaded", function () {

    // DARK MODE
    const darkModeBtn = document.getElementById("darkModeBtn");

    if (darkModeBtn) {
        darkModeBtn.addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");
        });
    }

    // ĐỒNG HỒ
    function updateClock() {

        let now = new Date();

        let time = now.toLocaleTimeString('vi-VN');

        let date = now.toLocaleDateString('vi-VN');

        const clock = document.getElementById("clock");

        if (clock) {
            clock.innerHTML = "🕒 " + time + "<br>📅 " + date;
        }
    }

    setInterval(updateClock, 1000);

    updateClock();

    // BỘ ĐẾM TRUY CẬP
    let count = localStorage.getItem("visitorCount");

    if (count == null) {
        count = 1;
    } else {
        count = parseInt(count) + 1;
    }

    localStorage.setItem("visitorCount", count);

    const visitor = document.getElementById("visitorCount");

    if (visitor) {
        visitor.innerHTML = "👁️ Lượt truy cập: " + count;
    }

});
// TỔNG SỐ ỨNG DỤNG

let totalApps = document.querySelectorAll(".card").length;

let totalAppsBox = document.getElementById("totalApps");

if (totalAppsBox){

    totalAppsBox.innerHTML = totalApps;

}


// NGÀY HÔM NAY

let todayBox = document.getElementById("todayDate");

if (todayBox){

    let today = new Date();

    todayBox.innerHTML = today.toLocaleDateString('vi-VN');

}


// LƯỢT TRUY CẬP

let visitorCountBox = document.getElementById("visitorCountBox");

if (visitorCountBox){

    visitorCountBox.innerHTML = localStorage.getItem("visitorCount");

}
// MENU ĐIỆN THOẠI

const menuToggle = document.getElementById("menuToggle");

const menu = document.getElementById("menu");

if (menuToggle){

    menuToggle.addEventListener("click", function(){

        menu.classList.toggle("show");

    });

}
// NÚT LÊN ĐẦU TRANG

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function(){

    if (window.scrollY > 300){

        topBtn.style.display = "block";

    }

    else{

        topBtn.style.display = "none";

    }

});


topBtn.addEventListener("click", function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});
