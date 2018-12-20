$(function () {
    // var top = 200; 
    //this should be the offset of the top of your div 
    //which can be found by doing the following line

    var top = $(".sticky-header").offset().top;

    $(window).on('scroll', function () {
        if (top <= $(window).scrollTop()) {
            // if so, add the fixed class
            $('.sticky-header').addClass('fixed');
        } else {
            // otherwise remove it
            $('.sticky-header').removeClass('fixed');
        }
    })
});