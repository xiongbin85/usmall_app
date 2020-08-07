//创建仓库
import { createStore, applyMiddleware } from "redux"
//使得action可以异步操作
import thunk from "redux-thunk"
import { requestIndexGoods, requestBanner } from "../util/request"

//初始状态
const initState = {
    banner: [],
    proInfo: []
}

//action creators
//修改轮播图
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
//修改首页商品信息
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
        default:
            return state;
    }
}

//导出首页商品信息
export const proInfo = (state) => state.proInfo
//导出轮播图
export const banner = (state) => state.banner

const store = createStore(reducer, applyMiddleware(thunk));

export default store




