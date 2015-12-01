$(document).ready(function() {
  $(window).scroll(function(){
    $('*[class^="prlx"]').each(function(r){
      var pos = $(this).offset().top;
      var scrolled = $(window).scrollTop();
        $('*[class^="prlx"]').css('top', -(scrolled * 0.5) + 'px');     
      });
  });
});