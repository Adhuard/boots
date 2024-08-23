$(document).ready(function () {
    $(".slider-wrapper").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        Infinity: true,
        centerMode: true,
        centerPadding: "102px",
    })
    $(".slick-prev").text(">");
    $(".slick-next").text(">");
})