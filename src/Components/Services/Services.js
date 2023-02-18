import React from 'react'
import "./services.css"
import pic1 from "../Images/WhatsAppImage2.jpg"
import ServicesDescription from './ServicesDescription'
import img1 from "../Images/managed-services.svg"

function Services() {
  return (
    <div className='services' id="services">
        <div className='servicesTitlewrapper'>
           <h1>A Wide Range of </h1>
            <p>Service & Solutions</p>
      </div>
      <div className='allservices'>
      <div className='servicesFirst'>
        <div  className='servicesSecond'>
      <ServicesDescription 
      img = {img1}
      title = "MANAGED SERVICES"
      descriptionTitle = " MANAGED SERVICES"
      description = 'Benefit from a combination of flexible service models, easy-to-integrate solutions and a proactive and affordable approach to maintenance and management to insulate your investments from obsolete operational models'
      />
      <ServicesDescription 
      img = {img1}
      title = "MANAGED SERVICES"
      descriptionTitle = " MANAGED SERVICES"
      description = 'Benefit from a combination of flexible service models, easy-to-integrate solutions and a proactive and affordable approach to maintenance and management to insulate your investments from obsolete operational models'
      />
      </div>
      <div  className='servicesSecond'>
      <ServicesDescription 
      img = {img1}
      title = "MANAGED SERVICES"
      descriptionTitle = " MANAGED SERVICES"
      description = 'Benefit from a combination of flexible service models, easy-to-integrate solutions and a proactive and affordable approach to maintenance and management to insulate your investments from obsolete operational models'
      />
      <ServicesDescription 
      img = {img1}
      title = "MANAGED SERVICES"
      descriptionTitle = " MANAGED SERVICES"
      description = 'Benefit from a combination of flexible service models, easy-to-integrate solutions and a proactive and affordable approach to maintenance and management to insulate your investments from obsolete operational models'
      />
      </div>
      </div>
      <div  className='servicesFirst'>
        <div className='servicesSecond'>
      <ServicesDescription 
      img = {img1}
      title = "MANAGED SERVICES"
      descriptionTitle = " MANAGED SERVICES"
      description = 'Benefit from a combination of flexible service models, easy-to-integrate solutions and a proactive and affordable approach to maintenance and management to insulate your investments from obsolete operational models'
      />
      <ServicesDescription 
      img = {img1}
      title = "MANAGED SERVICES"
      descriptionTitle = " MANAGED SERVICES"
      description = 'Benefit from a combination of flexible service models, easy-to-integrate solutions and a proactive and affordable approach to maintenance and management to insulate your investments from obsolete operational models'
      />
      </div>
      <div className='servicesSecond'>
      <ServicesDescription 
      img = {img1}
      title = "MANAGED SERVICES"
      descriptionTitle = " MANAGED SERVICES"
      description = 'Benefit from a combination of flexible service models, easy-to-integrate solutions and a proactive and affordable approach to maintenance and management to insulate your investments from obsolete operational models'
      />
      <ServicesDescription 
      img = {img1}
      title = "MANAGED SERVICES"
      descriptionTitle = " MANAGED SERVICES"
      description = 'Benefit from a combination of flexible service models, easy-to-integrate solutions and a proactive and affordable approach to maintenance and management to insulate your investments from obsolete operational models'
      />
      </div>
      </div>
      {/* <div className="parent">
  Some text would go in here
  <div className="cover"> 
    The hover text would go here
  </div>
</div> */}
</div>
     
   </div>
  )
}

export default Services

