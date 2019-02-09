

$(document).ready(function () {
    var url = window.location;
    $('ul a[href="' + url + '"]').parent().addClass('action');
    $('ul.linetonav a').filter(function () {
        return this.href === url;
    }).parent().addClass('action1');
   
});