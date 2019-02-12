$(document).ready(function () {
    var url = location.href;
    $('.main-menu li').find('a[href="' + url + '"]').parents('li').addClass('active');
    $.each($('.main-menu li').find('a[href="' + url + '"]').parents('li').find('ul'), function (e, element) {
        $(element).addClass('show');
    });

    heightadd();

    $(window).bind("load resize scroll", function () {
       
        heightadd;
        alert("hello");
    });
  
});



function heightadd()
{

    var navbarHeigh = $('#main-menu').height();
    var wrapperHeigh = $('#collapsibleNavbar').height();
    var heightadd = wrapperHeigh + 150;

    if (wrapperHeigh > navbarHeigh) {
        $('#main-menu').css("min-height", heightadd + "px");

    }
    if (navbarHeigh < wrapperHeigh) {
        $('#main-menu').css("min-height", $(window).height() + "px");

    }

}