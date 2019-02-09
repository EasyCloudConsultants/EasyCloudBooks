

$(document).ready(function () {
    var url = window.location;
    $('ul a[href="' + url + '"]').parent().addClass('action');
  //  $('li a[href="' + url + '"]').parent().addClass('action');
    $('ul.linetonav a').filter(function () {
        return this.href === url;
    }).parent().addClass('actioninline');

     var url1 = window.location;
    $('li.inner a[href="' + url + '"]').parent().addClass('actioninline');
  //  $('li a[href="' + url + '"]').parent().addClass('action');
    $('li.inner a').filter(function () {
        return this.href === url1;
    }).parent().addClass('action');
   
});