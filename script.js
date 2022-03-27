$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY >20){
               $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }

        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }

    });

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    
      // slide-up script
      $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});

        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        
        $('html').css("scrollBehavior", "smooth");
    });
   
    var typed = new Typed(".typing", {
        strings: [" Play like a champion", " Refuse to lose", " Stroke it, don’t poke it", " Handle balls with care", " Shoot Good, play better", "Fight till victory", "Practice, Practice, Practice" ,"Addicted to billiard"],
        typeSpeed: 50,
        backSpeed: 40,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Champions", "50 Pool Tables", "High-Density WIFI", "3 Lounges", "Night-Club", "5 Big-Tvs"],
        typeSpeed: 90,
        backSpeed: 50,
        loop: true
    });

    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });

    
    

})