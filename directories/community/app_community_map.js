function horizontalScroll(popup) {
  // Horizontal Scroll

  var sliders = popup.querySelectorAll(".chips");
  var isDown = false;
  var startX;
  var scrollLeft;
  sliders.forEach(function (slider) {
    slider.addEventListener("mousedown", function (e) {
      isDown = true;
      slider.classList.add("active");
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener("mouseleave", function () {
      isDown = false;
      slider.classList.remove("active");
    });
    slider.addEventListener("mouseup", function () {
      isDown = false;
      slider.classList.remove("active");
    });
    slider.addEventListener("mousemove", function (e) {
      if (!isDown) return;
      e.preventDefault();
      var x = e.pageX - slider.offsetLeft;
      var walk = (x - startX) * 3; //scroll-fast

      slider.scrollLeft = scrollLeft - walk;
      var links = slider.querySelectorAll(".item");

      for (var i = 0; i < links.length; i++) {
        links[i].classList.add("noclick");
      }
    });
  });
}

function setBounds() {}

const isIhub = ["==", ["get", "type"], "ihub"];
const isCity = ["==", ["get", "type"], "city"];
const isMember = ["==", ["get", "type"], "Organization"];

function addSource(name, source) {
  map.addSource(name, {
    type: "geojson",
    data: source,

    cluster: true,
    clusterRadius: 50,
    clusterMaxZoom: 5,
  });
}

function addLayer(source) {
  if (map.getLayer("points")) map.removeLayer("points");
  map.addLayer({
    id: "points",
    type: "circle",
    source,
    filter: ["!=", "cluster", true],
    paint: {
      "circle-color": [
        "case",
        isCity,
        "rgba(255,255,255,0.3)",
        isIhub,
        "rgba(93,192,207,.6)",
        isMember,
        "rgba(0,27,61,1)",
        "rgba(93,192,207,.6)",
      ],
      "circle-stroke-width": ["case", isCity, 1, isIhub, 1.2, isMember, 1, 1.2],
      "circle-stroke-color": [
        "case",
        isCity,
        "rgba(255,255,255,1)",
        isIhub,
        "rgba(93,192,207,1)",
        isMember,
        "rgba(255,255,255,1)",
        "rgba(93,192,207,1)",
      ],
      "circle-radius": ["case", isCity, 7, isIhub, 7, isMember, 7, 7],
    },
  });

  if (map.getLayer("clusters")) {
    map.removeLayer("clusters");
  }
  map.addLayer({
    id: "clusters",
    type: "circle",
    source,
    filter: ["==", "cluster", true],
    paint: {
      "circle-color": "white",
      "circle-stroke-width": 5,
      "circle-radius": 15,
      "circle-stroke-color": "silver",
    },
  });

  if (map.getLayer("cluster-count")) {
    map.removeLayer("cluster-count");
  }
  map.addLayer({
    id: "cluster-count",
    type: "symbol",
    source,
    layout: {
      "text-font": ["Montserrat Bold", "Arial Bold"],
      "text-size": 12,
      "text-field": ["get", "point_count"],
      "text-offset": [0, 0.1], // move the label vertically downwards slightly to improve centering
    },
    paint: {
      "text-color": "black",
    },
  });
}

let popups = null;
let filter = "community";

function initRadio() {
  document.getElementById("nav-filter").addEventListener("change", (e) => {
    switch (e.target.value) {
      case "ihubs":
        addLayer("iHubs");
        filter = "ihubs";
        break;
      case "cities":
        addLayer("cities");
        filter = "cities";
        break;
      case "orgs":
        addLayer("members");
        filter = "members";
        break;
      default:
        addLayer("community");
        filter = "community";
    }
  });
}

function initTextSearch() {
  document.querySelector(".resetInput").addEventListener("click", (el) => {
    document.querySelector("#searchInput").value = "";
    document.querySelector(".search-element").classList.remove("resetActive");
  });

  // Search input
  document.querySelector("#searchInput").addEventListener("keyup", (e) => {
    let searchKeys = searchObj.keys[filter];
    let location = null;
    const reFuzzy = new RegExp(`.*${e.target.value}.*`, "gi");
    const reExact = new RegExp(`^${e.target.value}`, "gi");

    if (e.target.value != "") {
      e.target.parentNode.classList.add("resetActive");
    } else {
      e.target.parentNode.classList.remove("resetActive");
    }
    if (e.target.value.length < 3) {
      return;
    }

    let matches = searchKeys.filter((value) => reFuzzy.test(value));
    if (matches.length === 1) {
      location = searchObj.data[matches[0]];
    } else {
      matches = searchKeys.filter((value) => reExact.test(value));
      if (matches.length === 1) {
        location = searchObj.data[matches[0]];
      }
    }

    if (location) {
      let bbox = [
        [location[0] - 1, location[1] - 0.5],
        [location[0] + 1, location[1] + 1.5],
      ];

      map.fitBounds(bbox, {
        padding: { top: 10, bottom: 25, left: 15, right: 5 },
      });

      map.once("idle", () => {
        const features = map.querySourceFeatures(filter);

        let targetFeature = {};
        features.forEach((feature) => {
          if (feature.properties.city === matches[0]) {
            targetFeature = feature;
          }
          if (feature.properties.name === matches[0]) {
            targetFeature = feature;
          }
        });

        const html = JSON.parse(targetFeature.properties.html);
        const content = html.join("");
        e.target.value = matches[0];

        if (popups) {
          popups.remove();
        }
        popups = new maplibregl.Popup()
          .setHTML(`<div class="popup-info"> ${content}</div>`)
          .setLngLat(location);

        popups.addTo(map);
        horizontalScroll(
          document.querySelectorAll(".maplibregl-popup-content")[0],
        );
      });
    }
  });
}

function initMap() {
  map.addControl(new maplibregl.NavigationControl());
  map.addControl(new maplibregl.AttributionControl({ compact: true }));
  map.on("mouseenter", "points", () => {
    map.getCanvas().style.cursor = "pointer";
  });

  map.on("mouseleave", "points", () => {
    map.getCanvas().style.cursor = "";
  });

  map.on("click", "clusters", (e) => {
    const point = [e.lngLat.lng, e.lngLat.lat];
    map.flyTo({
      center: point,
    });
    setTimeout(function () {
      map.zoomIn();
    }, 500);
  });

  map.on("click", "points", (e) => {
    const city = e.features[0];
    const html = JSON.parse(city.properties.html);
    const content = html.join("");

    if (popups) {
      popups.remove();
    }
    popups = new maplibregl.Popup()
      .setHTML(`<div class="popup-info"> ${content}</div>`)
      .setLngLat(city.geometry.coordinates);

    popups.addTo(map);

    setTimeout(function () {
      horizontalScroll(
        document.querySelectorAll(".maplibregl-popup-content")[0],
      );
    }, 500);
  });

  map.on("load", function () {
    map.resize();
  });

  map.once("load", () => {
    // Add 3 sources
    addSource("cities", "../cities/cities.json");
    addSource("community", "./community.json");
    addSource("iHubs", "../ihubs/iHubs.json");
    addSource("members", "../organisations/organisations.json");

    addLayer("community");
  });
}

const map = new maplibregl.Map({
  container: "map",
  style: "./style.json",
  maxZoom: 20,
  minZoom: 1,
  attributionControl: false,
  dragRotate: false,
}).fitBounds([
  [-175.73934032129907, -56.093228369773406],
  [179.54543205831558, 83.70561326982735],
]);
initMap();
initRadio();
initTextSearch();
