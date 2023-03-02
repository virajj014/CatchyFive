import React from 'react'
import AllProducts from './AllProducts'
import CategorySidebar from './CategorySidebar'
import './Products_Sidebar.css'

const Products_Sidebar = () => {
    return (
        <div className='product_sidebar'>
            <CategorySidebar />
            <AllProducts />
        </div>
    )
}

export default Products_Sidebar