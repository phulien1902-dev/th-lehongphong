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
// MENU MOBILE

const menuBtn=document.getElementById("menuToggle");

const menu=document.getElementById("menu");

if(menuBtn&&menu){

menuBtn.onclick=function(){

menu.classList.toggle("show");

};

}
}
// NÚT LÊN ĐẦU TRANG

const topBtn = document.getElementById("topBtn");

if(topBtn){

    window.addEventListener("scroll", function(){

        if(window.scrollY > 300){

            topBtn.style.display="block";

        }else{

            topBtn.style.display="none";

        }

    });

    topBtn.addEventListener("click", function(){

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}


// THANH TIẾN TRÌNH CUỘN TRANG

window.addEventListener("scroll", function () {

    let scrollTop =
        document.documentElement.scrollTop;

    let scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    let progress =
        (scrollTop / scrollHeight) * 100;

    const progressBar = document.getElementById("progressBar");

if(progressBar){

    window.addEventListener("scroll", function(){

        let scrollTop=document.documentElement.scrollTop;

        let scrollHeight=document.documentElement.scrollHeight-document.documentElement.clientHeight;

        let progress=(scrollTop/scrollHeight)*100;

        progressBar.style.width=progress+"%";

    });

}

});
// PARTICLES

if (typeof particlesJS !== "undefined" &&
    document.getElementById("particles-js")) {

    particlesJS("particles-js", {

        // giữ nguyên phần cấu hình

    });

}

  particles: {

    number: {
      value: 80
    },

    color: {
      value: "#ffffff"
    },

    shape: {
      type: "circle"
    },

    opacity: {
      value: 0.3
    },

    size: {
      value: 3
    },

    line_linked: {

      enable: true,

      distance: 150,

      color: "#ffffff",

      opacity: 0.2,

      width: 1

    },

    move: {

      enable: true,

      speed: 2

    }

  }

});
// POPUP CHÀO MỪNG

window.addEventListener("load", function(){

    const popup = document.getElementById("welcomePopup");

    const closeBtn = document.getElementById("closePopup");

    if (popup && closeBtn){

        closeBtn.addEventListener("click", function(){

            popup.style.display = "none";

        });

    }

});
// SLIDER

// =====================
// SLIDER
// =====================

document.addEventListener("DOMContentLoaded", function(){

    const slides = document.querySelectorAll(".slide");

    const dots = document.querySelectorAll(".dot");

    const nextBtn = document.querySelector(".next");

    const prevBtn = document.querySelector(".prev");

    let currentSlide = 0;

    if(slides.length > 0){

        function showSlide(index){

            slides.forEach(slide=>{
                slide.classList.remove("active");
            });

            dots.forEach(dot=>{
                dot.classList.remove("active-dot");
            });

            slides[index].classList.add("active");

            dots[index].classList.add("active-dot");

        }

        function nextSlide(){

            currentSlide++;

            if(currentSlide >= slides.length){

                currentSlide = 0;

            }

            showSlide(currentSlide);

        }

        function prevSlide(){

            currentSlide--;

            if(currentSlide < 0){

                currentSlide = slides.length - 1;

            }

            showSlide(currentSlide);

        }

        setInterval(nextSlide,4000);

        if(nextBtn){

            nextBtn.addEventListener("click",nextSlide);

        }

        if(prevBtn){

            prevBtn.addEventListener("click",prevSlide);

        }

    }

});
// HERO SLIDER

const heroSlides = document.querySelectorAll(".hero-slide");

let heroIndex = 0;

if(heroSlides.length > 0){

    setInterval(function(){

        heroSlides.forEach(slide => {

            slide.classList.remove("active");

        });

        heroIndex++;

        if(heroIndex >= heroSlides.length){

            heroIndex = 0;

        }

        heroSlides[heroIndex].classList.add("active");

    },4000);

}
// MENU SCROLL

window.addEventListener("scroll", function(){

    const nav = document.querySelector("nav");

    if(window.scrollY > 100){

        nav.style.background = "rgba(0,0,0,.4)";

    }

    else{

        nav.style.background = "rgba(255,255,255,.08)";

    }

});
