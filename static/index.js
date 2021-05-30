jQuery(document).ready(function() {

    new WOW().init();

    // console.log($('.aboutus').offset().top);
    
    $('.logovamenu ul li:nth-child(2) a').on('click',function(event){
        event.preventDefault();

        $('html,body').animate({ scrollTop: $('.aboutus').offset().top},1000);
    });
    $('.logovamenu ul li:nth-child(3) a').on('click',function(event){
        event.preventDefault();

        $('html,body').animate({ scrollTop: $('.contactt').offset().top},1000);
    });
    $('.logovamenu1 ul li:nth-child(2) a').on('click',function(event){
      event.preventDefault();

      $('html,body').animate({ scrollTop: $('.contactt').offset().top},1000);
  });
    var btn = $('#button');

    $(window).scroll(function() {
      console.log(window.pageYOffset);
      if ($(window).scrollTop() > 300) {
        btn.addClass('show');
      } else {
        btn.removeClass('show');
      }
    });
  
    btn.on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({scrollTop:0}, '300');
    });
});