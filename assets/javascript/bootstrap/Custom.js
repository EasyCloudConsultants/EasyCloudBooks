

$(document).ready(function () {
    var url = window.location;
    $('ul.linetonav li a[href="' + url + '"]').parent().addClass('actionmain');

    $('ul.linetonav a').filter(function () {
        return this.href === url;
    }).parent().addClass('active').parent().children().addClass('show');

  
});
