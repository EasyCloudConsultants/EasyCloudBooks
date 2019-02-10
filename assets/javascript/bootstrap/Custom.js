$(document).ready(function () {
    var url = window.href;
    $('.main-menu li').find('a[href="'+url+'"]').parents('li').addClass('active');
    console.log(url);
    console.log($('.main-menu li').find('a[href="'+url+'"]'));
    $.each($('.main-menu li').find('a[href="'+url+'"]').parents('li').find('ul'),function(e,element){
        $(element).addClass('show');
    console.log($(element));
    });

});
