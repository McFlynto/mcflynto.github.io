$('document').ready(function() {
  /* Toggle menu to show or hide on click*/
  $('#button1').on('click touch', function(e) {
    e.stopPropagation();
    $('.icon, .menuresponsive').toggleClass('responsive');
  });
  $('.menuresponsive').on('click touch', function(e) {
    e.stopPropagation();
  });
  $('body,html,.content,.footer').on('click touch', function(e) {
    $('.menuresponsive, .icon').removeClass('responsive');
  });
});
