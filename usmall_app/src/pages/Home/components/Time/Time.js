import React from 'react'
import time from "../../../../assets/img/time.jpg"
import "./Time.css"
export default function Time() {
    return (
        <div className="time">
            <div>
                <img src={time} alt=""/>
                <p>限时抢购</p>
            </div>
            <div>
                <img src={time} alt=""/>
                <p>积分商城</p>
            </div>
            <div>
                <img src={time} alt=""/>
                <p>联系我们</p>
            </div>
            <div>
                <img src={time} alt=""/>
                <p>商品分类</p>
            </div>
        </div>
    )
}
