import React, { useState } from 'react'
import {motion} from "framer-motion"
import {HashLink as Link} from "react-router-hash-link"
const NavLinks = (props) => {
    const animateFrom = {opacity: 0, y: -40}
    const animateTo = {opacity: 1, y: 0}
    
  return (
    <div className="header" >
      <div className="header__options" >
      
    <ul>
    <motion.li
        //  initial={animateFrom}
        //  animate= {animateTo}
        //  transiton = {{delay:0.05}}
        
          onClick={() => props.isMobile && props.closeMobileMenue()} 
          >            
             <Link to ="#home" smooth>HOME</Link>
            </motion.li>
         <motion.li
        //  initial={animateFrom}
        //  animate= {animateTo}
        //  transiton = {{delay:0.05}}
        
          onClick={() => props.isMobile && props.closeMobileMenue()} >            
             <Link to ="#about" smooth >ABOUT US</Link>
            </motion.li>

         <motion.li 
        //   transiton = {{delay:0.10}}
        //  initial={animateFrom}
        //  animate= {animateTo}
         onClick={() => props.isMobile && props.closeMobileMenue()}>
          
           <Link to ="#services" smooth>SERVICES</Link>
           </motion.li>
       

           <motion.li 
          //  initial={animateFrom}
          //  animate= {animateTo}
          //  transiton = {{delay:0.20}}
           onClick={() => props.isMobile && props.closeMobileMenue()}>
            <Link to ="#careers" smooth>CAREERS</Link>
             </motion.li>
             

           <motion.li
          //  initial={animateFrom}
          //  animate= {animateTo}
          //  transiton = {{delay:0.30}}
            onClick={() => props.isMobile && props.closeMobileMenue()}>
             
              <Link to ="#withus" smooth>WORKING WITH US</Link>
              </motion.li>
           <motion.li onClick={() => props.isMobile && props.closeMobileMenue()}>
            <Link to ="#contactus" smooth>CONTACT US</Link>
             </motion.li>
       </ul>
       </div>
      
       </div>
    
  )
}

export default NavLinks