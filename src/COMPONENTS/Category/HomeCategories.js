import React from 'react'
import img1 from '../../ASSETS/1.png'
import img2 from '../../ASSETS/2.png'
import img3 from '../../ASSETS/3.png'
import img4 from '../../ASSETS/4.png'
import './HomeCategories.css'


const HomeCategories = () => {
    return (
        <div className='homecategories'>
            <div className='container'>
                <img src={img1} alt="category" />
                <div className='content'>
                    <h1>
                        Vegetables at your doorstep
                    </h1>
                    <p> Shop vegetables now</p>
                </div>
            </div>

            <div className='container'>
                <img src={img2} alt="category" />
                <div className='content'>
                    <h1>
                        Vegetables at your doorstep
                    </h1>
                    <p>
                        Shop vegetables now
                    </p>
                </div>
            </div>

            <div className='container'>
                <img src={img3} alt="category" />
                <div className='content'>
                    <h1>
                        Vegetables at your doorstep
                    </h1>
                    <p> Shop vegetables now</p>
                </div>
            </div>

            <div className='container'>
                <img src={img4} alt="category" />
                <div className='content'>
                    <h1>
                        Vegetables at your doorstep
                    </h1>
                    <p> Shop vegetables now</p>
                </div>
            </div>
        </div>
    )
}

export default HomeCategories