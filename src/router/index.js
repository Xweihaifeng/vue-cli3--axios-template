import Vue from "vue";
import VueRouter from "vue-router";

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        { path: "/login", component: () => import("@/components/common/login.vue"), meta: { title: "用户登录" } },
        { path: "/", component: () => import("@/components/common/index.vue"), meta: { requireAuth: true, title: "主页" }, children: [
            { path: "index", component: () => import("@/components/views/index.vue"), meta: { requireAuth: true, title: "home首页" } },
            { path: "page", component: () => import("@/components/page/index.vue"), meta: { title: "page页" } }
        ]},
        { path: '/', redirect: '/index', meta: { title: "首页" } }, // 重定向首页需放到最后
        { path: "*", redirect: "/login", meta: { title: "用户登录" } } // 重定向登录需放到后面
    ],
    mode: "history", //去掉url中的#
    base: process.env.BASE_URL
});

router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
        if (sessionStorage.getItem('token')) { // 通过vuex state获取当前的token是否存在
            next();
        } else {
            next({
                path: '/login',
                query: {
                    redirect: to.fullPath
                } // 将跳转的路由path作为参数，登录成功后跳转到该路由
            })
        }
    } else {
        next();
    }
});

export default router;
