jQuery(document).ready(function ($) {

    $( '#section .cont1 .slider' ).bxSlider( {
        auto: true,
        pause: 5000,
        minSlides: 1,
        maxSlides: 1,
        slideWidth: 1920,
        slideMargin: 0,
        pager:true,
        mode:'fade',
        speed:800,

        } );




    $(window).scroll( function(){
      $('#section>.cont').each( function(i){
          
          var bottom_of_element = $(this).offset().top + $(this).outerHeight()/5;
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          
          if( bottom_of_window > bottom_of_element ){
              $(this).animate({'opacity':'1','margin-top':'0px'},700);
          }  
      }); 
  });
    $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
        $('.gotop').fadeIn();
    } else {
        $('.gotop').fadeOut();
    }
    });
    $('.gotop').click(function(){
    $('html, body').animate({scrollTop : 0},600);
    return false;
    });
});