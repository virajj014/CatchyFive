import React, { useEffect, useState } from 'react'
import img1 from './img1.jpeg'
import img2 from './img2.jpeg'
import './BannerSlider.css'
const BannerSlider = () => {

  const [data, setData] = useState([
    {
        BannerImageFilePath: img1,
    },
    {
        BannerImageFilePath: img2,
    }
  ])
  const [current, setCurrent] = useState('')



  useEffect(() => {
    const timer = setTimeout(() => {
      if (data.length > 0) {
        let index = data.indexOf(current)
        if (index == data.length - 1) {
          setCurrent(data[0])
        }
        else {
          setCurrent(data[index + 1])
        }
      }

      // console.log(current)
    }, 5000);
    return () => clearTimeout(timer);
  }, [current])


  return (
    <div
      className='banner-slider'
    >
      <div className='imgcont'>
        <img src={current.BannerImageFilePath} alt='' className='zoom-image' />
        <div className='txtcont'>
          <div className='txtcontin'>
            {/* <h1>{current.Title}</h1> */}
            {/* <h2>{current.h2}</h2> */}
            {/* <h3>{current.h3}</h3> */}
            {/* <button>ORDER NOW</button> */}
          </div>
        </div>
      </div>

    </div>
  )
}

export default BannerSlider