import React from 'react'
import './Breadcrum.css'
import arrow_icon from '../Assets/right_arrow.png'

const Breadcrum = (props) => {
  const {product} = props;
  return (
    <div className='breadcrum'>
      HOME <img src={arrow_icon} alt="" style={{width:10}} />SHOP <img src={arrow_icon} alt="" style={{width:10}}  />{product.category} <img src={arrow_icon} alt="" style={{width:10}} /> {product.name}
    </div>
  )
}

export default Breadcrum
