import Unit from '@/utils/unit.js'
import mapboxgl from "mapbox-gl"

class PointLayerr {

    constructor(map, layername, isPop) {
        this.map = map;
        this.layername = layername;
        this.isPop = (isPop == undefined ? true : isPop);
    }

    addData = (o, m) => {
        var self = this;
        var m = m ? m : {};
        if(!m) {
            m = new Unit().center()
        } else if(!m.center || !m.zoom || !m.minzoom || !m.maxzoom) {
            m.center = m.center || new Unit().center().center;
            m.zoom = m.zoom || new Unit().center().zoom;
            m.minzoom = m.minzoom || new Unit().center().minzoom;
            m.maxzoom = m.maxzoom || new Unit().center().maxzoom;
        }
        return {
            id: self.layername,
            type: 'symbol',
            center: m.center,
            zoom: m.zoom,
            minzoom: m.minzoom,
            maxzoom: m.maxzoom,
            source: {
                type: 'geojson',
                data: o
            },
            layout: {
                'icon-image': '{icon}',
                'icon-allow-overlap': true
            }
        }
    }

    addLayer = (o, m) => {
        this.map.on('load', () => {
            var self = this;
            var maps = self.map;
            maps.addLayer(self.addData(o, m));
            if(self.isPop) {
                var popup = new mapboxgl.Popup({
                    closeButton: true,
                    closeOnClick: true
                });
                maps.on('click', self.layername, function(e) {
                    maps.flyTo({
                        center: e.features[0].geometry.coordinates
                    });
                });
                maps.on('mouseenter', self.layername, function(e) {
                    var coordinates = e.features[0].geometry.coordinates.slice();
                    var description = e.features[0].properties.description;
                    e.features[0].properties.icon = 'airQuality6';
                    while(Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
                    }
                    popup.setLngLat(coordinates).setHTML(description).addTo(maps);
                });
                maps.on('mouseleave', self.layername, function() {
                    popup.remove();
                });
            }
        })
    }
}

export default PointLayerr;