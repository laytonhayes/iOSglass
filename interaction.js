$(document).ready(function() {
  $(window).scroll(function() {
    scroll = $(this).scrollTop();
    if (scroll > 0 && scroll < 530) {
      $('#blur img.blurred').css({
        'clip' : 'rect('+(525 - scroll)+'px, 4000px, 530px, 0)'
      });
    }
  })
});