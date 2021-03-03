// // mobile detection

if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    var mobile = true;
  } else {
    var mobile = false;
  }
  
  var $ = jQuery;
  var winh = $(window).height();
  
  $(window).ready(function () {
  
   function scrollBtn() {
      $("#scroll-btn")
        .css("opacity", "1")
        .animate(
          {
            bottom: "40px",
            // opacity: '1',
          },
          600,
          "linear",
          function () {
            $("#scroll-btn").animate(
              {
                bottom: "20px",
                opacity: "0",
              },
              300,
              "linear",
              function () {
                $("#scroll-btn").animate(
                  {
                    bottom: "60px",
                    transition: "none",
                  },
                  0,
                  scrollBtn
                );
              }
            );
          }
        );
    }
    scrollBtn();
          
  $("#nav-header").mouseenter(function () {
       $('#logoEmesh').removeClass('bleach');
  
      $(".elementor-button-link.elementor-button.elementor-size-sm").css("border-color", "#a07d3e");
          $("#nav-header").css("background", "#fff");
  });
  $("#nav-header").mouseleave(function () {
      $("#logoEmesh").addClass("bleach");
          $("#nav-header").css("background", "transparent");
      $(".elementor-button-link.elementor-button.elementor-size-sm").css("border-color", "initial");
  });
  
  
  //arrow slider effect
  $(".ae-swiper-outer-wrapper").mouseenter(function () {
      $(".ae-swiper-button-prev").attr("style", "left: 94% !important"); 
      $(".ae-swiper-button-prev").css('opacity','1')
      $(".ae-swiper-button-next").attr("style", "right: 94% !important");  
      $(".ae-swiper-button-next").css('opacity','1')
  });
  $(".ae-swiper-outer-wrapper").mouseleave(function () {
      $(".ae-swiper-button-prev").attr("style", "left: 96% !important");  
      $(".ae-swiper-button-prev").css('opacity','0')
      $(".ae-swiper-button-next").attr("style", "right: 96% !important");  
      $(".ae-swiper-button-next").css('opacity','0')
  });
      
  $("#carouselSlide").mouseenter(function () {	
      $(".jet-arrow.prev-arrow ").attr("style", "left: 20px !important"); 
      $(".jet-arrow.prev-arrow ").css('opacity','1');
      $(".jet-arrow.next-arrow ").attr("style", "right: 20px !important"); 
      $(".jet-arrow.next-arrow ").css('opacity','1');
      });
      $("#carouselSlide").mouseleave(function () {	
          $(".jet-arrow.prev-arrow ").attr("style", "left: 0 !important"); 
          $(".jet-arrow.prev-arrow ").css('opacity','0');
          $(".jet-arrow.next-arrow ").attr("style", "right: 0 !important"); 
          $(".jet-arrow.next-arrow ").css('opacity','0');
          });
      
     $("#nav-header").mouseleave(function () {
      $("#menu-butt")
        .find(".elementor-button")
        .css("border-color", "#fff", "important");
      
    });
  
        $("#nav-header").mouseleave(function () {
      $("#logoEmesh").addClass("bleach");
      $("#nav-header").css("background", "transparent");
        });	
   
  
    $("#footerForm").mouseenter(function () {
      $("#joinBut").css("color", "black");
      $("#joinBut").css("background", "white");
    });
    $("#footerForm").mouseleave(function () {
      $("#joinBut").css("color", "white");
      $("#joinBut").css("background", "initial");
    });
  });
  
    // nav bar on scroll
    var lastScrollTop = 0;
    if (!$("body").hasClass("elementor-editor-active")) {
      $(window).scroll(function (event) {
        var st = $(this).scrollTop();
  
             if ($(window).scrollTop() > winh / 10) {
      $(".elementor-button-link.elementor-button.elementor-size-sm").css("border-color", "#fff");
          $("#nav-header").css("height", "100px");
          $("#logoEmesh").addClass("bleach");	
          
      $("#nav-header").css("background", "transparent", "!important");
        }
          
     //   $(window).scrollTop() > winh / 7
     //     ? $("#logoEmesh").removeClass("bleach")
     //     : $("#logoEmesh").addClass("bleach");
  
      
          
     
          
        if ($(window).scrollTop() > winh / 6) {
            $("#logoEmesh>img").css("max-width", "65px", "!important");
  
            $("#nav-header").css("height", "83px");	
          $("#nav-header").addClass("scrolled");
             $("#logoEmesh").removeClass("bleach");
            $(".elementor-button-link.elementor-button.elementor-size-sm").css("border-color", "#a07d3e");
                $("#nav-header").css("background", "#fff");
        }
      
      
          if (st > lastScrollTop && $(window).scrollTop() > 0) {
            // downscroll code
            $("#nav-header").addClass("down");
                $("#logoEmesh").removeClass("bleach");
              
              $("#nav-header").css("background", "#fff");
       //   } else {
            // upscroll code
      
         
        } else {
                $("#nav-header").removeClass("down");
          $("#nav-header").removeClass("scrolled");
       }
        lastScrollTop = st;
      });
    }
    if (!$("body").hasClass("elementor-editor-active")) {
    }
  
  