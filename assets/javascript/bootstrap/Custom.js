

$(document).ready(function () {
    var url = window.location;
    $('ul a[href="' + url + '"]').parent().addClass('action');
  //  $('li a[href="' + url + '"]').parent().addClass('action');
    $('ul.linetonav ').filter(function () {
        return this.href === url;
    }).parent().addClass('actioninline');
   
});