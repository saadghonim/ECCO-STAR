
$(document).ready(function(){
/*~~~~~~~~~~~~~~~~~~start header~~~~~~~~~~~~~~~~~ */
// ~~~~~~~~~~~~btn search
$(".search_m").click(function(){
  $(".input_div_parant").slideToggle("500");
  $(".toggle_.la-search").toggleClass("la-times")
});

// ~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~navbar
$(".bars_").click(function(){
  $("nav").toggle("500");
  $("body").addClass("over_");
});
$(".close_").click(function(){
  $("nav").toggle("500");
  $("body").removeClass("over_");
});
$(".li_hover").click(function(){
  $(this).children().next().slideToggle("500");
});
// ~~~~~~~~~~~~~~~~~~
/*~~~~~~~~~~~~~~~~~~end header~~~~~~~~~~~~~~~~~ */

/*~~~~~~~~~~~~~~~~~~start slider~~~~~~~~~~~~~~~ */

$('.slider .owl-carousel').owlCarousel({
  loop:true,
  nav:true,
  autoplay:true,
  rtl: $("html").attr("dir") == "rtl" ? true : false,
  navText: ["<i class='las la-angle-right'></i>", "<i class='las la-angle-left'></i>"],
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
})
/*~~~~~~~~~~~~~~~~~~end slider~~~~~~~~~~~~~~~~~ */
/*~~~~~~~~~~~~~~~~~~start new~~~~~~~~~~~~~~~~~~ */
if ($(window).width() <= 767 ){
  $(".remove_").removeClass("row");


}

/*~~~~~~~~~~~~~~~~~~end new~~~~~~~~~~~~~~~~~~~~ */

/*~~~~~~~~~~~~~~~~~~start Category~~~~~~~~~~~~~~~~~~~~ */

$('.Category .owl-carousel').owlCarousel({
  loop:true,
  nav:true,
  // autoplay:true,
  margin:30,
  navText: ["<i class='las la-angle-right'></i>", "<i class='las la-angle-left'></i>"],
  rtl: $("html").attr("dir") == "rtl" ? true : false,
  responsive:{
      0:{
          items:3,
          margin:10
      },
      600:{
          items:2
      },
      1000:{
          items:6
      }
  }
});
/*~~~~~~~~~~~~~~~~~~end Category~~~~~~~~~~~~~~~~~~~~ */

/*~~~~~~~~~~~~~~~~~~start Bestseller~~~~~~~~~~~~~~~~~~~~ */

$('.Bestseller .owl-carousel').owlCarousel({
  loop:true,
  nav:true,
  stagePadding: 1,
  // autoplay:true,
  margin:30,
  navText: ["<i class='las la-angle-right'></i>", "<i class='las la-angle-left'></i>"],
  rtl: $("html").attr("dir") == "rtl" ? true : false,
  responsive:{
      0:{
          items:2,
          margin:15
      },
      600:{
          items:2
      },
      1000:{
          items:4
      }
  }
});
/*~~~~~~~~~~~~~~~~~~end Bestseller~~~~~~~~~~~~~~~~~~~~ */

/*~~~~~~~~~~~~~~~~~~start Bestseller~~~~~~~~~~~~~~~~~~~~ */

$('.brands .owl-carousel').owlCarousel({
  loop:true,
  nav:true,
  // autoplay:true,
  margin:30,
  navText: ["<i class='las la-angle-right'></i>", "<i class='las la-angle-left'></i>"],
  rtl: $("html").attr("dir") == "rtl" ? true : false,
  responsive:{
      0:{
          items:3,
          margin:15
      },
      600:{
          items:4
      },
      1000:{
          items:6
      }
  }
});
/*~~~~~~~~~~~~~~~~~~end Bestseller~~~~~~~~~~~~~~~~~~~~ */


$(window).load(function() {
  $(".preloader-sa").fadeOut();
});

});