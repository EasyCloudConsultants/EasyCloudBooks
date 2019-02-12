$(document).ready(function () {
    var url = location.href;
    $('.main-menu li').find('a[href="' + url + '"]').parents('li').addClass('active');
    $.each($('.main-menu li').find('a[href="' + url + '"]').parents('li').find('ul'), function (e, element) {
        $(element).addClass('show');
    });

   


    $(window).bind("load resize scroll", function () {

            var navbarHeigh = $('#main-menu').height();
            var wrapperHeigh = $('#collapsibleNavbar').height();
            var heightadd = wrapperHeigh + 100;
           
            if (wrapperHeigh > navbarHeigh) {
                $('#main-menu').css("min-height", heightadd + "px");
             
            }
            if (navbarHeigh > wrapperHeigh) {
                $('#main-menu').css("min-height", $(window).height() + "px");
                alert("holle");

            }
    });
   
  
});

