function horizontalScroll(popup) {
  // Horizontal Scroll

  const sliders = popup.querySelectorAll(".chips");
  let isDown = false;
  let startX;
  let scrollLeft;
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
      if (!isDown) {
        return;
      }
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 3; //scroll-fast

      slider.scrollLeft = scrollLeft - walk;
      const links = slider.querySelectorAll(".item");

      for (let i = 0; i < links.length; i++) {
        links[i].classList.add("noclick");
      }
    });
  });
}

function addSource(name, source) {
  map.addSource(name, {
    type: "geojson",
    data: source,
    cluster: false,
  });
}

function addLayer(source) {
  if (map.getLayer("points")) {
    map.removeLayer("points");
  }
  map.addLayer({
    id: "points",
    type: "circle",
    source,
    paint: {
      "circle-color": "rgba(0,0,0,1)",
      "circle-stroke-width": 0,
      "circle-stroke-color":  "rgba(0,0,0,0)",
      "circle-radius": 7,
    },
  });
}

let popups = null;
const filter = "cities";


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
    // Add sources
    setTimeout(() => {
      addSource("locations", "./locations.json");
      addLayer("locations");
      map.fitBounds([
        [-6.688, 34.091],
        [-6.916, 33.932]
      ]);
    }, "1000");  

  });
}

const map = new maplibregl.Map({
  container: "map",
  style: "./style.json",
  maxZoom: 20,
  minZoom: 3,
  attributionControl: false,
  dragRotate: false,
})


initMap();  