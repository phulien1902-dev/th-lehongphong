window.onload = function () {

    const searchBox = document.getElementById("searchBox");

    if (!searchBox) return;

    searchBox.addEventListener("input", function () {

        let value = this.value.toLowerCase();

        document.querySelectorAll(".card").forEach(card => {

            if (card.innerText.toLowerCase().includes(value)) {

                card.style.display = "";

            } else {

                card.style.display = "none";

            }

        });

    });

};
