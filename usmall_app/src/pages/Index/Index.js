import React, { Component } from 'react'
import { Switch, Route, Redirect, NavLink } from "react-router-dom"
import lazyLoad from "../../util/lazyLoad"
import "./Index.css"
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
                    <Route path="/index/home" component={Home}></Route>
                    <Route path="/index/proList" component={ProList}></Route>
                    <Route path="/index/proInfo" component={ProInfo}></Route>
                    <Route path="/index/cart" component={Cart}></Route>
                    <Route path="/index/mine" component={Mine}></Route>
                    <Redirect to="/index/home"></Redirect>
                </Switch>
                <footer>
                    <div>
                        <NavLink to="/index/home" activeClassName="active">
                            <i className="home"></i>
                            <span>首页</span>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to="/index/proList" activeClassName="active">
                            <i className="list"></i>
                            <span>分类</span>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to="/index/cart" activeClassName="active">
                            <i className="cart"></i>
                            <span>购物车</span>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to="/index/mine" activeClassName="active">
                            <i className="mine"></i>
                            <span>我的</span>
                        </NavLink>
                    </div>
                </footer>
            </div>
        )
    }
}
