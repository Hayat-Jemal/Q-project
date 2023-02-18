import React from 'react'
import "./about.css"
import image1 from "../Images/WhatsApp Image3.jpg"
function About() {
  return (
    <div className='about' id="about" style={{paddingTop:"80px"}}>
        <div className='aboutContainer' >
        <h1>What Makes Us</h1>
        <p className='title'>Different?</p>
        <div className='aboutDescription'>
        <p>Excellerent as a supporter of the UN Sustainable Development Goals has made a conscious decision to invest in a viable but historically underdeveloped country in Ethiopia to help develop local capacity, create technology jobs, and encourage higher education in technology while providing cost-effective solutions to our global clients at the uncompromised level of quality.</p>
        <p>We create value for the businesses we serve on two fronts, viz. solutions driven by Design Thinking and by application of new technologies and business models to improve customer experience and achieve operational resilience.</p>
        <p>Customer-centricity is the central theme of everything we do and we leverage our expertise in futuristic innovations offering future-proof solutions that helps business balance digital transformation with sustainability.</p>
        </div>
        </div>
        <div className='aboutImage'>
            <img src={image1} alt="" />
        </div>
        
    </div>
  )
}

export default About