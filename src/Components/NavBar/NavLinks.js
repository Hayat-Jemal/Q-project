import React, { useState } from 'react'
import {HashLink as Link} from "react-router-hash-link"
const NavLinks = (props) => {
    const animateFrom = {opacity: 0, y: -40}
    const animateTo = {opacity: 1, y: 0}
    
  return (
    <div className="header" >
      <div className="header__options" >
      
    <ul>
       <li
          onClick={() => props.isMobile && props.closeMobileMenue()} 
          >            
             <Link to ="#home" smooth>HOME</Link>
            </li>
         <li
          onClick={() => props.isMobile && props.closeMobileMenue()} >            
             <Link to ="#about" smooth >ABOUT US</Link>
            </li>

         <li
         onClick={() => props.isMobile && props.closeMobileMenue()}>
          
           <Link to ="#services" smooth>SERVICES</Link>
           </li>
           <li 
           onClick={() => props.isMobile && props.closeMobileMenue()}>
            <Link to ="#careers" smooth>CAREERS</Link>
             </li>
            
           <li
            onClick={() => props.isMobile && props.closeMobileMenue()}>
             
              <Link to ="#withus" smooth>WORKING WITH US</Link>
              </li>
           <li onClick={() => props.isMobile && props.closeMobileMenue()}>
            <Link to ="#contactus" smooth>CONTACT US</Link>
             </li>
       </ul>
       </div>
      
       </div>
    
  )
}

export default NavLinks