window.onload = function () {

    const searchBox = document.getElementById("searchBox");

    if (!searchBox) {
        alert("Không tìm thấy searchBox!");
        return;
    }

    alert("Search đã được kích hoạt!");

    searchBox.addEventListener("input", function () {

        let keyword = this.value.toLowerCase();

        let cards = document.querySelectorAll(".card");

        cards.forEach(function(card){

            if(card.innerText.toLowerCase().includes(keyword)){

                card.style.display = "";

            }else{

                card.style.display = "none";

            }

        });

    });

};
