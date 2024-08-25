$(document).ready(function () {
    $(".slider-wrapper").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        Infinity: true,
        centerMode: true,
        centerPadding: "20px", /* отступ от 3х уже видимых слайдов*/
    })
    $(".slick-prev").text(">");
    $(".slick-next").text(">");
})