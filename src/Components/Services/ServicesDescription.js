import React from 'react'
import {motion} from "framer-motion"
import "./servicesDescription.css"
function ServicesDescription({img,title,descriptionTitle,description}) {
  return (
    <div className='ServicesDescription'> 
      <div className="parent">
      <motion.img src={img} alt=""
      whileHover={{scale: 1.3, y: 100}}
      />
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