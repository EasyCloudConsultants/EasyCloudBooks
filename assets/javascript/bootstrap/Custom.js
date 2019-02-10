$(document).ready(function () {
    var url = window.location;
    $('li.inner a[href="' + url + '"]').parent().addClass('action');

    $('li.inner').filter(function () {
        return this.href === url;
    }).children().addClass('action');
    var x= $(this).parent();
   
    var link = $('x').attr('href');
    $('link').click();
});
