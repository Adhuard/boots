$(document).ready(function () {
    $(".slider-wrapper").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        Infinity: true,
        centerMode: true,
        centerPadding: "102px", /* отступ от 3х уже видимых слайдов*/
    })
    $(".slick-prev").text(">");
    $(".slick-next").text(">");

})