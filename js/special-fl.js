!function(){
  $('.fimg').each(function() {
    var attr = $(this).attr('data-image-src')
    if (typeof attr !== typeof undefined && attr !== false) {
      $(this).css('background-image', 'url('+attr+')')
    }
  })
  $('.scroll-top').on('click', function () {
    $('html, body').stop().animate({ scrollTop: 0 }, 2000, 'easeInOutExpo')
    return false
  })
  $('a').on('click', function () {
    if ( $(this).attr('href').indexOf('#') > -1 ) {
      $('html, body').stop().animate({ scrollTop: $('#'+$(this).attr('href').replace('#','')).offset().top }, 2000, 'easeInOutExpo');
      return false
    }
  })
}()