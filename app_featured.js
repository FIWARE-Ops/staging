function defer(method) {
  if (window.jQuery) {
    method();
  } else {
    setTimeout(function () {
      defer(method);
    }, 50);
  }
}



function enableCarousel() {
  jQuery(".owl-carousel").owlCarousel({
    stagePadding: 30,
    loop: false,
    margin: 15,
    nav: true,
    navText: [
      '<span class="uk-margin-small-right uk-icon" uk-icon="icon: chevron-left"></span>',
      '<span class="uk-margin-small-left uk-icon" uk-icon="icon: chevron-right"></span>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
      1400: {
        items: 4,
      },
      1600: {
        items: 4,
      },
    },
  })
}




defer(function () {
    // POPULATE THE LISTING
  w3.includeHTML();
  jQuery(document).ready(function() {
      $('#app').waitForImages(function() {
        console.log('All images are loaded.');
        enableCarousel();
      });
  });
})
