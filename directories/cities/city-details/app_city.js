function wrapImage(id, width, height, src) {
  let img = "";

  if (width) {
    img =
      img +
      `<span class="et_pb_image">
                <img class="wp-image-100287" loading="lazy" 
                width="${width}" height="${height}" src="${src}"/>
            </span>`;
  } else {
    img =
      img +
      `<span class="et_pb_image">
                <img class="hero-product" src="${src}"/>
            </span>`;
  }

  $(id).empty();
  $(id).append(img);
  $(id + " span")
    .hide()
    .show(0);
  //}
}

function wrapParagraphs(id, input) {
  if (input === "") {
    $(id).prev().remove();
    $(id).remove();
    return;
  }
  const html = input;
  $(id).empty();
  $(id).append(html);
}

function addChips(id, items) {
  if (items.length === 0) {
    $(id).parent().remove();
    return;
  }

  $(id).empty();
  items.forEach((el) => {
    const resource = '<li class="resource">' + el + "</li>";
    $(id).append(resource);
  });
}

function addMarker(lat, lng, zoom) {
  const map = L.map("map").setView([lat, lng], zoom);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  L.marker([lat, lng]).addTo(map);

  L.circle([lat, lng], {
    color: "red",
    fillColor: "#f03",
    fillOpacity: 0.5,
    radius: 500,
  }).addTo(map);
}

function fillDetails(city) {
  if (window.jobDone) {
    return;
  }
  window.jobDone = true;
  $("h1#name").text(city.city);
  $("h6#name").text(city.city);
  $("h4#mission").text(city.excerpt);

  wrapImage("#logo", 500, 300, city.img);
  wrapImage("#main-logo", 500, 300, city.img);

  wrapParagraphs("#description", city.cityStrategy);

  addMarker(city.lat, city.lng, 5);
  const title = city.city + " - " + city.type;
  document.title = title;
  history.pushState({}, null, city.social);
}

function loadCity(e) {
  e.target.removeEventListener("data-ready", loadCity, false);

  $ = $ || jQuery;
  $.urlParam = function (name) {
    const results = new RegExp("[?&]" + name + "=([^&#]*)").exec(
      window.location.href,
    );
    if (results == null) {
      return null;
    }
    return decodeURI(results[1]) || 0;
  };

  $("div#back-button").on("click", function (e) {
    e.preventDefault();
    window.history.back();
  });

  if ($.urlParam("id") && window.cities[$.urlParam("id")]) {
    fillDetails(window.cities[$.urlParam("id")]);
  } else {
    $(".et_pb_section_1").remove();
    $(".et_pb_section_2").css("padding", "2em");
  }

  initialiseStyleBackgroundIntersectionObserver();
  //  });
  //});
}

function initialiseStyleBackgroundIntersectionObserver() {
  const lazyBackgrounds = Array.from(
    document.querySelectorAll("[data-background-image]"),
  );

  if (lazyBackgrounds.length === 0) {
    return;
  }

  let lazyBackgroundObserver;

  const loadBackgroundIfElementOnScreen = (entry) => {
    if (entry.isIntersecting) {
      entry.target.style.backgroundImage = `url('${entry.target.dataset.backgroundImage}')`;
      lazyBackgroundObserver.unobserve(entry.target);
    }
  };

  const observeElementVisibility = (lazyBackground) => {
    lazyBackgroundObserver.observe(lazyBackground);
  };

  const setBackground = (element) => {
    element.style.backgroundImage = `url('${entry.target.dataset.backgroundImage}')`;
  };

  if (typeof window.IntersectionObserver === "function") {
    lazyBackgroundObserver = new IntersectionObserver((entries) => {
      entries.forEach(loadBackgroundIfElementOnScreen);
    });
    lazyBackgrounds.forEach(observeElementVisibility);
  } else {
    lazyBackgrounds.forEach(setBackground);
  }
}

document.addEventListener("data-ready", loadCity);
