import React, { Component } from 'react'
import Header from "./components/Header/Header"
import Banner from "./components/Banner/Banner"
import List from "./components/List/List"
import Time from "./components/Time/Time"
import { connect } from 'react-redux'
import { proInfo, requestProInfoAction, requestBannerAction, banner } from "../../store"
class Home extends Component {
    componentDidMount() {
        //轮播图
        this.props.requestBanner()
        //首页商品信息
        this.props.requestProInfo()
    }
    render() {
        let { proInfo, banner } = this.props
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
const mapStateToProps = (state) => {
    // console.log(state);
    return {
        proInfo: proInfo(state),
        banner: banner(state)
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        requestProInfo: () => dispatch(requestProInfoAction()),
        requestBanner: () => dispatch(requestBannerAction())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)