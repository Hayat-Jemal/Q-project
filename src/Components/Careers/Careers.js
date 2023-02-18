import React from 'react'
import "./careers.css"
import image1 from "../Images/WhatsApp Image3.jpg"
function Careers() {
  return (
    <div className='careers' id="careers">
    <div className='careersContainer'>
    <h1>Take a Look at</h1>
    <h2 className='careerstitle'>Excellerent Centers Across US, Ethiopia & India </h2>
    <div className='careersaboutDescription'>
    <p>Our modern workplace design fosters team productivity and collaboration. Access to the right tools improves the performance of our pool of highly skilled talent specializing in Agile methodology, AI, data analytics, and DevOps practices. Modern and informal workspaces facilitate team collaboration, accelerates team learning, and maximizes information sharing. Additionally, the application of ergonomic design supports overall employee health and wellbeing.</p>
    <p>Even though we work on different time zones with thousands of kilometers between us, we’re all one team with shared goals, and it shows.</p>
    </div>
    </div>
    <div className='careersImage'>
      <div className='Images'>
        <img src={image1} alt="" />
        <img src={image1} alt="" />
        </div>
        <div className='Images'>
        <img src={image1} alt="" />
        <img src={image1} alt="" />
        </div>
        <div className='Images'>
        <img src={image1} alt="" />
        <img src={image1} alt="" />
        </div>
    </div>
    
</div>
  )
}

export default Careers