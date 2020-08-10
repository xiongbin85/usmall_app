import React, { Component } from 'react'
import { Route, Redirect } from "react-router-dom"
export default class MyRoute extends Component {
    render() {
        const uid = sessionStorage.getItem("uid")
        return (
            // 路由拦截，只有拥有用户名才可以进入
            <div>
                {uid ? <Route {...this.props}></Route> : <Redirect to="/login"></Redirect>}
            </div>
        )
    }
}