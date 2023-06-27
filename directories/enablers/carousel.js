function initFeaturedCarousel() {
  $(".featured-carousel").owlCarousel({
    stagePadding: 0,
    autoplayTimeout: 2500,
    autoplayHoverPause: true,
    margin: 0,
    responsive: {
      0: {
        items: 1,
        autoplay: true,
        nav: false,
        dots: true,
        loop: true,
      },
      600: {
        items: 3,
        autoplay: true,
        nav: false,
        dots: true,
        loop: true,
      },
      1000: {
        items: 4,
        autoplay: true,
        nav: false,
        dots: false,
        loop: true,
      },
      1400: {
        items: 4,
        autoplay: true,
        nav: false,
        dots: false,
        loop: true,
      },
      1600: {
        items: 4,
        autoplay: true,
        nav: false,
        dots: false,
        loop: true,
      },
    },
  });
}