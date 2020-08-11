import React, { Component } from 'react'
import "./Cart.css"
import { connect } from 'react-redux'
import { cartList, requestCartListAction, changeCheckedAction, changeOneCheckedAction } from '../../store'
import cart from "../../assets/img/tab_shopping_nor.png"
import { filterPrice } from "../../filter"
import { requestEditCart, requestDelCart } from '../../util/request'
import { Modal, Button, Toast } from "antd-mobile"
class Cart extends Component {
    constructor() {
        super()
        this.state = {
            edit: false,
            checkAll: false,
            allPrice: 0,
        }
    }
    componentDidMount() {
        let uid = JSON.parse(sessionStorage.getItem("user")).uid
        this.props.requestCartList(uid)
    }
    //编辑
    edit(e) {
        this.setState({
            edit: e.target.checked
        })
    }
    //全选
    selectAll(e) {
        this.setState({
            checkAll: e.target.checked
        })
        this.props.changeChecked(e.target.checked)

    }
    //单选
    selectOne(index) {
        this.props.changeOneChecked(index)
        let bool = this.props.cartList.every(item => item.checked)
        // console.log(bool);
        this.setState({
            checkAll: bool
        })
    }
    //减
    reduce(id, index) {
        //数量减到一就不再减了
        if (this.props.cartList[index].num === 1) {
            return;
        } else {
            requestEditCart({ id: id, type: "1" }).then(res => {
                if (res.data.code === 200) {
                    let uid = JSON.parse(sessionStorage.getItem("user")).uid
                    this.props.requestCartList(uid)
                }
            })
        }

    }
    //加
    add(id) {
        requestEditCart({ id: id, type: "2" }).then(res => {
            if (res.data.code === 200) {
                let uid = JSON.parse(sessionStorage.getItem("user")).uid
                this.props.requestCartList(uid)
            }
        })
    }
    //删除
    del(id) {
        let alert = Modal.alert;
        let alertInstance = alert("删除", "你确定要删除吗？",
            [
                //取消删除
                {
                    text: '取消',
                    onPress: () => {
                        alertInstance.close();
                    },
                    style: 'default'
                },
                //确定删除
                {
                    text: '确定',
                    onPress: () => {
                        requestDelCart({ id: id }).then(res => {
                            Toast.info(res.data.msg,1)
                        })
                        alertInstance.close();
                        let uid = JSON.parse(sessionStorage.getItem("user")).uid
                        this.props.requestCartList(uid)
                    }
                },
            ]
        );

    }

    render() {
        let { edit, allPrice, checkAll } = this.state
        let { cartList } = this.props
        cartList.forEach(item => {
            if (item.checked) {
                allPrice += item.num * item.price
            }
        })
        return (
            <div className="cart">
                <header>
                    <p>购物车</p>
                </header>
                <main >
                    {
                        cartList.length > 0 ?
                            cartList.map((item, index) => {
                                return (
                                    <div key={item.id} className="item">
                                        <div className="top">
                                            <i></i>
                                            <span>杭州保税区仓</span>
                                        </div>
                                        <div className={edit ? "bottom left" : "bottom"}>
                                            <div className="check">
                                                <input type="checkbox" id={item.id} className="checkbox" onChange={() => this.selectOne(index)} checked={item.checked} />
                                                <label htmlFor={item.id} className="checkbox"></label>
                                            </div>
                                            <img src={item.img} alt="" />
                                            <div className="info">
                                                <p className="name">{item.goodsname}</p>
                                                <span onClick={() => this.reduce(item.id, index)}>-</span>
                                                <span>{item.num}</span>
                                                <span onClick={() => this.add(item.id)}>+</span>
                                                <p className="allPrice">总价：{filterPrice(item.num * item.price)}</p>
                                            </div>
                                            <div className="price">￥{filterPrice(item.price)}</div>
                                            <div className="del">
                                                <Button onClick={() => this.del(item.id)}>删除</Button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                            : <div className="empty">
                                <div><img src={cart} alt="" /></div>
                                <p>购物车还是空的</p>
                                <p>快去逛逛吧~</p>
                            </div>
                    }
                </main>
                {
                    cartList.length > 0 ?
                        <div className="cart-foot">
                            <div>
                                <input type="checkbox" id="checkAll" className="checkAll" onChange={(e) => this.selectAll(e)} checked={checkAll} />
                                <label htmlFor="checkAll" className="checkAll"></label>
                                <p>全选</p>
                            </div>
                            <div>
                                <input type="checkbox" id="edit" className="edit" onChange={(e) => this.edit(e)} checked={edit} />
                                <label htmlFor="edit" className="edit"></label>
                                <p>编辑</p>
                            </div>
                            <div>
                                <p className="allCount">合计：{filterPrice(allPrice)}</p>
                                <p>(不含运费)</p>
                            </div>
                            <div>
                                <button className="compute">去结算</button>
                            </div>
                        </div>
                        : null
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    // console.log(state);
    return {
        cartList: cartList(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        requestCartList: (uid) => dispatch(requestCartListAction(uid)),
        changeChecked: (bool) => dispatch(changeCheckedAction(bool)),
        changeOneChecked: (info) => dispatch(changeOneCheckedAction(info))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Cart)
