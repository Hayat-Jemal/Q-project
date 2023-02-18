import React from 'react'
import img from "../Images/managed-services.svg"
import image1 from "../Images/WhatsApp Image3.jpg"
import "./withUs.css"


function WithUs() {
  return (
    <div className='withUs' id="withus">
    <h1>What You Get from</h1>
    <h2 >Working With Us</h2>
    <div className='withUsall'>
    <div className='withUsContainer'>
    <div className='withUsDescWrapper'>
    <img src={img} alt="" />
    <p className='withUsTitle'>Customer-centricity</p>
    <p className='withUsDescription'>Customer-centricity is at the heart of Excellerent’s strategy and culture. We seek to nurture  customer relationships by providing a consistent and personalized experience across each touchpoint and interaction.</p> 
    </div>
    <div className='withUsDescWrapper'>
    <img src={img} alt="" />
    <p className='withUsTitle'>Customer-centricity</p>
    <p className='withUsDescription'>Customer-centricity is at the heart of Excellerent’s strategy and culture. We seek to nurture  customer relationships by providing a consistent and personalized experience across each touchpoint and interaction.</p> 
    </div>
    </div>
    <div className='withUsContainer'>
    <div className='withUsDescWrapper'>
    <img src={img} alt="" />
    <p className='withUsTitle'>Customer-centricity</p>
    <p className='withUsDescription'>Customer-centricity is at the heart of Excellerent’s strategy and culture. We seek to nurture  customer relationships by providing a consistent and personalized experience across each touchpoint and interaction.</p> 
    </div>
    <div className='withUsDescWrapper'>
    <img src={img} alt="" />
    <p className='withUsTitle'>Customer-centricity</p>
    <p className='withUsDescription'>Customer-centricity is at the heart of Excellerent’s strategy and culture. We seek to nurture  customer relationships by providing a consistent and personalized experience across each touchpoint and interaction.</p> 
    </div>
    </div>
    <div className='withUsImage'>
    <img src={image1} alt="" />
    </div>
    </div>
    </div>
    
  )
}

export default WithUs