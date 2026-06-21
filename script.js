document.addEventListener("DOMContentLoaded", function () {

    const darkModeBtn = document.getElementById("darkModeBtn");

    if (darkModeBtn) {

        darkModeBtn.addEventListener("click", function () {

            document.body.classList.toggle("dark-mode");

            alert(document.body.className);

        });

    }

});
