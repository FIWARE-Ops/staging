function initCarousel() {
  $(".owl-carousel").owlCarousel({
    stagePadding: 30,
    autoplay: true,
    autoplayTimeout: 2500,
    autoplayHoverPause: true,
    margin: 20,
    responsive: {
      0: {
        items: 1,
        nav: false,
        loop: true,
      },
      600: {
        items: 2,
        nav: false,
        loop: true,
      },
      1000: {
        items: 3,
        nav: false,
        loop: true,
      },
      1400: {
        items: 3,
        nav: false,
        loop: true,
      },
      1600: {
        items: 3,
        nav: false,
        loop: true,
      },
    },
  });
}
