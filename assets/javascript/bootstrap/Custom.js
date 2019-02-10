$(document).ready(function () {
    var url = window.location;
    $('li.inner a[href="' + url + '"]').parent().addClass('active');

    $('li.inner').filter(function () {
        return this.href === url;
    }).children().addClass('active').parent().parent().addClass('show');

});
