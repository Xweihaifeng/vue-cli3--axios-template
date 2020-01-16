module.exports = {
    /** 区分打包环境与开发环境
     * process.env.NODE_ENV==='production'  (打包环境)
     * process.env.NODE_ENV==='development' (开发环境)
     * baseUrl: process.env.NODE_ENV==='production'?"https://cdn.didabisai.com/front/":'front/',
     */
    // 项目部署的基础路径
    // 我们默认假设你的应用将会部署在域名的根部,
    // 例如 https://www.my-app.com/
    // 如果你的应用部署在一个子路径下，那么你需要在这里
    // 指定子路径。比如将你的应用部署在
    // https://www.foobar.com/my-app/
    // 那么将这个值改为 '/my-app/'

    /* 部署生产环境和开发环境下的URL：可对当前环境进行区分，baseUrl 从 Vue CLI 3.3 起已弃用，要使用publicPath */
    /* baseUrl: process.env.NODE_ENV === 'production' ? './' : '/' */
    // publicPath: process.env.NODE_ENV === 'production' ? '/public/' : './',
    publicPath: "./",

    /* 输出文件目录：在npm run build时，生成文件的目录名称 */
    outputDir: 'dist',

    /* 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录 */
    assetsDir: "assets",

    // 指定生成的 index.html 的输出路径 (相对于 outputDir)
    indexPath: 'index.html',

    // 是否在保存时使用‘eslint-loader’进行检查 // 有效值: true | false | 'error' // 当设置为‘error’时，检查出的错误会触发编译失败
    lintOnSave: false,

    // 使用带有浏览器内编译器的完整构建版本
    // 设置为 true 后你就可以在 Vue 组件中使用 template 选项
    runtimeCompiler: false,

    // babel-loader默认会跳过`node_modules`依赖. // 通过这个选项可以显示转译一个依赖
    transpileDependencies: [
        /* string or regex */
    ],

    /* 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度 */
    productionSourceMap: false,

    // webpack配置\调整内部的webpack配置
    // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
    chainWebpack: () => {},
    configureWebpack: {
        externals: {
            "BMap": "BMap"
        }
    },

    // CSS 相关选项
    css: {
        // 是否使用css分离插件 ExtractTextPlugin
        // 将组件内部的css提取到一个单独的css文件（只用在生产环境）
        // 也可以是传递给 extract-text-webpack-plugin 的选项对象
        extract: true,
        // 开启\允许生成 CSS source maps?
        sourceMap: false,
        // css预设器配置项
        // pass custom options to pre-processor loaders. e.g. to pass options to // sass-loader, use { sass: { ... } }
        loaderOptions: {},
        // 启用 CSS modules for all css / pre-processor files.
        // Enable CSS modules for all css / pre-processor files. // This option does not affect *.vue files.
        modules: false
    },
    // use thread-loader for babel & TS in production build // enabled by default if the machine has more than 1 cores

    // 该选项在系统的 CPU 有多于一个内核时自动启用，仅作用于生产构建
    parallel: require('os').cpus().length > 1,

    // PWA 插件相关配置
    pwa: {}, // configure webpack-dev-server behavior

    // webpack-dev-server 相关配置
    /* devServer: {
        open: true, //---------------------------------------浏览器自动打开页面
        host: "localhost", //--------------------------------如果是真机测试，就使用这个IP
        port: 9999, //---------------------------------------代理端口
        https: false,
        hotOnly: false, //-----------------------------------热更新（webpack已实现了，这里false即可）
        proxy: { //------------------------------------------配置跨域
            '/api': { //-------------------------------------代理api
                target: "http://60.191.72.104:11505", //-----代理服务器api地址
                //target: "http://10.16.93.129:22000",
                ws: true, //---------------------------------proxy启用websockets
                changOrigin: true, //------------------------是否跨域
                pathRewrite: { //----------------------------重写路径
                    '^/api': '/'
                }
            }
        }
    }, */

    // 第三方插件配置
    pluginOptions: {}
};