import React from 'react'
import './style.css'
import Indiaflag from '../../assets/IndiaFlag.png'

const SubHeader = () => {
  return (
    <div className='subheader'>

      <div className='ship'>
        <p>Ships to:</p>
        <img src={Indiaflag} alt="INDIA Flag" />
        <p>INDIA</p>
      </div>
      <div>
        <p>20% OFF Coupon Activated for a Single Item.</p>
      </div>
    </div>
   
  )
}

export default SubHeader
