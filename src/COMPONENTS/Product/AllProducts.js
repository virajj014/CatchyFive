import React from 'react'
import ProductCard from './ProductCard'
import p11 from '../../ASSETS/Images/p-1-1.webp'
import p21 from '../../ASSETS/Images/p-2-1.webp'
import p31 from '../../ASSETS/Images/p-3-1.webp'
import p41 from '../../ASSETS/Images/p-4-1.webp'
import p51 from '../../ASSETS/Images/p-5-1.webp'
import p61 from '../../ASSETS/Images/p-6-1.webp'
import p71 from '../../ASSETS/Images/p-7-1.webp'
import p81 from '../../ASSETS/Images/p-8-1.webp'
import p91 from '../../ASSETS/Images/p-9-1.webp'
import p101 from '../../ASSETS/Images/p-10-1.webp'
import p111 from '../../ASSETS/Images/p-11-1.webp'
import p121 from '../../ASSETS/Images/p-12-1.webp'
import p131 from '../../ASSETS/Images/p-13-1.webp'
import p141 from '../../ASSETS/Images/p-14-1.webp'
import p151 from '../../ASSETS/Images/p-15-1.webp'
import p161 from '../../ASSETS/Images/p-16-1.webp'
import p171 from '../../ASSETS/Images/p-17-1.webp'
import p181 from '../../ASSETS/Images/p-18-1.webp'
import p191 from '../../ASSETS/Images/p-19-1.webp'
import p201 from '../../ASSETS/Images/p-20-1.webp'
import './AllProducts.css'
const AllProducts = () => {
    const products = [
        {
            id: 1,
            productimage: p11,
            productname: 'Product 1',
            productprice: 100,
            counttype: '1 each',
            discountprecent: 12
        },
        {
            id: 2,
            productimage: p21,
            productname: 'Product 2',
            productprice: 200,
            counttype: '1 each',
            discountprecent: 12
        },
        {
            id: 3,
            productimage: p31,
            productname: 'Product 3',
            productprice: 300,
            counttype: '1 each',
            discountprecent: 12
        },
        {
            id: 4,
            productimage: p41,
            productname: 'Product 4',
            productprice: 400,
            counttype: '1 each',
            discountprecent: 12
        },
        {
            id: 5,
            productimage: p51,
            productname: 'Product 5',
            productprice: 500,
            counttype: '1 each',
            discountprecent: 12
        },
        {
            id: 6,
            productimage: p61,
            productname: 'Product 6',
            productprice: 600,

            counttype: '1 each',
            discountprecent: 12
        },
        {
            id: 7,
            productimage: p71,
            productname: 'Product 7',
            productprice: 700,
            counttype: '1 each',
            discountprecent: 12
        },
        {
            id: 8,
            productimage: p81,
            productname: 'Product 8',
            productprice: 800,
            counttype: '1 each',
            discountprecent: 12
        },
        {
            id: 9,
            productimage: p91,
            productname: 'Product 9',
            productprice: 900,
            counttype: '1 each',
            discountprecent: 12
        },
        {
            id: 10,
            productimage: p101,
            productname: 'Product 10',
            productprice: 1000,
            counttype: '1 each',
            discountprecent: 12
        },
        {
            id: 11,
            productimage: p111,
            productname: 'Product 11',
            productprice: 1100,
            counttype: '1 each',
            discountprecent: 12
        },
        {
            id: 12,
            productimage: p121,
            productname: 'Product 12',
            productprice: 1200,
            counttype: '1 each',
            discountprecent: 12
        },
        {
            id: 13,
            productimage: p131,
            productname: 'Product 13',
            productprice: 1300,
            counttype: '1 each',
            discountprecent: 12
        },
        {
            id: 14,
            productimage: p141,
            productname: 'Product 14',
            productprice: 1400,
            counttype: '1 each',
            discountprecent: 12
        },
        {
            id: 15,
            productimage: p151,
            productname: 'Product 15',
            productprice: 1500,
            counttype: '1 each',
            discountprecent: 12
        },
        {
            id: 16,
            productimage: p161,
            productname: 'Product 16',
            productprice: 1600,
            counttype: '1 each',
            discountprecent: 12
        },
        {
            id: 17,
            productimage: p171,
            productname: 'Product 17',
            productprice: 1700,
            counttype: '1 each',
            discountprecent: 12
        },
        {
            id: 18,
            productimage: p181,
            productname: 'Product 18',
            productprice: 1800,
            counttype: '1 each',
            discountprecent: 12
        },
        {
            id: 19,
            productimage: p191,
            productname: 'Product 19',
            productprice: 1900,
            counttype: '1 each',
            discountprecent: 12
        },
        {
            id: 20,
            productimage: p201,
            productname: 'Product 20',
            productprice: 2000,
            counttype: '1 each',
            discountprecent: 12
        }
    ]
    return (
        <div className='allproducts'>
            <h1>All Products</h1>
            <div className='products'>
                {
                    products.map((item) => {
                        return (
                            <ProductCard data={item} key={item.id}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default AllProducts