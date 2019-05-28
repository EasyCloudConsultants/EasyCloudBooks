$(document).ready(function () {
    var link = location.pathname.toLowerCase();
    var part = link.split("#");
    alert("a");
    if (part[0] != "")
    {

        if (part[0] == "/user/company") {


        }

    }



    var url = location.href;
    $('.main-menu li').find('a[href="' + url + '"]').parents('li').addClass('active');


    $.each($('.main-menu li ').find('a[href="' + url + '"]').parents('li').find('ul'), function (e, element) {
        $(element).addClass('show');
    });

    var heightview = "";

    if ($(window).width() > 767) {

        $(window).on("load resize scroll", function (e) {
           heightadd();
       });
        $.each($('.main-menu li a').parents('li'), function (e, element) {
            $(element).click(function () {

                heightview = $(this).children('ul').height();

                heightadd();

            });

        });

    }

    function heightadd() {
        
        var navbarHeigh = $('#main-menu').height();
        var wrapperHeigh = $('#collapsibleNavbar').height();
        var heightadd = wrapperHeigh + heightview;


        if (heightadd > navbarHeigh) {
            $('#main-menu').css("min-height", heightadd + "px");

        }
        if (navbarHeigh > heightadd) {
            $('#main-menu').css("min-height", heightadd + "px");
            
        }
    }
    
        $(".bd-content").css("min-height", screen.height);
});


function metatags() {
    alert("b");
}


   
