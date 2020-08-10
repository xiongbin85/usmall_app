import React, { Component } from 'react'
import { Switch, Route, Redirect, NavLink } from "react-router-dom"
import lazyLoad from "../../util/lazyLoad"
import "./Index.css"
import MyRoute from "../MyRoute/MyRoute"
const Home = lazyLoad(() => import("../Home/Home"))
const ProList = lazyLoad(() => import("../ProList/ProList"))
const ProInfo = lazyLoad(() => import("../ProInfo/ProInfo"))
const Cart = lazyLoad(() => import("../Cart/Cart"))
const Mine = lazyLoad(() => import("../Mine/Mine"))
export default class Index extends Component {
    render() {
        return (
            <div className="index">
                <Switch>
                    <MyRoute path="/index/home" component={Home}></MyRoute>
                    <MyRoute path="/index/proList" component={ProList}></MyRoute>
                    <MyRoute path="/index/proInfo" component={ProInfo}></MyRoute>
                    <MyRoute path="/index/cart" component={Cart}></MyRoute>
                    <MyRoute path="/index/mine" component={Mine}></MyRoute>
                    <Redirect to="/index/home"></Redirect>
                </Switch>
                <footer>
                    <div>
                        <NavLink to="/index/home" activeClassName="active">
                            <i className="home"></i>
                            <p>首页</p>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to="/index/proList" activeClassName="active">
                            <i className="list"></i>
                            <p>分类</p>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to="/index/cart" activeClassName="active">
                            <i className="index-cart"></i>
                            <p>购物车</p>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to="/index/mine" activeClassName="active">
                            <i className="mine"></i>
                            <p>我的</p>
                        </NavLink>
                    </div>
                </footer>
            </div>
        )
    }
}
