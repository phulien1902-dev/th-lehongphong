window.onload = function () {

    const searchBox = document.getElementById("searchBox");

    // Nếu trang không có ô tìm kiếm thì không làm gì cả
    if (!searchBox) {
        return;
    }

    searchBox.addEventListener("input", function () {

        let keyword = this.value.toLowerCase();

        let cards = document.querySelectorAll(".card");

        cards.forEach(function (card) {

            if (card.innerText.toLowerCase().includes(keyword)) {

                card.style.display = "";

            } else {

                card.style.display = "none";

            }

        });

    });

};
// DARK MODE

const darkModeBtn = document.getElementById("darkModeBtn");

if (darkModeBtn){

    darkModeBtn.addEventListener("click", function(){

        document.body.classList.toggle("dark-mode");

    });

}
