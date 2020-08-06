import React, { Component } from 'react'
function lazyLoad(fn) {
    class load extends Component {
        constructor() {
            super()
            this.state = {
                C: null
            }
        }
        componentDidMount() {
            fn().then(mod => {
                this.setState({
                    C: mod.default
                })
            })
        }
        render() {
            const { C } = this.state;
            return (
                <div>
                    {C ? <C {...this.props}></C> : null}
                </div>
            )
        }
    }
    return load
}

export default lazyLoad;




