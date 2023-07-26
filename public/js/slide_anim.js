$(document).ready(function(){
  $(window).scroll(function() {
    $(".slide-anim-div").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          // alert("Hi");
          $(this).addClass("slide-anim");
        }
    });
  });
  $(window).load(function() {
    $(".slide-anim-div").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide-anim");
        }
    });
  });
})
