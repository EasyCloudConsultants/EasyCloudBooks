$(document).ready(function () {
    $('ul li a.main').click(function () {
        $('li a.main').removeClass("action");
        $(this).addClass("action");
    });
});