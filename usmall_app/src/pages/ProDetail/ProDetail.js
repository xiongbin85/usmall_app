import React, { Component } from 'react'
import querystring from "querystring"
import { requestAddCart } from '../../util/request'
import "./ProDetail.css"
import { filterPrice } from "../../filter"
import { Toast } from "antd-mobile"
import { connect } from 'react-redux'
import { proDetail, requestProDetailAction } from '../../store'
class ProDetail extends Component {
    constructor() {
        super()
        this.state = {
            show: false
        }
    }
    componentDidMount() {
        // console.log(this.props.location);
        let result = querystring.parse(this.props.location.search.slice(1))
        this.props.requestProDetail(result.id)
    }
    //返回上一层
    back() {
        this.props.history.go(-1)
    }
    //加入购物车弹框的显示和隐藏
    show() {
        this.setState({
            show: !this.state.show
        })
    }
    //选中属性的样式
    active(index) {
        for (let i = 0; i < this.refs.attr.children.length; i++) {
            this.refs.attr.children[i].className = ""
        }
        this.refs.attr.children[index].className = "active"
    }
    //加入购物车
    add(id) {
        let uid = sessionStorage.getItem("uid");
        requestAddCart({
            uid: uid,
            goodsid: id,
            num: 1
        }).then(res => {
            if (res.data.code === 200) {
                Toast.info(res.data.msg)
                this.setState({
                    show: !this.state.show
                })
            } else {
                Toast.info(res.data.msg)
            }
        })

    }
    render() {
        let { show } = this.state
        let { detail } = this.props
        if (detail.description && this.refs.des) {
            this.refs.des.innerHTML = detail.description;
        }
        return (
            <div className="detail">
                <header>
                    <a onClick={() => this.back()}>返回</a>
                    <h3>商品详情</h3>
                </header>
                <main>
                    <div>
                        <img src={detail.img} alt="" />
                    </div>
                    <div className="info">
                        <p className="goodsname">{detail.goodsname}</p>
                        <p className="detail-price">
                            <span className="price">￥{filterPrice(Number(detail.price))}</span>
                            {detail.ishot === 1 ? <span className="hot">热卖</span> : null}
                            {detail.isnew === 1 ? <span className="hot">新品</span> : null}
                        </p>
                        <del>￥{detail.market_price}</del>
                        <div className="collect">
                            <i></i>
                            <p>收藏</p>
                        </div>
                    </div>
                    <div ref="des" className="des">
                    </div>
                </main>
                <footer>
                    <div className="add" onClick={() => this.show()}>加入购物车</div>
                </footer>
                {
                    show ? (
                        <div className="mask">
                            <div className="con">
                                <div className="img">
                                    <img src={detail.img} alt="" />
                                    <span>{detail.goodsname}</span>
                                </div>
                                <p>{detail.specsname}</p>
                                <div className="attr" ref="attr">
                                    {
                                        detail.specsattr ?
                                            detail.specsattr.map((item, index) => {
                                                return <span key={item} onClick={() => this.active(index)}>{item}</span>
                                            }) : null
                                    }
                                </div>
                                <button onClick={() => this.add(detail.id)}>加入购物车</button>
                            </div>
                        </div>
                    ) : null
                }

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        detail: proDetail(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        requestProDetail: (id) => dispatch(requestProDetailAction(id))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProDetail)