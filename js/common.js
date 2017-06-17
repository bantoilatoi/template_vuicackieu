//function navigator home background
var navigatorHome = function(){
  var viewport = $(window).width();
  var winheight = $(window).height();
  if (viewport > 991){
    $('.main-slider .ms-item').css({
      height: winheight
    });
  }
};

$(document).ready(function(){

  navigatorHome();

  //heartslider
  $('#heartslider').owlCarousel({
    loop:true,
    margin:0,
    items:1,
    responsiveClass:false,
    nav:true,
    dots:false,
    autoplay:true,
    autoHeight:false,
    autoplayTimeout:5000,
    smartSpeed:1000,
    autoplayHoverPause:false,
    navText:false,
  });

  //scroll to #about
  $('.scroll-down').click(function (e) {
    e.preventDefault();
    $('html, body').animate({scrollTop: $('#about').offset().top}, 800);
  });

	//productslider
  $('#productslider').owlCarousel({
    loop:true,
    margin:1,
    items:4,
    responsiveClass:false,
    nav:true,
    dots:false,
    autoplay:false,
    autoHeight:false,
    autoplayTimeout:4000,
    autoplayHoverPause:false,
    navText:false,
  });

  //partnerslider
  $('#partnerslider').owlCarousel({
    loop:true,
    margin:20,
    items:4,
    responsiveClass:false,
    nav:false,
    dots:false,
    autoplay:true,
    autoHeight:false,
    autoplayTimeout:4000,
    autoplayHoverPause:false,
    navText:false,
  });

  //clientslider
  $('#clientslider').owlCarousel({
    loop:true,
    margin:35,
    items:3,
    responsiveClass:false,
    nav:false,
    dots:false,
    autoplay:true,
    autoHeight:false,
    autoplayTimeout:6000,
    autoplayHoverPause:false,
    navText:false,
  });

});

$(window).on('resize', function(){

  navigatorHome();

});