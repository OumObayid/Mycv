//initialisation aos
AOS.init(); 
//fonction onscroll() for Navigation active state on scroll
function onScroll(){
  var scrollPosition = $(document).scrollTop();
  $('.navbar-nav a').each(function () {
    var currentLink = $(this);
    var refElement = $(currentLink.attr("href"));
    if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
      $('.navbar-nav li a').removeClass("active");
      currentLink.addClass("active");
    }
    else{
      currentLink.removeClass("active");
    }
  });
}
//jquery
$(document).ready(function () {  
    //mettre la page au top lors de son rechargement
    $('html, body').animate({ 
        scrollTop: '0px' 
    }); 
   
     //navbar
    $(document).scroll(function () {
      var $nav = $(".navbar");
      $nav.toggleClass('invisible', $(this).scrollTop() > 40 && $(this).scrollTop()<499);
      $nav.toggleClass('scrolled', $(this).scrollTop() > 500);
    }); 

    // Un défilement animé (« Smooth scroll ») en jQuery sans plugin
    $('a[href^="#"]').click(function () {
        var the_id = $(this).attr("href");
        if (the_id === '#') {
            return;
        }
        $('html, body').animate({
            scrollTop: ($(the_id).offset()).top - 70
        }, 'slow');
        return false;
    });

    // Back to top button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
        $('.back-to-top').fadeIn('slow');
        } else {
        $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function() {
        $('html, body').animate({
        scrollTop: 0
        }, 1500);
        return false;
    });

 // Navigation active state on scroll
        $(document).on("scroll", onScroll);
				$('a[href^="#"]').on('click', function (e) {
					e.preventDefault();
					$(document).off("scroll");

					$('a').each(function () {
						$(this).removeClass('active');
					})
					$(this).addClass('active');

					var target = this.hash;
					$target = $(target);
					$('html, body').stop().animate({
						'scrollTop': $target.offset().top
					}, 500, 'swing', function () {
						window.location.hash = target;
						$(document).on("scroll", onScroll);
					});
				});
        
       
 



});