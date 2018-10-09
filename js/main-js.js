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

 

});

