//创建仓库
import { createStore, applyMiddleware } from "redux"
//使得action可以异步操作
import thunk from "redux-thunk"
//数据请求
import { requestIndexGoods, requestBanner, requestProList, requestCartList, requestDetail } from "../util/request"
import { Component } from "react"

//初始状态
const initState = {
    banner: [],
    proInfo: [],
    proList: [],
    cartList: [],
    proDetail: {}
}

//action creators
//轮播图
const changeBannerAction = (arr) => {
    return { type: "changeBanner", list: arr }
}
export const requestBannerAction = () => {
    return (dispatch, getState) => {
        const { banner } = getState()
        if (banner.length > 0) {
            return;
        }
        requestBanner().then(res => {
            dispatch(changeBannerAction(res.data.list))
        })
    }
}
//首页商品信息
const changeProInfoAction = (arr) => {
    return { type: "changeProInfo", list: arr }
}
export const requestProInfoAction = () => {
    return (dispatch, getState) => {
        const { proInfo } = getState()
        if (proInfo.length > 0) {
            return;
        }
        requestIndexGoods().then(res => {
            dispatch(changeProInfoAction(res.data.list[0].content))
        })
    }
}
//商品详情
const getProDetailAction = (obj) => {
    return { type: "getProDetail", detail: obj }
}
export const requestProDetailAction = (id) => {
    return (dispatch, getState) => {
        if (id === getState().proDetail.id) {
            return
        }
        requestDetail({ id: id }).then(res => {
            let list = res.data.list[0]
            list.img = Component.prototype.$img + list.img
            list.specsattr = JSON.parse(list.specsattr)
            dispatch(getProDetailAction(list))
        })
    }
}
//商品列表
const changeProListAction = (arr) => {
    return { type: "changeProList", list: arr }
}
export const requestProListAction = () => {
    return (dispatch, getState) => {
        requestProList().then(res => {
            const { proList } = getState()
            if (proList.length > 0) {
                return;
            }
            dispatch(changeProListAction(res.data.list))
        })
    }
}
//购物车列表
const getCartListAction = (arr) => {
    return { type: "getCartList", list: arr }
}
//全选
export const changeCheckedAction = (bool) => {
    return { type: "changeChecked", bool }
}
//单选
export const changeOneCheckedAction = (index) => {
    return { type: "changeOneChecked", index }
}
export const requestCartListAction = (uid) => {
    return (dispatch, getState) => {
        requestCartList({ uid: uid }).then(res => {
            let list = res.data.list?res.data.list:[]
            list.forEach(item => {
                item.img = Component.prototype.$img + item.img
                item.checked = false
            })
            dispatch(getCartListAction(list))
        })
    }
}
//reducer 修改state
const reducer = (state = initState, action) => {

    switch (action.type) {
        case "changeProInfo":
            return {
                ...state,
                proInfo: action.list
            }
        case "changeBanner":
            return {
                ...state,
                banner: action.list
            }
        case "changeProList":
            return {
                ...state,
                proList: action.list
            }
        //{type:"getProDetail",detail}
        case "getProDetail":
            return {
                ...state,
                proDetail: action.detail
            }
        case "getCartList":
            return {
                ...state,
                cartList: action.list
            }
        case "changeChecked":
            let cartList1 = [...state.cartList]
            cartList1.forEach(item => {
                item.checked = action.bool
            })
            return {
                ...state,
                cartList: cartList1
            }
        //{type:"changeOneChecked",index}
        case "changeOneChecked":
            let cartList2 = [...state.cartList]
            cartList2[action.index].checked = !cartList2[action.index].checked
            return {
                ...state,
                cartList: cartList2
            }
        default:
            return state;
    }
}

//导出首页商品信息
export const proInfo = (state) => state.proInfo
//导出轮播图
export const banner = (state) => state.banner
//导出商品详情
export const proDetail = (state) => state.proDetail
//导出商品列表
export const proList = (state) => state.proList
//导出购物车列表
export const cartList = (state) => state.cartList

const store = createStore(reducer, applyMiddleware(thunk));

export default store




