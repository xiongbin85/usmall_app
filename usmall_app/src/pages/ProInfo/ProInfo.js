import React, { Component } from 'react'
import { requestProInfo } from '../../util/request'
import querystring from "querystring"
import "./ProInfo.css"
import { Link } from "react-router-dom"
import { filterPrice } from "../../filter"
export default class ProInfo extends Component {
    constructor() {
        super()
        this.state = {
            proInfo: [],
            name: ""
        }
    }
    componentDidMount() {
        let pid = querystring.parse(this.props.location.search.slice(1)).pid
        let name = querystring.parse(this.props.location.search.slice(1)).name
        requestProInfo({ fid: pid }).then(res => {
            let list = res.data.list
            if (!list) {
                this.setState({
                    proInfo: list,
                    name: name
                })
            } else {
                // list.forEach(item => {
                //     item.img = this.$img + item.img
                // })
                // console.log(list);
                this.setState({
                    proInfo: list,
                    name: name
                })
            }

        })
    }
    render() {
        let { proInfo, name } = this.state
        console.log(proInfo);
        return (
            <div className="proInfo">
                <header>
                    <Link to="/index/proList">返回</Link>
                    <h3>{name}</h3>
                </header>
                {
                    proInfo ?
                        <main>
                            <ul>
                                {
                                    proInfo.length > 0 ?
                                        proInfo.map(item => {
                                            return (
                                                <Link to={"/proDetail/?id=" + item.id} key={item.id}>
                                                    <li >
                                                        <div>
                                                            <img src={item.img} alt="" />
                                                        </div>
                                                        <div>
                                                            <p className="name">{item.goodsname}</p>
                                                            <p className="price">￥{filterPrice(item.price)}</p>
                                                            <span>立刻抢购</span>
                                                        </div>
                                                    </li></Link>
                                            )
                                        })
                                        : null
                                }
                            </ul>
                        </main>
                        : <p>暂无数据</p>
                }
            </div>
        )
    }
}
