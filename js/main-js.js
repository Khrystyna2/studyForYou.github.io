$(document).ready(function() {

  $('.language').click(function() {
    $('.language > li ul').slideToggle();
  });

  if ($(window).width() > 1024) {
    $('.menu-down').hover(function () {
        $(this).find('.sub-menu').fadeIn(200);
    }, function () {
      $(this).find('.sub-menu').fadeOut(200);
    });
  }
  if ($(window).width() <= 1024) {
    $('.menu-down').click(function () {
      $(this).find('.sub-menu').slideToggle(200);
    });
  }

  $('.slider-first').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    speed: 1000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },{
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.box-image').slick({
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          centerMode: true,
          centerPadding: '30px'
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          centerMode: true,
          centerPadding: '40px'
        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          centerMode: true,
          centerPadding: '40px'
        }
      }
    ]
  });

  $('.slider-news').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true
        }
      }
      ,{
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          centerMode: true,
          centerPadding: '40px'
        }
      }
    ]
  });

  $('.btn-menu').click(function() {
    $('.menu').slideToggle();
  });

//fixed menu
  let heightHeader = $('.header-menu').outerHeight(true);
  $('<div class="clone-header-menu"></div>').insertBefore('.header-menu').css('height', heightHeader).hide();
  $(window).scroll(function(){
    let winTop = $(window).scrollTop();
    if(winTop >= 100){
      $(".header-menu").addClass("sticky");
      $('.clone-header-menu').show();
    }else{
      $(".header-menu").removeClass("sticky");
      $('.clone-header-menu').hide();
    }
  });

  $('.slider-certificates, .slider-partners').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.btn-left-menu').click(function() {
    $('.left-menu').slideToggle();
    $(this).toggleClass('return');
  });


  $('.banner-slider').slick({
    infinite: true,
    // autoplay: true
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    speed: 600
  });


  $('.partners-slider').slick({
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  //select

  $('select').styler();

  $( function() {
    $( "#datepicker" ).datepicker();
  });



  $('.filter').click(function() {
    $('.suggestions').slideDown();
  });

  $('.close-filter').click(function() {
    $('.suggestions').slideUp();
  });

});

