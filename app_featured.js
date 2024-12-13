function includeHTML(cb) {
  var z, i, elmnt, file, xhttp;
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) {
            $(`#${elmnt.id}`).html(this.responseText);
          }
          if (this.status == 404) {
            $(`#${elmnt.id}`).html("Page not found.");
          }
          elmnt.removeAttribute("w3-include-html");
          includeHTML(cb);
        }
      };
      xhttp.open("GET", file, true);
      xhttp.send();
      return;
    }
  }
  if (cb) cb();
}

function enableCarousel(e) {
   e.target.removeEventListener("html-included", enableCarousel, false);
  $(".owl-carousel").owlCarousel({
    stagePadding: 30,
    loop: false,
    autoplay: false,
    margin: 15,
    nav: true,
    navText: [
      '<span class="uk-margin-small-right uk-icon" uk-icon="icon: chevron-left"></span>',
      '<span class="uk-margin-small-left uk-icon" uk-icon="icon: chevron-right"></span>',
    ],
    responsive: {
      0: {
        items: 1,
        loop: true,
      },
      600: {
        items: 2,
        loop: true,
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
  });
}

document.addEventListener("html-included", enableCarousel);
