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
    $(".children-slider").slippry({
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
    function thermometer(location) {
        var min = parseFloat(location.attr("data-min"));
        var max = parseFloat(location.attr("data-max"));
        var value = parseFloat(location.attr("data-value"));
        min = min.toFixed(2);
        max = max.toFixed(2);
        value = value.toFixed(2);

        var missing = (max - value).toFixed(2);
        var progress = (value / (max - min)) * 100;

        if (location.parent().is(".fundraiser")) {
          location.find(".progress-bar").css("width", progress + "%");
          location.find(".progress-bar + span").css("left", (progress * 0.96) + "%");
          location.parent().find(".missing > .number-output").text(thousandSeparator(missing) + " din");
        }

        if (location.parent().is(".user-fundraiser")) {
          var currentOffset = $(".thermometer-body").height() * (progress * 0.97)/100 - 61;
          var progressOffset = $(".thermometer-body").height() * progress/100 + 4;

          location.find(".progress-bar").css("height", progressOffset + "px");
          location.find(".thermometer-measurer").css("bottom", (progress * 0.97) + "%");
          location.find(".current").css("bottom", currentOffset + "px");
          location.parent().find(".missing > .number-output").text("-" + thousandSeparator(missing) + " din");
        }

        location.parent().find(".current > .number-output").text(thousandSeparator(value) + " din");
        location.parent().find(".needed > .number-output").text(thousandSeparator(max) + " din");
    }

    if ($(".fundraiser .thermometer").length > 0) {
      thermometer($(".fundraiser .thermometer"));
    }
    if ($(".user-fundraiser .thermometer").length > 0) {
      thermometer($(".user-fundraiser .thermometer"));
    }


    // thousand separator
    function thousandSeparator(number) {
        number = number.toString().replace(".", ",");
        var result = number.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        return result;
    }

    // table numbers display
    function tableDisplay() {

        $(".table-input").each(function(input) {
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
    function usersDonationDisplay() {
        $(".users-donation .donation-input").each(function(input) {
            var output = parseFloat($(this).text()).toFixed(2);
            $(this).next().text(thousandSeparator(output) + " din");

        });
    }
    usersDonationDisplay();

});
