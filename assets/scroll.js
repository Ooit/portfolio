$(function() {
    $(".next-wrap").click(function () {
        $('html, body').animate({
            scrollTop: $("section").next().offset().top
        }, 500);
    });
});
