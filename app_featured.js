// eslint-disable-next-line no-unused-vars
function includeHTML(cb) {
  const z = document.getElementsByTagName("*");
  for (let i = 0; i < z.length; i++) {
    const elmnt = z[i];
    const file = elmnt.getAttribute("w3-include-html");
    if (file) {
      const xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState === 4) {
          if (this.status === 200) {
            $(`#${elmnt.id}`).html(this.responseText);
          }
          if (this.status === 404) {
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
  if (cb) {
    cb();
  }
}

function enableCarousel() {
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

document.addEventListener("html-included", () => {
  enableCarousel();
});
