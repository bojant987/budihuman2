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
    if ($(window).width() < 992) {
        $(".dropdown-control").click(function(e) {
            e.preventDefault();
            $(".dropdown-list").slideToggle();
            $(this).find(".fa").toggleClass("fa-plus");
            $(this).find(".fa").toggleClass("fa-minus");
            console.log($(window).width());
        });
    }


});
