import React, { Component } from 'react'
import "./Register.css"
import { Link } from "react-router-dom"
import { requestRegister } from '../../util/request'
import { Toast } from "antd-mobile"
export default class Register extends Component {
    constructor() {
        super()
        this.state = {
            user: {
                phone: "",
                nickname: "",
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
    register() {
        let { user } = this.state
        let reg = /^1[3456789]\d{9}$/
        if (user.phone === "" || user.nickname === "" || user.password === "") {
            Toast.info("输入的内容不能为空")
            return
        }
        if (!reg.test(user.phone)) {
            Toast.info("手机号有误，请重新输入")
            return
        }
        requestRegister(this.state.user).then(res => {
            if (res.data.code === 200) {
                Toast.info("注册成功")
                this.props.history.push("/login")
            } else {
                Toast.info(res.data.msg)
            }
        })
    }
    render() {
        let { user } = this.state
        return (
            <div className="reg">
                <header>
                    <Link to="/login">返回</Link>
                    <h3>注册</h3>
                </header>
                <main>
                    <div className="inp ">手机号：<input type="text" value={user.phone} onChange={(e) => this.changeUser(e, "phone")} /></div>
                    <div className="inp ">昵称：<input type="text" value={user.nickname} onChange={(e) => this.changeUser(e, "nickname")} /></div>
                    <div className="inp ">密码：<input type="password" value={user.password} onChange={(e) => this.changeUser(e, "password")} /></div>
                    <div>
                        <button onClick={() => this.register()}>注册</button>
                    </div>
                </main>
            </div>
        )
    }
}
