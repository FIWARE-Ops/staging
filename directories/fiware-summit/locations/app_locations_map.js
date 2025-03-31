
function addSource(name, source) {
  map.addSource(name, {
    type: "geojson",
    data: source,
    cluster: false,
  });
}

const isVenue = ["==", ["get", "type"], "Venue"];
const isPOI = ["==", ["get", "type"], "Attraction"];
const isHotel = ["==", ["get", "type"], "Hotel"];
const isAirport = ["==", ["get", "type"], "Airport"];
const isTrainStation = ["==", ["get", "type"], "Train Station"];


function addLayer(source) {
  if (map.getLayer("points")) {
    map.removeLayer("points");
  }
  map.addLayer({
  id: "points",
  type: "symbol",
  source,
  layout: {
    "icon-image": ["case", isVenue, 'venue', isPOI, 'attraction',  isHotel, 'hotel', isAirport, 'airport', 'trainStation'],
    "icon-size": ["case", isVenue, 0.3, 0.15],
    "icon-overlap": "always"
  },
  paint: {}
});

}

let popups = null;
const icons = {
   venue: "./icons/venue.svg",
   hotel:  "./icons/hotel.svg",
   attraction:  "./icons/poi.svg",
   airport:  "./icons/airport.svg",
   trainStation:  "./icons/train.svg",
}

function initMap() {
  map.setCenter([13, 45]);
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
    const location = city.geometry.coordinates;
    const html = JSON.parse(city.properties.html);
    const content = html.join("");
    
     map.flyTo({
        center: [location[0], location[1]],
        padding: {top: 100, bottom:10, left: 25, right: 25}
    });


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
        [-6.916, 34.091],
        [-6.688, 33.932]
      ]);
    }, "1000");

    setTimeout( async() => {
      map.addControl(new maplibregl.ScaleControl({
        maxWidth: 80,
        unit: 'metric'
      }));

    }, "4500");  

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