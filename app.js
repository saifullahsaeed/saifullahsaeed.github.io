
$(document).ready(function () {
    $(".control").click(function () {
        $(".active-btn").removeClass("active-btn");
        $(this).addClass("active-btn");
        $(".active").removeClass("active");
        $("#" + $(this).data("id")).addClass("active");
    });
    $(".theme-btn").click(function () {
        $("body").toggleClass("light-mode");
    });
}
);
$(document).ready(function () {
    //get data from json file in data/RxResume.json
    $.getJSON("data/RxResume_JSONExport_FsM-pxr5YhuWW7F9cG7cQ.json", function (data) {
       //add data to html
        $("#name-data").text(data.basics.name);
        $("#headline-data").text(data.basics.headline);
        $("#summery-data").text(data.basics.summary);
        $("#image-data").attr("src", data.basics.photo.url);
    });
});
