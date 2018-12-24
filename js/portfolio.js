$(".navbar-brand").hover(
  function() {  
  	var colors = ["#FF7373","#FFDF00","#AC6CF0", "#2B9AFF", "#5EFFAE"];                
	var rand = Math.floor(Math.random()*colors.length);     
  	$('.navbar-brand').css("background-image", "linear-gradient(120deg, " + colors[rand] + " 0%, " + colors[rand] + " 100%)");
  	console.log('hovered');
});

$(".navbar-nav .nav-link").on("click", function(){
   $(".navbar-nav").find(".active").removeClass("active");
   console.log($(this));
   $(this).addClass("active");
   $('.navbar-collapse').collapse('hide');
});

$('.nav-link').click(function() {
	console.log('clicked');
    var sectionTo = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(sectionTo).offset().top
    }, 600);
});