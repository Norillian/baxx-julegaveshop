//Custom scripts for Baxx Julegaveshop

$( document ).ready(function() {

    if($('.plist .plistE6 .prelement .prbasket a').length > 0) {
        appendSelectGiftText();
    }

    $( ".ecVariantTbl select" ).change(function() {
        checkForNewSelectGiftElement();
    });

    //Check how many list elements that #pMenuBaxxl0 contains
    if($('#pMenuBaxxl0 li').length === 1) {
        $('#pMenuBaxxl0').addClass('one-line');
    }

    //Change active state on mobile menu
    $( ".mobile-menu-button a" ).on( "click", function() {
        $('.mobile-menu').toggleClass('active');
    });

    //Get menu items for mobile-menu
    $( "#pMenuBaxxl0 li" ).each(function( index ) {
        copyListElement = $(this).clone();
        $('.mobile-menu ul').append(copyListElement);
    });

    //If on login page
    if($('#loginBoxbdy').length > 0) {

        $('body').addClass('login-page');

    }

    //Move langauge-selector to login box
    if($('.langauge-selector').length > 0) {

        var moveLangaugeSelect = $('.langauge-selector').remove().clone();
        $('#loginBoxbdy .button').prepend(moveLangaugeSelect);

    }

    if(window.location.href.indexOf("/customers/customerorder.aspx") > -1) {

        $('#ShopContent > table').addClass('selected-gift');
        $('.page-content-pane').addClass('selected-gift');

    }

    if(window.location.href.indexOf("/basket/shoppingcart_step5.aspx") > -1) {

        $('.page-content-pane').addClass('selected-gift-step5');

    }

});

$(function(){
  var nav = $('.mobile-menu'),
      animateTime = 500,
      navLink = $('.mobile-menu-button a');
  navLink.click(function(){
    if(nav.height() === 0){
      autoHeightAnimate(nav, animateTime);
    } else {
      nav.stop().animate({ height: '0' }, animateTime);
    }
  });
})

/* Function to animate height: auto */
function autoHeightAnimate(element, time){
  	var curHeight = element.height(), // Get Default Height
        autoHeight = element.css('height', 'auto').height(); // Get Auto Height
    	  element.height(curHeight); // Reset to Default Height
    	  element.stop().animate({ height: autoHeight }, time); // Animate to Auto Height
}

function appendSelectGiftText() {
    $('.plist .plistE6 .prelement .prbasket a').empty();
    $('.plist .plistE6 .prelement .prbasket a').append(chooseGiftText);
}

function checkForNewSelectGiftElement() {
    $('.plist .plistE6 .prelement .ecVariantTbl .prbasket a').empty();
    $('.plist .plistE6 .prelement .ecVariantTbl .prbasket a').append(chooseGiftText);
    setTimeout( appendSelectGiftText, 100 );
}
