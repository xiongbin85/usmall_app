import React from 'react'
import { Carousel } from 'antd-mobile';
import "./Banner.css"
export default function Banner(props) {
    let { banner } = props
    return (
        <div className="banner">
            <Carousel
                autoplay={true}
                infinite
            >
                {
                    banner.map(item => {
                        return <img key={item.id} src={item.img} alt="" />
                    })
                }
            </Carousel>
        </div>
    )
}
