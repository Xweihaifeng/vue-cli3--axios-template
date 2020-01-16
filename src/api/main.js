import Ajax from "./baseAjax.js";
import baseUrl from "./baseUrl";

export default {
    Url: () => baseUrl,
    getUsers: (params) => Ajax.get(baseUrl + "users/", params), // 查询用户
    addUsers: (params) => Ajax.post(baseUrl + "users/", params), // 新增用户
    usersLogin: (params) => Ajax.post(baseUrl + "users/login", params), // 用户登录
    usersDelete: (params) => Ajax.delete(baseUrl + "users/", params), // 删除用户
    usersInfoEdit: (params) => Ajax.post(baseUrl + "users/" + params.id, params), // 修改用户信息
    usersReset: (params) => Ajax.post(baseUrl + "users/" + params.id + "/pwd", params), // 重置用户密码
}