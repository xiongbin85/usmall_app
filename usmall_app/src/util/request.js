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
//获取一个商品信息
export const requestDetail = (params) => {
    return axios({
        url: "api/getgoodsinfo",
        method: "get",
        params
    })
}

//添加购物车
export const requestAddCart = (params) => {
    return axios({
        url: "api/cartadd",
        method: "post",
        data: qs.stringify(params)
    })
}
//获取分类树形结构
export const requestProList = () => {
    return axios({
        url: "api/getcatetree",
        method: "get",
    })
}
//获取分类商品
export const requestProInfo = (params)=>{
    return axios({
        url: "api/getgoods",
        method: "get",
        params
    })
}