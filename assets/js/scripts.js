//mobile menu

var menuOpen = false;

$("#mobile-menu-button").click(function () {
  $("header").toggleClass("mobile-nav-open");
  $("body").toggleClass("overflow-hidden");
  //change variable value to the opposite of what it current is
  menuOpen = !menuOpen;

  if (menuOpen == true) {
    $(this).children("span").text("Close");
    var close = $(this)
      .children("img")
      .attr("src")
      .replace("hamburger", "close");
    $(this).children("img").attr("src", close);
  } else {
    $(this).children("span").text("Menu");
    var hamburger = $(this)
      .children("img")
      .attr("src")
      .replace("close", "hamburger");
    $(this).children("img").attr("src", hamburger);
  }
});

//open and close mobile sub nav

$(" header nav menu li button").click(function () {
  $(this).toggleClass("rotate-chevron");
  $(this).next().toggleClass("hidden-mobile");
});

//testimonials

//clicking the right button
$("#testimonials button.right-arrow").click(function () {
  //if there is no testimonial after this one
  if ($("#testimonials figure.active").is(":last-of-type")) {
    $("#testimonials figure.active").toggleClass("active hidden");
    //make the first one active
    $("#testimonials figure:first-of-type").toggleClass("active hidden");
    $("#slider-dots button:first-of-type").toggleClass("active");
    $("#slider-dots button:last-of-type").toggleClass("active");
  } else {
    $("#testimonials figure.active")
      .toggleClass("active hidden")
      .next("figure")
      .toggleClass("active hidden");
    $("#slider-dots button.active")
      .toggleClass("active")
      .next("button")
      .toggleClass("active");
  }
});

//clicking the left button
$("#testimonials button.left-arrow").click(function () {
  if ($("#testimonials figure.active").is(":first-of-type")) {
    $("#testimonials figure.active").toggleClass("active hidden");
    $("#testimonials figure:last-of-type").toggleClass("active hidden");
    $("#slider-dots button:first-of-type").toggleClass("active");
    $("#slider-dots button:last-of-type").toggleClass("active");
  } else {
    $("#testimonials figure.active")
      .toggleClass("active hidden")
      .prev("figure")
      .toggleClass("active hidden");
    $("#slider-dots button.active")
      .toggleClass("active")
      .prev("button")
      .toggleClass("active");
  }
});

//pet gallery
$("#pet-gallery button.right-arrow").click(function () {
  if ($("#pet-gallery figure.active").is(":last-of-type")) {
    $("#pet-gallery figure.active").toggleClass("active hidden");
    $("#pet-gallery figure:first-of-type").toggleClass("active hidden");
    $("#gallery-thumbnails button:first-of-type").toggleClass("active");
    $("#gallery-thumbnails button:last-of-type").toggleClass("active");
  } else {
    $("#pet-gallery figure.active")
      .toggleClass("active hidden")
      .next("figure")
      .toggleClass("active hidden");
      $("#gallery-thumbnails button.active")
      .toggleClass("active")
      .next("button")
      .toggleClass("active");
  }
});

$("#pet-gallery button.left-arrow").click(function () {
    if ($("#pet-gallery figure.active").is(":first-of-type")) {
      $("#pet-gallery figure.active").toggleClass("active hidden");
      $("#pet-gallery figure:last-of-type").toggleClass("active hidden");
      $("#gallery-thumbnails button:first-of-type").toggleClass("active");
      $("#gallery-thumbnails button:last-of-type").toggleClass("active");
    } else {
      $("#pet-gallery figure.active")
        .toggleClass("active hidden")
        .prev("figure")
        .toggleClass("active hidden");
        $("#gallery-thumbnails button.active")
        .toggleClass("active")
        .prev("button")
        .toggleClass("active");
    }
  });

  //pet gallery button select

  $("#gallery-thumbnails button").click( function() {
   var number =  $(this).index() + 1;
   $("#gallery-thumbnails button.active").toggleClass("active");
   $(this).toggleClass("active");
   $("#pet-gallery figure.active").toggleClass("active hidden");
   $("#pet-gallery figure:nth-child("+ number +")").toggleClass("active hidden");

  });
  

  $("#apply-button").click(function(){
    //if it does not have the class active tab
    if( !$(this).hasClass('active-tab')) {
        $(this).addClass('active-tab');
        $("#about-button").removeClass('active-tab');
        $("section #about").addClass('hidden');
        $("section #apply").removeClass('hidden');
    }
  })

  $("#about-button").click(function(){
    //if it does not have the class active tab
    if( !$(this).hasClass('active-tab')) {
        $(this).addClass('active-tab');
        $("#apply-button").removeClass('active-tab');
        $("section #apply").addClass('hidden');
        $("section #about").removeClass('hidden');
    }
  })