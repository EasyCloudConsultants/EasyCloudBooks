$(document).ready(function () {
    var heightview ="";
    var url = location.href;
    $('.main-menu li').find('a[href="' + url + '"]').parents('li').addClass('active');
    $.each($('.main-menu li').find('a[href="' + url + '"]').parents('li').find('ul'), function (e, element) {
        heightview = $(element).addClass('show');
        alert(heightview);
    });
 
    heightadd();
    $("#main-menu").click(function () {

        heightadd();

       
    });

    //$(window).bind("load resize scroll", function () {

    //    heightadd();
           
    //});
   
  
});

function heightadd() {

    var navbarHeigh = $('#main-menu').height();
    var wrapperHeigh = $('#collapsibleNavbar').height();
    var heightadd = wrapperHeigh + heightview;
    alert(heightview);

    if (heightadd > navbarHeigh) {
        $('#main-menu').css("min-height", heightadd + "px");

    }
    if (navbarHeigh > heightadd) {
        $('#main-menu').css("min-height", $(window).height() + "px");
     

    }
}