(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function () {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();
$(document).ready(function () {
    //get data from json file in data/RxResume.json
    $.getJSON("data/RxResume_JSONExport_FsM-pxr5YhuWW7F9cG7cQ.json", function (data) {
       //add data to html
        $("#name-data").text(data.basics.name);
    });
});