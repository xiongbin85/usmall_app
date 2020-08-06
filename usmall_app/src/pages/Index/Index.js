import React, { Component } from 'react'
import { Switch, Route, Redirect } from "react-router-dom"
import lazyLoad from "../../util/lazyLoad"

const Home = lazyLoad(() => import("../Home/Home"))
const ProList = lazyLoad(() => import("../ProList/ProList"))
const Cart = lazyLoad(() => import("../Cart/Cart"))
const Mine = lazyLoad(() => import("../Mine/Mine"))
export default class Index extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/index/home" component={Home}></Route>
                    <Route path="/index/proList" component={ProList}></Route>
                    <Route path="/index/cart" component={Cart}></Route>
                    <Route path="/index/mine" component={Mine}></Route>
                    <Redirect to="/index/home"></Redirect>
                </Switch>
            </div>
        )
    }
}
