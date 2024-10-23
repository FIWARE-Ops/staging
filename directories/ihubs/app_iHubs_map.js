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

var map = L.map("map", {
  zoomControl: false,
  maxZoom: 28,
  minZoom: 1,
}).fitBounds([
  [-56.093228369773406, -175.73934032129907],
  [83.70561326982735, 179.54543205831558],
]);
var hash = new L.Hash(map);
map.attributionControl.setPrefix(
  '<a href="https://github.com/tomchadwin/qgis2web" target="_blank">qgis2web</a> &middot; <a href="https://leafletjs.com" title="A JS library for interactive maps">Leaflet</a> &middot; <a href="https://qgis.org">QGIS</a>',
);
var zoomControl = L.control
  .zoom({
    position: "topleft",
  })
  .addTo(map);
var bounds_group = new L.featureGroup([]);


map.createPane("pane_mapcountries");
map.getPane("pane_mapcountries").style.zIndex = 401;
map.getPane("pane_mapcountries").style["mix-blend-mode"] = "normal";
var layer_mapcountries = new L.geoJson(json_mapcountries, {
  attribution: "",
  interactive: false,
  dataVar: "json_mapcountries",
  layerName: "layer_mapcountries",
  pane: "pane_mapcountries",
  style: style_mapcountries,
});
bounds_group.addLayer(layer_mapcountries);
map.addLayer(layer_mapcountries);

map.createPane("pane_mapboundaries");
map.getPane("pane_mapboundaries").style.zIndex = 402;
map.getPane("pane_mapboundaries").style["mix-blend-mode"] = "normal";
var layer_mapboundaries = new L.geoJson(json_mapboundaries, {
  attribution: "",
  interactive: false,
  dataVar: "json_mapboundaries",
  layerName: "layer_mapboundaries",
  pane: "pane_mapboundaries",
  style: style_mapboundaries,
});
bounds_group.addLayer(layer_mapboundaries);
map.addLayer(layer_mapboundaries);

function pop_data(feature, layer) {
  var content = feature.properties;
  var tempDiv = document.createElement("div");
  tempDiv.innerHTML = "<div>" + content.html.join("") + "</div>";
  horizontalScroll(tempDiv);
  layer.bindPopup(tempDiv, { minWidth: 400, maxHeight: 600 });
}

function style_data() {
  return {
    pane: "pane_data",
    radius: 6.0,
    stroke: false,
    fill: true,
    fillOpacity: 1,
    fillColor: "rgba(93,192,207,1.0)",
    interactive: true,
  };
}
map.createPane("pane_data");
map.getPane("pane_data").style.zIndex = 404;
map.getPane("pane_data").style["mix-blend-mode"] = "normal";
var layer_data = new L.geoJson(iHub_data, {
  attribution: "",
  interactive: true,
  dataVar: "iHub_data",
  layerName: "layer_data",
  pane: "pane_data",
  onEachFeature: pop_data,
  pointToLayer: function (feature, latlng) {
    var context = {
      feature: feature,
      variables: {},
    };
    return L.circleMarker(latlng, style_data(feature));
  },
});
var cluster_data = new L.MarkerClusterGroup({
  showCoverageOnHover: false,
  spiderfyDistanceMultiplier: 2,
});
cluster_data.addLayer(layer_data);

bounds_group.addLayer(layer_data);
cluster_data.addTo(map);
setBounds();
