$(document).ready(function () {
    var link = location.pathname.toLowerCase();
    var part = link.split("#");


    var titel = "";
    var description = "";
    var image = "";
    var Urllink = "";
 //  var titleobj = $('meta[property="og:title"]');
    if (part[0] != "")
    {

       
  //  console.log(titleobj);
    //console.log(titel);
   // if(titleobj)    $(titleobj).attr('content',titel);
    }
   // $("head").append(Urllink);
   // $("head").append(image);
   // $("head").append(description);
 
  //  document.getElementsByTagName('head')[3].appendChild(titel);
    //document.getElementsByTagName('head')[4].appendChild(description);
    //document.getElementsByTagName('head')[5].appendChild(image);

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
		var newheight = $('.bd-content').height();
        var heightadd = wrapperHeigh + heightview;
   
        if (heightadd > navbarHeigh) {
            $('#main-menu').css("min-height", heightadd + "px");
			$('.navbarfull1').css("min-height", newheight + "px");
			$('.navbarfull2').css("min-height", newheight + "px");

        }
        if (navbarHeigh > heightadd) {
            $('#main-menu').css("min-height", heightadd + "px");
			$('.navbarfull1').css("min-height", newheight + "px");
			$('.navbarfull2').css("min-height", newheight + "px");
            
        }
    }
    
        $(".bd-content").css("min-height", screen.height);
});




   
