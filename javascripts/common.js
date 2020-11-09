
$(function (){
  //fadein
  $(window).scroll(function (){
    $('.fadein, .fadein-left, .fadein-right').each(function(){
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > position - windowHeight + 100){
        $(this).addClass('fadein-active');
      }
    });
  });
})
