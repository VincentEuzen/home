  // Annimation au click pour cercle bouton

$(document).ready(function() {


  $('.cercle-middle').on('click', function() {
    $(this).toggleClass('cercle-when-clicked');
    // if ($(this).hasClass('cercle-when-clicked')) {
    //   $(this).removeClass('cercle-when-clicked').removeClass('cercle-middle').addClass('cercle-when-clicked-return');
    // } else {
    //   $(this).removeClass('cercle-middle').addClass('cercle-when-clicked');
    // }
    $('.left').toggleClass('all-screen-width');
    $('.right').toggleClass('right-hidden');
    $('.image-right-1').toggleClass('image-right-1-hidden');
    $('.image-right-2').toggleClass('image-right-2-hidden');
    // $('.image-right-2').toggleClass('image-right-2-return');
    // $('.cercle-middle-fin').toggleClass('cercle-middle-fin-extend');
    // $('#img-semi-cercle').toggleClass('img-semi-cercle-extend');
    $('#hidden-text-menu').toggleClass("hidden-for-js");
    $('#hidden-text-menu').toggleClass("show fadeInNew");
    $('.texte').toggleClass("hidden-for-js");
    $('.texte').toggleClass("show");
  });


  // Effet Smooth scroll

  var scroll = new SmoothScroll('a[href*="#"]');

});





  // Boxs

$(document).ready(function() {

$('.box-test-1').hover(function(){
    $('.text-box').toggleClass('text-box-hover');
  });

$('.box-test-1').hover(function(){
    $('.btn-box').toggleClass('btn-box-hover');
  });


$('.box-test-1').hover(function(){
    $('.img-bg').toggleClass('img-bg-hover');
  });

$('.box-test-2').hover(function(){
    $('.text-box-2').toggleClass('text-box-hover-2');
  });

$('.box-test-2').hover(function(){
    $('.btn-box-2').toggleClass('btn-box-hover-2');
  });


$('.box-test-2').hover(function(){
    $('.img-bg-2').toggleClass('img-bg-hover-2');
  });

$('.box-test-3').hover(function(){
    $('.text-box-3').toggleClass('text-box-hover-3');
  });

$('.box-test-3').hover(function(){
    $('.btn-box-3').toggleClass('btn-box-hover-3');
  });


$('.box-test-3').hover(function(){
    $('.img-bg-3').toggleClass('img-bg-hover-3');
  });


$('.box-test-4').hover(function(){
    $('.text-box-4').toggleClass('text-box-hover-4');
  });

$('.box-test-4').hover(function(){
    $('.btn-box-4').toggleClass('btn-box-hover-4');
  });


$('.box-test-4').hover(function(){
    $('.img-bg-4').toggleClass('img-bg-hover-4');
  });


$('.h2-footer').hover(function(){
    $('.h3-footer').toggleClass('h3-footer-up');

  });
});


  // Effet parallax

$(document).ready(function () {
    $('.all-screen-top').mousemove(function (e) {
        parallax(e, document.getElementById('pic-hole'), 1);
        parallax(e, document.getElementById('pic-me'), 2);
    });
});

function parallax(e, target, layer) {
    var layer_coeff = 10 / layer;
    var x = ($(window).width ()) / 3 - (e.pageX - ($(window).width())) / layer_coeff;
    var y = ($(window).height() - target.offsetHeight) / 2 - (e.pageY - ($(window).height() / 2)) / layer_coeff;
    $(target).offset({ top: y ,left : x });
};


  // Changer photo dynamiquement top

$(document).ready(function() {
var pictures = [
        "https://img15.hostingpics.net/pics/864310testbgtop3.jpg",
        "https://img15.hostingpics.net/pics/215850testbgtop13.jpg",
        "https://img15.hostingpics.net/pics/227457testbgtop11.jpg",

    ];
    var img = document.getElementById("pic-me");
    var currentIndex = 0;
    var slideshowTimer;

    (function nextImg(){
        slideshowTimer = Date.now();
        img.src=pictures[currentIndex];
        img.onload=function(){
            currentIndex = (currentIndex + 1) % pictures.length;
            var remainingTime = 4000 - (Date.now() - slideshowTimer);
            if(remainingTime>0){ setTimeout(nextImg, remainingTime); }
            else { nextImg(); }
        };
    })();

    });

