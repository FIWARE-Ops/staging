        var map = L.map('map', {
            zoomControl:false, maxZoom:28, minZoom:1
        }).fitBounds([[-56.093228369773406,-175.73934032129907],[83.70561326982735,179.54543205831558]]);
        var hash = new L.Hash(map);
        map.attributionControl.setPrefix('<a href="https://github.com/tomchadwin/qgis2web" target="_blank">qgis2web</a> &middot; <a href="https://leafletjs.com" title="A JS library for interactive maps">Leaflet</a> &middot; <a href="https://qgis.org">QGIS</a>');
        var zoomControl = L.control.zoom({
            position: 'topleft'
        }).addTo(map);
        var bounds_group = new L.featureGroup([]);
        function setBounds() {
        }
        
        map.createPane('pane_mapcountries');
        map.getPane('pane_mapcountries').style.zIndex = 401;
        map.getPane('pane_mapcountries').style['mix-blend-mode'] = 'normal';
        var layer_mapcountries = new L.geoJson(json_mapcountries, {
            attribution: '',
            interactive: false,
            dataVar: 'json_mapcountries',
            layerName: 'layer_mapcountries',
            pane: 'pane_mapcountries',
            style: style_mapcountries,
        });
        bounds_group.addLayer(layer_mapcountries);
        map.addLayer(layer_mapcountries);

       
        map.createPane('pane_mapboundaries');
        map.getPane('pane_mapboundaries').style.zIndex = 402;
        map.getPane('pane_mapboundaries').style['mix-blend-mode'] = 'normal';
        var layer_mapboundaries = new L.geoJson(json_mapboundaries, {
            attribution: '',
            interactive: false,
            dataVar: 'json_mapboundaries',
            layerName: 'layer_mapboundaries',
            pane: 'pane_mapboundaries',
            style: style_mapboundaries,
        });
        bounds_group.addLayer(layer_mapboundaries);
        map.addLayer(layer_mapboundaries);
        
        function pop_data(feature, layer) {
            var content = feature.properties;
            var tempDiv = document.createElement('div');
                tempDiv.innerHTML = '<table><tr>' + 
                    content.html.join('</tr><tr>') +
                        '</tr><table>';
			layer.bindPopup(tempDiv, { maxHeight: 400 });
        }

        function style_data() {
            return {
                pane: 'pane_data',
                radius: 6.0,
                stroke: false,
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(93,192,207,1.0)',
                interactive: true,
            }
        }
        map.createPane('pane_data');
        map.getPane('pane_data').style.zIndex = 404;
        map.getPane('pane_data').style['mix-blend-mode'] = 'normal';
        var layer_data = new L.geoJson(iHub_data, {
            attribution: '',
            interactive: true,
            dataVar: 'iHub_data',
            layerName: 'layer_data',
            pane: 'pane_data',
            onEachFeature: pop_data,
            pointToLayer: function (feature, latlng) {
                var context = {
                    feature: feature,
                    variables: {}
                };
                return L.circleMarker(latlng, style_data(feature));
            },
        });
        var cluster_data = new L.MarkerClusterGroup({showCoverageOnHover: false,
            spiderfyDistanceMultiplier: 2});
        cluster_data.addLayer(layer_data);

        bounds_group.addLayer(layer_data);
        cluster_data.addTo(map);
        setBounds();
