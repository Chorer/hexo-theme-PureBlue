$(function () {
    var speed = 500;
    var h = document.body.clientHeight;
    $(".toTop").click(function () {
        $('html,body').animate({
            scrollTop: '0px'
        },
            speed);
    });
});
