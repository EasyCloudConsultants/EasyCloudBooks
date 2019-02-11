$(document).ready(function () {
    var url = location.href;
    $('.main-menu li').find('a[href="' + url + '"]').parents('li').addClass('active');
    $.each($('.main-menu li').find('a[href="' + url + '"]').parents('li').find('ul'), function (e, element) {
        $(element).addClass('show');
    });


    $("#main-menu").click(function () {
        var heightWithoutNavbar = $("body > .page-content").height() - 61;
        // $(".sidebard-panel").css("min-height", heightWithoutNavbar + "px");


        var navbarHeigh = $('#main-menu').height();
        var wrapperHeigh = $('.bd-content').height();

        if (navbarHeigh > wrapperHeigh) {
            $('#main-menu').css("min-height", navbarHeigh + "px");

        }

        if (navbarHeigh < wrapperHeigh) {
            $('#main-menu').css("min-height", $(window).height() + "px");

        }

    });

  
});
