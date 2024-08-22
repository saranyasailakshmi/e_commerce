import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews(122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>An e-commerce website is an online platform that allows businesses
            to sell products and services directly to consumers over the internet. 
            It typically features a catalog of items, a shopping cart system, and 
            secure payment processing. Customers can browse products, read descriptions 
            and reviews, add items to their cart, and complete purchases from the comfort of their 
            own homes. Additionally, these websites often offer account creation, order tracking, and 
            customer service functionalities to enhance the shopping experience.</p>
      </div>
    </div>
  )
}

export default DescriptionBox
