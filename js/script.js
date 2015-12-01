$(document).ready(function() {
  $(window).scroll(function(){
    $('*[class^="prlx"]').each(function(r){
      var pos = $(this).offset().top;
      var scrolled = $(window).scrollTop();
        $('*[class^="prlx"]').css('top', -(scrolled * 0.5) + 'px');     
      });
  });

  $(".popup").fancybox({
            maxWidth  : 800,
            maxHeight : 600,
            fitToView : true,
            width   : '70%',
            height    : '70%',
            autoSize  : false,
            closeClick  : false,
            openEffect  : 'none',
            closeEffect : 'none'
          });

   // Insert Responsive Sidebar Icon
    $('<div class="responsive-nav-icon" />').appendTo('.section-one');
    $('<div class="responsive-nav-close" />').appendTo('nav');
    $('<div id="overlay" />').insertAfter('footer');

    // Navigation Slide In
    $('.responsive-nav-icon').click(function() {
    $('nav').addClass('slide-in');
    $('html').css("overflow", "hidden");
    $('#overlay').show();
    return false;
    });

    // Navigation Slide Out
    $('#overlay, .responsive-nav-close').click(function() {
    $('nav').removeClass('slide-in');
    $('html').css("overflow", "auto");
    $('#overlay').hide();
    return false;
    });
    
});