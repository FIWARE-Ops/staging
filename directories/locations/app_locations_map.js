
function addSource(name, source) {
  map.addSource(name, {
    type: "geojson",
    data: source,
    cluster: false,
  });
}

const isVenue = ["==", ["get", "type"], "Venue"];
const isPOI = ["==", ["get", "type"], "POI"];
const isHotel = ["==", ["get", "type"], "Hotel"];


function addLayer(source) {
  if (map.getLayer("points")) {
    map.removeLayer("points");
  }
  map.addLayer({
  id: "points",
  type: "symbol",
  source,
  layout: {
    "icon-image": ["case", isVenue, 'venue', isPOI, 'attraction',  isHotel, 'hotel', 'transport'],
    "icon-size": ["case", isVenue, 0.15, 0.1]
  },
  paint: {}
});

}

let popups = null;
const icons = {
   venue: "./icons/venue.svg",
   hotel:  "./icons/hotel.svg",
   attraction:  "./icons/poi.svg",
   transport:  "./icons/transport.svg",
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
  });

  map.on("load", function () {
    map.resize();
  });

  map.once("load", () => {
    // Add sources
    for (const [key, value] of Object.entries(icons)) {
      const image = new Image();
      image.src = value;
      image.width = 150;
      image.height = 150;
      image.onload = () => {
         map.addImage(key, image);
      }
    }
    setTimeout( async() => {
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