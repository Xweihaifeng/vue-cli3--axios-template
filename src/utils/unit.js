import {
    point,
    polygon,
    bboxPolygon,
    booleanPointInPolygon
} from '@turf/turf'

class Unit {
    setItem: (a, b) => sessionStorage.setItem(a, JSON.stringify(b)), // 设置sessionStorage

    getItem: (o) => JSON.parse(sessionStorage.getItem(o)), // 获取sessionStorage

    Sum = (array) => { // 数字数组求和
        if (array.length <= 0) return 0;
        var sum = array.map(Number).reduce((prev, cur, index, array) => prev + cur);
        return sum;
    }

    unique = (o) => Array.from(new Set(o)).filter(x => x) // 数组去重

    isArray = (o) => Object.prototype.toString.call(o) == '[object Array]' // 按断是否为数组

    timers = (o) => (!o ? new Date().getFullYear() : o.getFullYear()) // 获取当前年份

    s = (a, b) => a.map((m, n) => (Number(m) - Number(b[n]))) // 两数组对应相减后排序

    c = (a, b) => a.map((m, n) => (m ? b[n] / m : 0).toFixed(2)) // 两数组对应整除 (除数不为0 | 保留2位小数)

    currYear = (o) => o ? o : new Date().getFullYear() // 当前年

    random = (m, n, L) => { // 生成m~n之间长度为L的随机数组
        let arr = [];
        var random = function(lower, upper) {
            return Math.floor(Math.random() * (upper - lower + 1)) + lower
        }
        if (L) {
            for (var i = 0; i < L; i++) {
                arr.push(random(m, n))
            }
            return arr;
        } else {
            return random(m, n);
        }
    }

    coord = (a, b) => { // 随机经纬度点
        let X = [];
        for (let i = 0; i < b; i++) {
            var Y = a.split(',').map((v, k) => (Number(v) + this.random(-9999999999, 9999999999) / Math.pow(10, 12)))
            X.push(Y);
        }
        return X;
    }

    center = () => { // 地图默认中心点/级别
        return {
            center: [113.68503, 35.595113],
            zoom: 9.5,
            minzoom: 9,
            maxzoom: 17,
        }
    }

    createPoint = (location, properties) => { // 创建点geojson
        let res = point(location, properties)
        return res
    }

    inArea = (lngLat, bbox) => { // 判断点[lng, Lat]是否在面内，bbox为[minX, minY, maxX, maxY]
        let res = booleanPointInPolygon(point(lngLat), polygon(bbox))
        return res
    }

    getMax = (n, m) => { // 两个数之比 (求取最大公约数,用当前数除最大公约数,获得两数的占比)
        var min = n;
        (m < n) && (min = m);
        var max = 0;
        for (var i = 0, arr = []; i <= min; i++) {
            if (n % i == 0 && m % i == 0) {
                arr.push(i);
            }
        }
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                arr[i] = [arr[i + 1], arr[i + 1] = arr[i]][0];
            }
        }
        max = arr[arr.length - 1];
        return [n / max, m / max];
    }

    getFormatDate = (date) => { // 当前时间的现实格式(YYYY-MM-DD)
        var seperator1 = "-";
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        var currentdate = year + seperator1 + month + seperator1 + strDate;
        return currentdate;
    }

    tooltip = (o) => { // 出表移入Echarts,显示信息弹窗
        var body = {
            trigger: o ? 'item' : 'axis',
            confine: true,
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'line', // 默认为直线，可选为：'line' | 'shadow' | 'cross'
                lineStyle: {
                    color: '#555'
                }
            },
            textStyle: {
                fontSize: 10,
                align: 'left'
            },
            backgroundColor: 'rgba(0,0,0,0.7)', // 背景
            padding: [8, 10], //内边距
            extraCssText: 'box-shadow: 0 0 3px rgba(7, 181, 255, 0.7);', //添加阴影
        }
        if (o == 'item') body.formatter = '{b}: {c} ({d}%)';
        return body;
    }

    xAxis = (o, b, c, d) => { // Echarts显示X轴信息样式
        var body = {
            type: 'category',
            boundaryGap: d ? false : true,
            axisLine: {
                show: b ? false : true,
                lineStyle: {
                    color: '#019bf3'
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#019bf3',
                    fontSize: c || 10
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false,
                lineStyle: {
                    color: '#2d4988'
                }
            }
        }
        if (o) body.data = o;
        return body;
    }

    grid = (a, b, c, d) => { // Echarts图标在dom里面上下左右的距离
        return {
            top: a || 28,
            right: b || 0,
            bottom: c || -1,
            left: d || 0,
            containLabel: true
        }
    }

    legend = (o) => { // Echarts图标类别显示
        var body = {
            type: 'scroll',
            orient: 'horizontal',
            x: 'center',
            top: "-3",
            itemWidth: 10,
            itemHeight: 8,
            textStyle: {
                color: '#fff',
                fontSize: 10
            },
            data: o
        }
        if (o) body.data = o;
        return body;
    }
}

export default Unit;