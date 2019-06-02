$(document).ready(function(){

  // add custom class at nav
  $('.nav-item a').on('click', function(){
    $('.nav-item a').removeClass('current');
    $(this).addClass('current');
  });
  
  // slider for backgrounds on hero section
    var swiper1 = new Swiper('.hero_bg_container', {
      loop: true,
      autoplay: true,
      speed: 4000,
    });

    // slider for text on hero section
    var swiper2 = new Swiper('.hero_fg_container', {
      allowTouchMove: false,
      loop: true,
      autoplay: true,
      speed: 4000,
      direction: 'vertical',
    });

    // slider for awards
    var swiper3 = new Swiper('.awards_swiper_container', {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      // autoplay: true,
      pagination: {
        el: '.swiper-paginate',
        clickable: true,
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        576: {
           slidesPerView: 1,
           spaceBetween: 10,
         },
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

    // slider for reviews

    var swiper4 = new Swiper('.reviews_container', {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      // autoplay: true,
      speed: 4000,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        600: {
           slidesPerView: 1,
           spaceBetween: 10,
         },
      }
    });
 
    // burger menu
    $('.navbar_button').click(function(){
      $(this).toggleClass('open');
      $('.sections_wrap').toggleClass('slide');
      $('.navbar').toggleClass('slide');
    });

    // fix navbar
    $(window).scroll(function(){
        if($(this).scrollTop() > 50){
            $('.navbar-logo').css('max-width', '50px');
            $('.navbar').css('background-color', 'rgba(0, 0, 0, .6)');
        }
        else{
          $('.navbar-logo').css('max-width', '80px');
          $('.navbar').css('background-color', '$color-primary');
        }
    });

    // Anchor links
    $(".nav-item").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top - 30 + "px"}, 1500);
      $('.navbar_button').removeClass('open');
      $('.sections_wrap').removeClass('slide');
      $('.navbar').removeClass('slide');
  });

  // init animation & destroy on mobile
  var wow = new WOW(
    {
      mobile:       false,
    }
  );
  wow.init();
});
