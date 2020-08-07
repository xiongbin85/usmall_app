import React from 'react'
import "./Header.css"
import logo from '../../../../assets/img/logo.jpg'
export default function Header() {
    return (
        <div className="header">
            <img src={logo} alt="" />
            <input type="text" placeholder="寻找商品"/>
        </div>
    )
}
