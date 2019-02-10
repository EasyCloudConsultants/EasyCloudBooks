$(document).ready(function () {
    var url = window.location;
    $('.main-menu li').find('a[href="'+url+'"]').parents('li').addClass('active');

});
