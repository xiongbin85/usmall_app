import React, { Component } from 'react'
import { Route, Redirect } from "react-router-dom"
export default class MyRoute extends Component {
    render() {
        const uid = sessionStorage.getItem("uid")
        return (
            // 路由拦截，只有用户存在的时候才可以访问路由
            <div>
                {uid ? <Route {...this.props}></Route> : <Redirect to="/login"></Redirect>}
            </div>
        )
    }
}