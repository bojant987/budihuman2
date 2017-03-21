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
    $(".counter-input").each(function() {
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

    $(".ambassadors-slider").slippry({
        pager: false,
        transition: "horizontal",
        auto: true,
        autoHover: false,
        controls: false
    });

    $(".twitter-ambassadors-slider").slippry({
        pager: false,
        transition: "horizontal",
        auto: true,
        autoHover: false,
        controls: false
    });

    $(".news-slider").slippry({
        pager: false,
        transition: "horizontal",
        auto: true,
        autoHover: false,
        controls: true
    });

    // thermometer
    function thermometer() {
        var min = parseFloat($(".thermometer").attr("data-min"));
        var max = parseFloat($(".thermometer").attr("data-max"));
        var value = parseFloat($(".thermometer").attr("data-value"));
        min = min.toFixed(2);
        max = max.toFixed(2);
        value = value.toFixed(2);
        var missing = (max - value).toFixed(2);
        var progress = (value / (max - min)) * 100;

        $(".thermometer .progress-bar").css("width", progress + "%");
        $(".thermometer .progress-bar + span").css("left", (progress * 0.96) + "%");

        $(".current > span:nth-of-type(2)").text(thousandSeparator(value) + " din");
        $(".missing > span:nth-of-type(2)").text(thousandSeparator(missing) + " din");
        $(".needed > span:nth-of-type(2)").text(thousandSeparator(max) + " din");
    }
    thermometer();

    // thousand separator
    function thousandSeparator(number) {
        number = number.toString().replace(".", ",");
        var result = number.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        return result;
    }

    // table numbers display
    function tableDisplay() {

        $(".last-donations table .table-input").each(function(input) {
            var output = parseFloat($(this).text()).toFixed(2);
            $(this).next().text(thousandSeparator(output) + " din");

        });
    }
    tableDisplay();

    // handle terrible picture sizes in news-slider
    function fixAspectRatio() {
        $(".news-slider img").each(function() {
            var ratio = 1.71746;
            var imgWidth = $(this).width();
            var imgHeight = imgWidth / ratio;
            $(this).height(imgHeight);
        });
    }
    fixAspectRatio();
    
    // child donations display
    function childDonationDisplay() {
        $(".child-donation .donation-input").each(function(input) {
            var output = parseFloat($(this).text()).toFixed(2);
            $(this).next().text(thousandSeparator(output) + " din");

        });
    }
    childDonationDisplay();

});
