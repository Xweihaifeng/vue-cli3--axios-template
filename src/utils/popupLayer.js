import mapboxgl from "mapbox-gl"
class PopupLayerr {

    constructor(map, layername) {
        this.map = map;
        this.layername = layername;
    }

    addLayer = (env, map) => {
        var popup = new mapboxgl.Popup({
            closeButton: true,
            closeOnClick: true
        });
        this.map.on('click', this.layername, function(e) {
            this.map.flyTo({
                center: e.features[0].geometry.coordinates
            });
        });
        this.map.on('mouseenter', this.layername, function(e) {
            var coordinates = e.features[0].geometry.coordinates.slice();
            var description = e.features[0].properties.description;
            e.features[0].properties.icon = 'airQuality6';
            while(Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
            }
            popup.setLngLat(coordinates).setHTML(description).addTo(this);
        });
        //  return popup;
    }
}

export default PopupLayerr;