$(window).on('load', function(){

  //새로고침시 맨 위로
  setTimeout (function () {
    scrollTo(0,0);
    },100);

  //슬라이더
    $('.slide-group').slick({
        autoplay:true,        
        autoplaySpeed:3000,  
        dots:true,          
        arrows:true,          
        prevArrow:'<button class="slick-prev slick-arrow"><i class="fa-solid fa-angle-left"></i></button>',
        nextArrow:'<button class="slick-next slick-arrow"><i class="fa-solid fa-angle-right"></i></button>',
        responsive: [ 
        {  
          breakpoint: 1024,
          settings: {
            slidesToShow: 1
          } 
        },
        { 
          breakpoint: 768,
          settings: {    
            slidesToShow: 1
          } 
        }
      ]
    })

//컨텐츠박스 애니메이션
    $(window).scroll( function(){
      $('#section>.cont').each( function(i){
          
          var ele = $(this).offset().top + $(this).outerHeight()/3;
          var wdw = $(window).scrollTop() + $(window).height();
          
          if( wdw > ele ){
            $(this).addClass('animate');
          }else {
            $(this).removeClass('animate');
          }
      }); 
  });

//맨 위로 버튼
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