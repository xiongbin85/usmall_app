import React, { Component } from 'react'
import Header from "./components/Header/Header"
import Banner from "./components/Banner/Banner"
import List from "./components/List/List"
import Time from "./components/Time/Time"
import { requestBanner, requestIndexGoods } from '../../util/request'
export default class Home extends Component {
    constructor() {
        super()
        this.state = {
            banner: [],
            proInfo: []
        }
    }
    componentDidMount() {
        //轮播图
        requestBanner().then(res => {
            res.data.list.forEach(item => {
                item.img = this.$img + item.img
            })
            let arr = res.data.list
            // console.log(arr);
            this.setState({
                banner: arr
            })
        })
        //首页商品信息
        requestIndexGoods().then(res => {
            res.data.list[0].content.forEach(item => {
                item.img = this.$img + item.img
            })
            let arr = res.data.list[0].content
            // console.log(arr);
            this.setState({
                proInfo: arr
            })
        })
    }
    render() {
        let { banner, proInfo } = this.state
        return (
            <div>
                <Header></Header>
                <Banner banner={banner}></Banner>
                <Time></Time>
                <List proInfo={proInfo}></List>
            </div>
        )
    }
}
