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

const map = new maplibregl.Map({
  container: 'map',
  style: './style.json',
  zoomControl: false,
  maxZoom: 28,
  minZoom: 1,
}).fitBounds([
  [-175.73934032129907, -56.093228369773406 ],
  [179.54543205831558, 83.70561326982735 ],
]);

map.addControl(new maplibregl.NavigationControl());

map.once("load", () => {
  map.addSource("cities", {
    type: "geojson",
    data: "./community.json",

    cluster: true,
    clusterRadius: 50,
    clusterMaxZoom: 5
 
  });

  const isIhub = ['==', ['get', 'type'], 'ihub'];
  const isCity = ['==', ['get', 'type'], 'city'];
  const isCluster =  ["boolean", ["get", "cluster"], false];

  map.addLayer({
    id: "cities-circle",
    type: "circle",
    source: "cities",

    paint: {
      "circle-color": ["case",
         isCluster, "white", 
         isCity, "white", 
         "cyan"],
      "circle-stroke-width": ["case", isCluster , 5, 0],
      "circle-radius": ["case", 
        isCluster, 15,
        isCity, 5,
        8],
      "circle-stroke-color": ["case", isCluster , "silver", "cyan"]
    }
  });

  map.addLayer({
    id: "cities-cluster-count",
    type: "symbol",
    source: "cities",
    layout: {
      "text-font": ["Monserrat Bold, Arial Bold"],
      "text-size": 12,
      "text-field": ["get", "point_count"],
      "text-offset": [0, 0.1] // move the label vertically downwards slightly to improve centering
    },
    paint: {
      "text-color": "black"
    }
  });

});

map.on("mouseenter", "cities-circle", () => {
  map.getCanvas().style.cursor = "pointer";
});

map.on("mouseleave", "cities-circle", () => {
  map.getCanvas().style.cursor = "";
});


map.on("click", "cities-circle", (e) => {
  const city = e.features[0]; 
  if(city.properties.cluster){
    const point = [e.lngLat.lng, e.lngLat.lat]
    map.flyTo({
      center: point
    });
    setTimeout(function(){
       map.zoomIn()
    }, 500);
  } else {
    const html = JSON.parse(city.properties.html);
    const content = html.join('');

    new maplibregl.Popup()
      .setHTML(`<div> ${content}</div>`)
      .setLngLat(city.geometry.coordinates)
      .addTo(map);

    setTimeout(function(){
      horizontalScroll(document.querySelectorAll(".maplibregl-popup-content")[0])
    }, 500);
  }

});

