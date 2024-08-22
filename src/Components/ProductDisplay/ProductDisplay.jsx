import React,{useContext} from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star.png'
import star_dull_icon from '../Assets/half_star.png'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
            <img src={product.image} alt="" style={{width:200, height:200}}/>
            <img src={product.image} alt="" style={{width:200, height:200}}/>
            <img src={product.image} alt="" style={{width:200, height:200}}/>
            <img src={product.image} alt="" style={{width:200, height:200}}/>
        </div>
        <div className="productdisplay-img">
            <img className='productdisplay-main-img' src={product.image} alt=""/>
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
            <img src={star_icon} alt="" style={{width:20, height:20}}/>
            <img src={star_icon} alt="" style={{width:20, height:20}}/>
            <img src={star_icon} alt="" style={{width:20, height:20}}/>
            <img src={star_icon} alt="" style={{width:20, height:20}}/>
            <img src={star_dull_icon} alt="" style={{width:20, height:20}}/>
            <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
            <div className="productdisplay-right-price-old">₹{product.old_price}</div>
            <div className="productdisplay-right-price-new">₹{product.new_price}</div>
        </div>
        <div className="productdisplay-right-description">
            Dates ladoo is a delicious and nutritious Indian sweet made from dates, nuts, and desiccated coconut. 
            It's a no-sugar-added treat, as the natural sweetness of dates is enough to make it delightfully sweet. 
            This healthy snack is often enjoyed during festivals or as an energy-boosting snack.
        </div>
        <div className="productdisplay-right-size">
            <h1> Select Quantity </h1>
            <div className="productdisplay-right-sizes">
                <div>250g</div>
                <div>500g</div>
                <div>750g</div>
                <div>1kg</div>
            </div>
        </div>
        <button onClick = {()=>{addToCart(product.id)}}>  ADD TO CART </button>
        <p className='productdisplay-right-category'><span>Category :</span>SWEET,DATES LADOO</p>
        <p className='productdisplay-right-category'><span>Tags :</span>FRESH</p>
      </div>
    </div>
  )
}

export default ProductDisplay
