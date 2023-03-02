import React from 'react'
import Slider from "react-slick";
import './BannerSlider.css'
const BannerSlider = () => {
    const data = [
        {
            id: 1,
            image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
            title: 'Fresh Vegetables & Fruits at your doorstep',
            description: 'We deliver fresh vegetables & fruits at your doorstep',
            button: 'Shop Now'
        },
        {
            id: 2,
            image: 'https://images.unsplash.com/photo-1495480137269-ff29bd0a695c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
            title: 'Fresh Vegetables & Fruits at your doorstep',
            description: 'Cherries and berries. Sweet peaches and nectarines. Summer baking season is here, and I couldn’t be more delighted.',
            button: 'Shop Now'
        }
    ]

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className='bannerslider'>
            <Slider {...settings} className='bannerslider'>
                {
                    data.map(item => {
                        return (
                            <div key={item.id} className='imagecont'>
                                <img src={item.image} alt="banner" />
                                <div className='content'>
                                    <h1>{item.title}</h1>
                                    <p>{item.description}</p>
                                    <button>{item.button}</button>
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    )
}

export default BannerSlider