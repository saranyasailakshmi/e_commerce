import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>NEW STOCK</h2>
        <div>
            <div className="hero-hand-icon">
                <p>new</p>
                <img src={hand_icon} alt="" style={{ width: '60px', height: 'auto'}}/>
            </div>
            <p>collections</p>
            <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
            <div>Latest Collections</div>
            <img src={arrow} alt="" style={{ width: '20px', height: 'auto'}}/>
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="" style={{ width: '600px', height: '800px'}}/>
      </div>
    </div>
  )
}

export default Hero
