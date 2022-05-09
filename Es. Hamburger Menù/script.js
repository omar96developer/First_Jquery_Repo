$(document).ready( function () {
  let menu = $('.menu--mobile');

  $('.hamburger').click(function () {
    if($(this).hasClass('is-active')){
      $(this).removeClass('is-active white');
  
      menu.removeClass('visible');

    } else {
      $(this).addClass('is-active white');
  
      menu.addClass('visible');
    }
  });
});