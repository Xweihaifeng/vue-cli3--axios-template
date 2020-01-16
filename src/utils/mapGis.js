import Unit from '@/utils/unit.js'
import mapboxgl from "mapbox-gl"
import hsdsjMap from '@/config/style3.json'
import {
    mapHxXzNew
} from '@/api/main.js'

class GisMap {
    constructor(layername) {
        this.layername = layername;
        this.map = null;
    }

    createMap = () => {
        // var mapGeojson = await new Promise((resolve, reject) => mapHxXzNew().then(res => resolve(res.data)));
        //页面处理业务逻辑之前，初始化地图对象
        var currMap = new mapboxgl.Map({
            container: this.layername, //接纳地图的元素
            style: hsdsjMap,
            center: new Unit().center().center,
            zoom: new Unit().center().zoom,
            minZoom: new Unit().center().minzoom,
            maxZoom: new Unit().center().maxzoom,
            maxBounds: new mapboxgl.LngLatBounds( //最大显示范围
                new mapboxgl.LngLat(112.0734631836064, 34.460859436981664), //西南角坐标
                new mapboxgl.LngLat(115.40116659204773, 36.49882586674076) //东北角坐标
            ),
            bearing: 0, // 旋转度
            pitch: 0, // 地图倾斜度
        })
        return currMap;
    }

    /* eventMap = () => {
        var self = this;
        self.map = self.createMap();
        self.map.on('load', () => {
            self.map.on('click', function(e) {
                var regionname = e.target.queryRenderedFeatures({layers: ['regionname']});
                regionname.filter((v,k) => {
                    if((new Unit().inArea([e.lngLat.lng, e.lngLat.lat], v.geometry.coordinates))) {
                        debugger
                        console.log(v.properties);
                    }
                })
            })
        })
    } */
}

export default GisMap;