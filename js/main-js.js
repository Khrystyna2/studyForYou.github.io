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
      $(this).find('.sub-menu').fadeToggle(200);
    });
  }

  $('.slider-first').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
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
          centerPadding: '60px'
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
    ]
  });

 

});

