//Custom scripts for Baxx Julegaveshop

$( document ).ready(function() {

    //Move langauge-selector to login box
    if($('.langauge-selector').length > 0) {

        var moveLangaugeSelect = $('.langauge-selector').remove().clone();
        $('#loginBoxbdy .button').prepend(moveLangaugeSelect);

    }

    if(window.location.href.indexOf("/customers/customerorder.aspx") > -1) {

        $('#ShopContent > table').addClass('selected-gift');
        $('.page-content-pane').addClass('selected-gift');

    }

});
