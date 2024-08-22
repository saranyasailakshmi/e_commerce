import React from 'react'
import './Footer.css'
import instagram_icon from '../Assets/insta_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
import logo from '../Assets/logo.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={logo} alt="" style={{width:200}} />
            <p>SHOPPER</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Product</li>
            <li>Office</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <img src={instagram_icon} alt="" style={{width:30}} />
            </div>
            <div className="footer-icons-container">
                <img src={whatsapp_icon} alt="" style={{width:30}}/>
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2023 - All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer
