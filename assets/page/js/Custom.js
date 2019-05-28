$(document).ready(function () {
    var link = location.pathname.toLowerCase();
    var part = link.split("#");

    var titel = document.createElement('meta');
    titel.setAttribute('name', 'titel');
    var description = document.createElement('meta');
    description.setAttribute('name', 'description');
    var image = document.createElement('meta');
    image.setAttribute('name', 'image');
  

    if (part[0] != "")
    {

        if (part[0] == "/user/company") {

            meta.content = "How to manage on EasyCloudBooks?";
            description.content = "This module enables you to access all your companies information within seconds. Apart from general information like company’s name, address, industry type, legal structure, it also provides essential details such as pending projects, projects on hold, billed amount, balance pending, custom details pending if unavailable, and its manager/contact person who deals with the matter. It also informs about the relationship manager i.e., any member of your staff whom the projects of that company have been assigned. "
            image.content = "faqimages/company/acompany.png";
        }

    }

    document.getElementsByTagName('head')[3].appendChild(meta);
    document.getElementsByTagName('head')[4].appendChild(description);
    document.getElementsByTagName('head')[5].appendChild(image);

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




   
