let baseUrl = "/"; // 本地代理
// const mockUrl = 'ioc-server' //测试接口
//const mockUrl = '/' //真实接口不需要这个字段，打包时注掉

switch(process.env.NODE_ENV) {
    case "development":
        // baseUrl = "http://36.110.27.226:8088/"; // 测试环境url
		baseUrl = "http://192.168.1.175:8088/"; // 测试环境url
		// baseUrl = "http://192.168.1.212:8088/"; // 测试环境url
		// baseUrl = "http://127.0.0.1:8015/"; // 测试环境url
        break;
    case "production":
        // baseUrl = "http://36.110.27.226:8088/"; // 生产环境url
		baseUrl = "http://192.168.1.175:8088/"; // 生产环境url
		// baseUrl = "http://192.168.1.212:8088/"; // 生产环境url
		// baseUrl = 'http://127.0.0.1:8015/'; // 生产环境url
        break;
}

export default baseUrl;