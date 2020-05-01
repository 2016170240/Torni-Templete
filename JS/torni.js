$(document).ready(function(){

/********************************* */
// # 1- add active class to navbarlink and scroll to elements //
/******************************** */
  $(".nav li a").click(function(){
      $(this).addClass("active").parent().siblings().find("a").removeClass("active");
  });

  $(".nav li a").click(function(e){
    "use strict";
     e.preventDefault();
     
     $("html , body").animate({
        scrollTop : $("#"+$(this).data("scroll")).offset().top-130
     },1000);
 });
/********************************* */
// # 2- Preloading Access  //
/******************************** */
    var $constrom_window = $(window);
    $constrom_window.on('load', function () {
        $('.preloader').fadeOut(100, function () {
            $(this).remove();
        });
    });
    
/********************************* */
// # 3- Animated navbar  //
/******************************** */

    
$("#wrapper").click( function() {
    $(".icon").toggleClass("close");
    if($(".icon").hasClass("close")){
        $(".nav").animate({left: '0'},500);
    }
    else{
        $(".nav").animate({left: '-75%'},500);
    }
});

/********************************* */
// # 3- To Down //
/******************************** */
$(".todown").on('click', function () {
    $('html, body').animate({
        scrollTop: $("#about").offset().top - 0
    }, 1000);
});
/********************************* */
//4- popup fire //

/******************************** */
$('.pop').magnificPopup({
    type: 'iframe'
// other options
});
/********************************* */
//5- add sticky navbar //

/******************************** */

$(window).scroll(function(){
var sc=$(this).scrollTop();
if(sc>100){
    $(".header").css("backgroundColor","#000")
}
else if(sc<100){
    $(".header").css("backgroundColor","rgba(0,0,0,0.2)")
}
});
/********************************* */
//6- fadein brand //

/******************************** */
$(".li1").click(function(){
    $(".f-b").fadeIn();
    $(".s-b").fadeOut();
    $(".t-b").fadeOut();
    $(this).addClass("active").siblings().removeClass("active");
})
$(".li2").click(function(){
    $(".s-b").fadeIn();
    $(".f-b").fadeOut();
    $(".t-b").fadeOut();
    $(this).addClass("active").siblings().removeClass("active");
})
$(".li3").click(function(){
    $(".t-b").fadeIn();
    $(".f-b").fadeOut();
    $(".s-b").fadeOut();
    $(this).addClass("active").siblings().removeClass("active");
})

/********************************* */
//7- show overlay in work section //

/******************************** */
$(".g1-flex .fg").mouseenter(function(){
    $(".fg .over").slideDown(400);
})
$(".g1-flex .fg").mouseleave(function(){
    $(".fg .over").slideUp(500);
})



$(".g1-flex .sg").mouseenter(function(){
    $(".sg .over").slideDown(400);
})
$(".g1-flex .sg").mouseleave(function(){
    $(".sg .over").slideUp(500);
})




$(".g1-flex .tg").mouseenter(function(){
    $(".tg .over").slideDown(400);
})
$(".g1-flex .tg").mouseleave(function(){
    $(".tg .over").slideUp(500);
})




$(".g1-flex .fog").mouseenter(function(){
    $(".fog .over").slideDown(400);
})
$(".g1-flex .fog").mouseleave(function(){
    $(".fog .over").slideUp(500);
})



$(".g1-flex .fig").mouseenter(function(){
    $(".fig .over").slideDown(400);
})
$(".g1-flex .fig").mouseleave(function(){
    $(".fig .over").slideUp(500);
})


$(".g1-flex .sg").mouseenter(function(){
    $(".sg .over").slideDown(400);
})
$(".g1-flex .sg").mouseleave(function(){
    $(".sg .over").slideUp(500);
})


/********************************* */
//8- Fire mixitup plugin //

/******************************** */

var mixer = mixitup('.gallery',{
    animation:{
        effectsOut : 'fade scaleX(-100%)'
    }
})
$(".links-ul button").click(function(){
    $(".links-ul button").removeClass("active");
    $(this).addClass("active"); 
})

 
/********************************* */
//8- Fire magnificPopup in work section //

/******************************** */

$('.test-popup-link').magnificPopup({
    type: 'image',
    // other options
    gallery : {
        enabled :true
    }
  });

/********************************* */
//8- Fire Owelcarousal plugin //

/******************************** */


$('.slick').owlCarousel({
   dots:false,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:true
        },
        1000:{
            items:3,
            nav:true
        }
    }
})
/********************************* */
//9- Expand p in question section //

/******************************** */
$(".q-content1 .head1 h3").click(function(){
$(".q-content1 .p1").slideToggle(300);
});


$(".q-content2 .head1 h3").click(function(){
$(".q-content2 .p1").slideToggle(300);
 });


$(".q-content3 .head1 h3").click(function(){
$(".q-content3 .p1").slideToggle(300);
});


$(".q-content4 .head1 h3").click(function(){
$(".q-content4 .p1").slideToggle(300);
});

$(".q-content5 .head1 h3").click(function(){
$(".q-content5 .p1").slideToggle(300);
});


/********************************* */
//10- fire owel carousal on supportes section //

/******************************** */

$('.sup').owlCarousel({
    loop:true,
    margin:10,
    dots:false,
    responsiveClass:true,
    responsive:{
        0:{
            items:2,
            loop:true
        },
        600:{
            items:3,
            loop:true
        },
        1000:{
            items:4,
            loop:true
        }
    }
})
/********************************* */
//10- focus on input form and textarea //

/******************************** */
$("input").focus(function(){
    $(this).css("borderColor","#21C87A")
})
$("input").blur(function(){
    $(this).css("borderColor","#ddd")
})


$("textarea").focus(function(){
    $(this).css("borderColor","#21C87A")
})
$("textarea").blur(function(){
    $(this).css("borderColor","#ddd")
})



});


/*to top button*/
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    
    $("html,body").animate({scrollTop:0},'500')
}
