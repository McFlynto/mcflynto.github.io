$('document').ready(function() {
  /* Toggle menu to show or hide on click*/
  $('#button1').click(function(e) {
    e.stopPropagation();
    $('.icon, .menuresponsive').toggleClass('responsive');
  });
  $('.menuresponsive').click(function(e) {
    e.stopPropagation();
  });
  $('body,html').click(function(e) {
    $('.menuresponsive, .icon').removeClass('responsive');
  });
});
