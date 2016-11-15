var runTimer = function(scrollLock) {
  $('.timer').countTo();
}
$(document).ready(function() {
  $(window).scroll(function(event) {
    var startAnimate = $('.experience').offset().top - $(window).scrollTop();
    if (startAnimate <= $('.experience').height()) {
      runTimer();
    }
  });
});
    