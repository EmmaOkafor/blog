// fixed header
// window.onscroll = function() {myFunction()};
//
// var header = document.getElementById("myHeader");
// var sticky = header.offsetTop;
//
// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }

// slide animation
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
