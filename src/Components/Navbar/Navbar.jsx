import React ,{useContext, useState} from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart from '../Assets/cart.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

const Navbar=()=> {
    const [menu,setMenu] = useState('shop');
    const {getTotalCartItems} = useContext(ShopContext)

  return (
    <div className='navbar'>
      <div className="nav-logo">
      <img 
        src={logo} 
        alt="Logo" 
        style={{ 
          width: '180px', 
          height: 'auto'
        }} 
      />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}} to ='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("sweet")}}><Link style={{textDecoration:'none'}} to = '/sweet'>Sweet</Link>{menu==="sweet"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("hot")}}><Link style={{textDecoration:'none'}} to='/hot'>Hot</Link>{menu==="hot"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to = '/cart'><img src={cart} alt="" style={{ width: '50px', height: 'auto' }}/></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar
