$(".navbar-brand").hover(
  function() {  
  	var colors = ["#FF7373","#FFDF00","#AC6CF0", "#2B9AFF", "#5EFFAE"];                
	var rand = Math.floor(Math.random()*colors.length);     
  	$('.navbar-brand').css("background-image", "linear-gradient(120deg, " + colors[rand] + " 0%, " + colors[rand] + " 100%)");
  	console.log('hovered');
});

$(".navbar-nav .nav-link").on("click", function(){
   $(".navbar-nav").find(".active").removeClass("active");
   $(this).parent().addClass("active");
   $('.navbar-collapse').collapse('hide');
});

$(function(){
    $('.navbar a[href*=#]').click(function() {smoothScroll(this)});
});

$('.nav-link').click(function() {
	console.log('clicked');
    var sectionTo = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(sectionTo).offset().top
    }, 600);
});

 $(window).on('scroll', function(event){
   var scrollPos = $(document).scrollTop();
   $(".nav li a").each(function () {
     var currLink = $(this);
     var refElement = $(currLink.attr("href"));

     if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
       currLink.parent().addClass("active").siblings().removeClass("active"); 
       return;
     }
     else{
       currLink.parent().removeClass("active");
     }
   })
 })