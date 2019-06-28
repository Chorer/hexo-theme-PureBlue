$(function () {
    var speed = 500;
    var h = document.body.clientHeight;
    $(".toc-bottom").click(function () {
        $('html,body').animate({
            scrollTop: '0px'
        },
            speed);
    });
});
