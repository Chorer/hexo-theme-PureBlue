$(function () {
    var speed = 500;
    var h = document.body.clientHeight;
    $(".real-toTop-text").click(function () {
        $('html,body').animate({
            scrollTop: '0px'
        },
            speed);
    });
});
