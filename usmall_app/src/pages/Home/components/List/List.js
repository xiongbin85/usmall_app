import React from 'react'
import { filterPrice } from "../../../../filter"
import "./List.css"
export default function List(props) {
    let { proInfo } = props
    return (
        <div className="list">
            {
                proInfo.map(item => {
                    return (
                        <div key={item.id} className="list-item">
                            <div>
                                <img src={item.img} alt="" />
                            </div>
                            <div className="info">
                                <p className="goodsname">{item.goodsname}</p>
                                <p className="price">￥{filterPrice(item.price)}</p>
                                <button>立刻抢购</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
