import React from 'react'
import "./servicesDescription.css"
function ServicesDescription({img,title,descriptionTitle,description}) {
  return (
    <div className='ServicesDescription'> 
      <div className="parent">
      <img src={img} alt="" />
        <p className='servicesTitle'>{title}</p>
      <div className="cover"> 
       <p className='coverP1'>{descriptionTitle}</p>
       <p className='coverP2'>{description}</p>   
    </div>
  </div>
  
  </div>
  )
}

export default ServicesDescription