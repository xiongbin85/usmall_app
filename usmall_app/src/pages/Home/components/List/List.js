import React from 'react'
import { filterPrice } from "../../../../filter"
import "./List.css"
import {withRouter} from "react-router-dom"


function List(props) {
    let { proInfo } = props;    
    const getDetail = (id) => {
        props.history.push("/proDetail/?id=" + id)
    }
    return (
        <div className="list">
            {
                proInfo.map(item => {
                    return (
                        <div key={item.id} className="list-item" onClick={() => getDetail(item.id)}>
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
export default withRouter(List)
