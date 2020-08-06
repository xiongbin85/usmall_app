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
//首页分类信息
// export const requestCate = () => {
//     return axios({
//         url: "api/getcate",
//         method: "get",
//     })
// }
//首页轮播图
export const requestBanner = () => {
    return axios({
        url: "api/getbanner",
        method: "get",
    })
}
//限时秒杀信息
// export const requestSeckill = () => {
//     return axios({
//         url: "api/getseckill",
//         method: "get",
//     })
// }
//首页商品信息
export const requestIndexGoods = () => {
    return axios({
        url: "api/getindexgoods",
        method: "get",
    })
}