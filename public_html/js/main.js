$(document).ready(function() {

    // marquee init
    $('.marquee').marquee({
        duration: 15000,
        gap: 50,
        delayBeforeStart: 0,
        direction: 'left',
        duplicated: false
    });

    // navigaation dropdown
    $(".dropdown-control").click(function(e) {
        e.preventDefault();
        if ($(window).width() < 992) {
            $(".dropdown-list").slideToggle();

            $(this).find(".fa").toggleClass("fa-plus");
            $(this).find(".fa").toggleClass("fa-minus");
        }


    });


    // counter bar counter splitting into digits
    $(".counter-bar .counter-input").each(function() {
        var input = $(this).text();

        for (var i = 0; i < input.length; i++) {
            $(this).parent().append("<span>" + input[i] + "</span>");
        }
    });

    // sliders
    $(".kids-slider").slippry({
        pager: false,
        transition: "horizontal",
        auto: true,
        autoHover: false
    });

    $(".grownups-slider").slippry({
        pager: false,
        transition: "horizontal",
        auto: true,
        autoHover: false
    });

    $(".funds-slider").slippry({
        pager: false,
        transition: "horizontal",
        auto: true,
        autoHover: false
    });

    $(".hospitals-slider").slippry({
        pager: false,
        transition: "horizontal",
        auto: true,
        autoHover: false
    });

    $(".specials-slider").slippry({
        pager: false,
        transition: "horizontal",
        auto: true,
        autoHover: false
    });

});
