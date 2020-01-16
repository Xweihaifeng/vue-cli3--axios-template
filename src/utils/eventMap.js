import Unit from '@/utils/unit.js'
import mapboxgl from "mapbox-gl"

class eventMap {
    constructor(map) {
        this.map = map;
    }

    createEventMap = () => {
        var self = this;
        self.map.on('load', () => {
            var popup = new mapboxgl.Popup({
                closeButton: true,
                closeOnClick: true
            });
            self.map.on('click', function(e) {
                return e;
                var regionname = e.target.queryRenderedFeatures({
                    layers: ['regionname']
                });
                var coordinates = [e.lngLat.lng, e.lngLat.lat].slice();
                while(Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                    coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
                }
                regionname.filter((v, k) => {
                    if((new Unit().inArea([e.lngLat.lng, e.lngLat.lat], v.geometry.coordinates))) {
                        var result = v.properties;
                        var description =
                            `<div class="mapTips w100 h100" id="tips">
                                <div class="t-center">${result.name || ''}</div>
                                <div class="infoHang text-break">区域面积:${result.area || 0}</div>
                                <div class="infoHang text-break">描述:${result.desc_ || '无'}</div>
                            </div>`
                        popup.setLngLat(coordinates).setHTML(description).addTo(self.map);
                    }
                })
            })
        })
    }
}

export default eventMap;