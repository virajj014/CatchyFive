import React from 'react'
import BannerSlider from '../../COMPONENTS/Banners/BannerSlider'
import HomeCategories from '../../COMPONENTS/Category/HomeCategories'
import Footer1 from '../../COMPONENTS/Footer/Footer1'
import Footer2 from '../../COMPONENTS/Footer/Footer2'
import Navbar from '../../COMPONENTS/Navbar/Navbar'
import Products_Sidebar from '../../COMPONENTS/Product/Products_Sidebar'

const Home = () => {
    return (
        <div>
            <Navbar />
            <BannerSlider/>
            <HomeCategories/>
            <Products_Sidebar/>
            <Footer1/>
            <Footer2/>
        </div>
    )
}

export default Home