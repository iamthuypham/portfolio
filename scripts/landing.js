var animatePosition = function(pos, index, array) {
    var scrollDistance = $(window).scrollTop() - array[index].offsetTop + array[index].clientHeight;
    if (scrollDistance >= $('.employment').height()) {
      array[index].style.opacity = 1;
      array[index].style.transform = 'scaleX(1) translateY(0)';
      array[index].style.transition = 'duration(0.1)'
    }
  }
  //Event handler executes when browser has loaded
$(document).ready(function() {
  $(window).scroll(function(event) {
    var startAnimate = $('.employment').offset().top - $(window).scrollTop();
    if (startAnimate <= $('.employment').height()) {
      var $positionList = document.querySelectorAll('.position');
      [].forEach.call($positionList, animatePosition);
    };
    //Thumb animation
    if ($(window).scrollTop() >= 1200 && $(window).scrollTop() < 1499) {
      $('.k16').addClass('thumb2016')
    }
    else if ($(window).scrollTop() >= 1500 && $(window).scrollTop() < 1899) {
      $('.k15').addClass('thumb2015')

      console.log($('.thumb2015'))
    }
    else if ($(window).scrollTop() >= 1900) {
      $('.k14').addClass('thumb2014')
    }
  })

});
