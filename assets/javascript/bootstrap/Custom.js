$(document).ready(function () {
    var url = window.href;
    $('.main-menu li').find('a[href="'+url+'"]').parents('li').addClass('active');
    $.each($('.main-menu li').find('a[href="'+url+'"]').parents('li > ul'),function(e,element){
        $(element).addClass('show');
    });

});
