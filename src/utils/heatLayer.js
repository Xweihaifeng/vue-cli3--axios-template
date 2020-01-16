import Unit from '@/utils/unit.js'

class HeatLayer {

    constructor(map, layername) {
        this.map = map;
        this.layername = layername;
    }

    addData = (o, m) => {
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
            id: this.layername,
            type: "heatmap",
            center: m.center,
            zoom: m.zoom,
            minzoom: m.minzoom,
            maxzoom: m.maxzoom,
            source: {
                type: "geojson",
                data: o,
            },
            paint: {
                //权重，根据mag属性设置权重，mag<0时权重为0，mag大于1时权重为1
                "heatmap-weight": ["interpolate", ["linear"],
                    ["get", "mag"], 0, 0, 1, 1
                ],
                //热力图颜色密度设置，当zoom小于0时为1，zoom大于14时为3
                "heatmap-intensity": ["interpolate", ["linear"],
                    ["zoom"], 0, 1, 14, 3
                ],
                //热力图色带，从0到1，密度从低到高
                "heatmap-color": [
                    "interpolate", ["linear"],
                    ["heatmap-density"],
                    0, "rgba(0,0,255,0)",
                    0.2, "rgb(0,2,255)",
                    0.4, "rgb(0,230,255)",
                    0.6, "rgb(255,255,0)",
                    0.8, "rgb(255,40,0)",
                    1, "rgb(255,0,0)"
                ],
                //根据zoom调整热力图半径
                "heatmap-radius": ["interpolate", ["linear"],
                    ["zoom"], 0, 2, 14, 20
                ],
                // 根据zoom调整热力图透明度
                /*"heatmap-opacity": ["interpolate", ["linear"],
                    ["zoom"], 7, 1, 14, 0
                ]*/
            }
        }
    }

    addLayer = (o, m) => {
        this.map.on('load', () => {
            var self = this;
            self.map.addLayer(self.addData(o, m));
        })
    }
}

export default HeatLayer;