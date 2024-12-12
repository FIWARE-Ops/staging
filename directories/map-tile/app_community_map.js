function setBounds() {}

function initMap() {
  map.addControl(new maplibregl.NavigationControl());
  map.addControl(new maplibregl.AttributionControl({ compact: true }));
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
