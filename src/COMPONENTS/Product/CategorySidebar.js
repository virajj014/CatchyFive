import React from 'react'
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
import './CategorySidebar.css'

const CategorySidebar = () => {
    const data = [
        {
            id: 1,
            categoryimage: p11,
            categoryname: 'Category 1'
        },
        {
            id: 2,
            categoryimage: p21,
            categoryname: 'Category 2'
        },
        {
            id: 3,
            categoryimage: p31,
            categoryname: 'Category 3'
        },
        {
            id: 4,
            categoryimage: p41,
            categoryname: 'Category 4'
        },
        {
            id: 5,
            categoryimage: p51,
            categoryname: 'Category 5'
        },
        {
            id: 6,
            categoryimage: p61,
            categoryname: 'Category 6'
        },
        {
            id: 7,
            categoryimage: p71,
            categoryname: 'Category 7'
        },
        {
            id: 8,
            categoryimage: p81,
            categoryname: 'Category 8'
        },
        {
            id: 9,
            categoryimage: p91,
            categoryname: 'Category 9'
        },
        {
            id: 10,
            categoryimage: p101,
            categoryname: 'Category 10'
        },
    ]

    const [show, setShow] = React.useState(-1)
    return (
        <div className='categorysidebar'>
            {
                data.map((item) => {
                    return (
                        <div className='category'>
                            <div className='s1'>
                                <img src={item.categoryimage} alt='categoryimage' />
                                <h3>{item.categoryname}</h3>

                                <div className='dropicon'
                                    onClick={() => {
                                        setShow(show === item.id ? -1 : item.id)
                                    }}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </div>
                            </div>

                            {
                                show === item.id &&
                                <div className='s2'>
                                    <p className='s2p1'>Sub Category 1</p>
                                    <p className='s2p2'>Sub Category 2</p>
                                    <p className='s2p3'>Sub Category 3</p>
                                </div>
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CategorySidebar