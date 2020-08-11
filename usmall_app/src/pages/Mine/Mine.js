import React, { Component } from 'react'
import "./Mine.css"
import img from "../../assets/img/1.jpg"
export default class Mine extends Component {
    constructor(){
        super()
        this.state={
            username:JSON.parse(sessionStorage.getItem("user")).nickname
        }
    }
    render() {
        let {username} = this.state
        return (
            <div className="mine">
                <header>
                    <div><i className="set"></i></div>
                    <span>个人中心</span>
                    <div> <i className="msg"></i></div>
                </header>
                <div>
                    <img src={img} alt="" />
                    <p className="name">{username}</p>
                    <p className="collect">
                        <i></i>
                        <span>我的收藏(5)</span>
                        <span className="order">查看订单</span>
                    </p>
                </div>
                <div className="content">
                    <div className="express">
                        <i></i>
                        <p>待发货</p>
                    </div>
                    <div className="express">
                        <i className="has"></i>
                        <p>待发货</p>
                    </div>
                    <div className="express">
                        <i className="has"></i>
                        <p>待发货</p>
                    </div>
                    <div className="express">
                        <i className="has"></i>
                        <p>待发货</p>
                    </div>
                    <div className="express">
                        <i className="has"></i>
                        <p>待发货</p>
                    </div>
                </div>

                <div className="adress">
                    <p>收货地址管理</p>
                </div>
            </div>
        )
    }
}
