import React from 'react'
import poster from '../../ASSETS/poster1.png'
import './Footer1.css'
import veges from '../../ASSETS/veges.png'
import logo from '../../ASSETS/logo.png'
const Footer1 = () => {
    return (
        <div className="footer1">
                <div className='left'>
                    <img src={veges} alt="poster" />
                </div>
                <div className='right'>
                    <h1>Fresh Vegetables & Fruits at your doorstep
                    </h1>
                    <p>We deliver fresh vegetables & fruits at your doorstep.
                        We deliver fresh vegetables & fruits at your doorstep.
                    </p>
                </div>
        </div>
    )
}

export default Footer1