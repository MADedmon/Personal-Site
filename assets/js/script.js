
jQuery(document).ready(function ($) {

    $(document).foundation();

  
  // Active Nav Link
   $('nav ul li a').click(function(){
         $('nav ul li a').removeClass('active');
          $(this).addClass('active');
     });


var $window   = $(window),
    height    = $window.height(),
    width     = $window.width(),
    navheight = $('#wrapper-title').height();

function sticky(){
  var scrollTop = $window.scrollTop();
  if (scrollTop > (navheight)) {
    $('.top-bar').addClass('sticky');
    $('nav').addClass('nav_animate');
    setTimeout(function(){
      $('.menu-text').css({
        'left': 3 + '%', 
        'transition':'.5s'
      });     
      $('#resume').css({
        'right': 5 + '%', 
        'transition':'.5s'
      });
    }, 200);
    
  } else {
    $('.top-bar').removeClass('sticky');
    $('nav').removeClass('nav_animate');
    setTimeout(function(){
      $('.menu-text').css({
        'left':-150, 
        'transition':'.5s'
      });     
      $('#resume').css({
        'right':-150, 
        'transition':'.5s'
      });
    }, 200);
  }
} 

$window.on('scroll', sticky);  

// //Navigational Menu
// $('nav a').click(function(a){
//   var menuPlace = $(this).index();
//   a.preventDefault();
//   $('html, body').animate({
//     scrollTop : $('section').eq(menuPlace).offset().top - $('nav').height()
//   }, 700);
// });

$('.project-slider').slick({
  infinite: true,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: true,
  dots:true,
  slidesToShow: 3,
  variableWidth:true


});

$('.project-modal-slider').slick({
  infinite: true,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  dots:true,
  slidesToShow: 1,
  variableWidth:true
});

 $('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: true,
  centerMode: true,
  focusOnSelect: true
});

})