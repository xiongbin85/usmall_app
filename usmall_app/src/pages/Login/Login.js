import React, { Component } from 'react'
import { Link } from "react-router-dom"
import "./Login.css"
import { requestLogin } from '../../util/request'
import { Toast } from "antd-mobile"
export default class Login extends Component {
    constructor() {
        super()
        this.state = {
            user: {
                phone: "",
                password: ""
            }
        }
    }
    changeUser(e, key) {
        this.setState({
            user: {
                ...this.state.user,
                [key]: e.target.value
            }
        })
    }
    login() {
        requestLogin(this.state.user).then(res => {
            if (res.data.code === 200) {
                Toast.info(res.data.msg)
                sessionStorage.setItem("uid", res.data.list.uid)
                this.props.history.push("/index")
            } else {
                Toast.info(res.data.msg)
            }
        })
    }
    render() {
        let { user } = this.state
        return (
            <div className="login">
                <header>
                    <h3>登录</h3>
                    <Link to="/register">注册</Link>
                </header>
                <main>
                    <div className="login-tel">账号：<input type="text" value={user.phone} onChange={(e) => this.changeUser(e, "phone")} /></div>
                    <div className="login-pass">密码：<input type="password" value={user.password} onChange={(e) => this.changeUser(e, "password")} /></div>
                    <p>忘记密码</p>
                    <div>
                        <button onClick={() => this.login()}>登录</button>
                    </div>
                </main>
            </div>
        )
    }
}
