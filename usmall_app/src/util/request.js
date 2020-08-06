//axios请求
import axios from "axios"
import qs from "qs"

//响应拦截
axios.interceptors.response.use(res => {
    console.log('本次请求的接口为：' + res.config.url);
    console.log(res);
    return res
})

//会员注册
export const requestRegister = (params) => {
    return axios({
        url: "api/register",
        method: "post",
        data: qs.stringify(params)
    })
}
//会员登录
export const requestLogin = (params) => {
    return axios({
        url: "api/login",
        method: "post",
        data: qs.stringify(params)
    })
}