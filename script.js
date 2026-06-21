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
