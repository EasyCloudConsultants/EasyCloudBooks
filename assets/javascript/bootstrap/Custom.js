

$(document).ready(function () {
    var url = window.location;
    $('ul.linetonav li a[href="' + url + '"]').parent().addClass('action');
  //  $('li a[href="' + url + '"]').parent().addClass('action');
    $('ul.linetonav li a').filter(function () {
        return this.href === url;
    }).parent().addClass('actioninline');

   
});