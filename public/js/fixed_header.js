window.onscroll = function() {myFunction()};

function myFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("header").className = "header-fixed w3-animate-top";
        document.getElementById("break-fixed").style.display = "block";
    } else {
        document.getElementById("header").className = "";
        document.getElementById("break-fixed").style.display = "none";
    }
}
