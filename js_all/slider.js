$(document).ready(function () {
    $('#light-slider').lightSlider({
        adaptiveHeight: true,
        item: 1,
        slideMargin: 1,
        loop: true,
        slideMove: 1,
        loop: true,
        speed: 500, //ms'
        auto: true,
        slideEndAnimation: true,
        pause: 5000
    });
});