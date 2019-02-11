$(document).ready(function () {
    var url = location.href;
    $('.main-menu li').find('a[href="' + url + '"]').parents('li').addClass('active');
    $.each($('.main-menu li').find('a[href="' + url + '"]').parents('li').find('ul'), function (e, element) {
        $(element).addClass('show');
    });

    alert("hey");
heightadd();

  funcation heightadd(){ 
   var heightWithoutNavbar = $("body > .page-content").height() - 61;
  $(".sidebard-panel").css("min-height", heightWithoutNavbar + "px");
alert(heightWithoutNavbar);
      
        var navbarHeigh = $('#main-menu').height();
        var wrapperHeigh = $('.bd-content').height();
          alert(navbarHeigh);
        alert(wrapperHeigh);
        if (navbarHeigh > wrapperHeigh) {
            $('.bd-content').css("min-height", navbarHeigh + "px");
            alert("hey");
        }

        if (navbarHeigh < wrapperHeigh) {
            $('.bd-content').css("min-height", $(window).height() + "px");
            alert("hello");
        }

    }

  
});
