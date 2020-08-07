import React, { Component } from 'react'
import "./ProList.css"
import { connect } from 'react-redux'
import { requestProListAction, proList } from '../../store'
import { Link } from 'react-router-dom'

class ProList extends Component {
    constructor() {
        super()
        this.state = {
            n: 0
        }
    }
    componentDidMount() {
        //requestProList().then(res=>{})
        //console.log(this.props);
        this.props.requestProList()
    }
    changeN(index) {
        this.setState({
            n: index
        })
    }
    render() {
        let { n } = this.state
        let { proList } = this.props
        // console.log(proList[n].children);
        return (
            <div className="proList">
                <header>
                    <p>分类</p>
                </header>
                <main>
                    <div className="proList-left">
                        <ul>
                            {
                                proList.map((item, index) => {
                                    return <li key={item.id} onClick={() => this.changeN(index)} className={n === index ? 'active' : ''}>{item.catename}</li>
                                })
                            }
                        </ul>
                    </div>
                    <div className="proList-rigth">
                        <ul>
                            {
                                proList.length > 0 ?
                                    proList[n].children.map(item => {
                                        return (
                                            <Link to={"/index/proInfo/?pid=" + item.id + "&name=" + item.catename} key={item.id}>
                                                <li>
                                                    <img src={item.img} alt="" className="img" />
                                                    <p>{item.catename}</p>
                                                </li>
                                            </Link>
                                        )
                                    })
                                    : null
                            }
                        </ul>
                    </div>
                </main>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    console.log(state);
    return {
        proList: proList(state),
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        requestProList: () => dispatch(requestProListAction())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProList)