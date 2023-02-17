import React from 'react'
import {motion} from "framer-motion"
import {Link, Navigate} from "react-router-dom";
// import pic4 from "../Images/WhatsApp-Image11.jpg"
import AnchorLink from "react-anchor-link-smooth-scroll";
import CAREERS from '../Careers/Careers'
const NavLinks = (props) => {
    const animateFrom = {opacity: 0, y: -40}
    const animateTo = {opacity: 1, y: 0}
  return (
    <div className="header">
      <div className="header__options">
      
    <ul>
         <motion.li
        //  initial={animateFrom}
        //  animate= {animateTo}
        //  transiton = {{delay:0.05}}
        
          onClick={() => props.isMobile && props.closeMobileMenue()} >            
             <Link to ="/about">ABOUT US</Link>
            </motion.li>

         <motion.li 
        //   transiton = {{delay:0.10}}
        //  initial={animateFrom}
        //  animate= {animateTo}
         onClick={() => props.isMobile && props.closeMobileMenue()}>
           {/* <Link to ="/services">SERVICES</Link> */}
           <a href="/services">SERVICES</a>
           </motion.li>
       

           <motion.li 
          //  initial={animateFrom}
          //  animate= {animateTo}
          //  transiton = {{delay:0.20}}
           onClick={() => props.isMobile && props.closeMobileMenue()}> <a href="/resources">RESOURCES</a></motion.li>

           <motion.li
          //  initial={animateFrom}
          //  animate= {animateTo}
          //  transiton = {{delay:0.30}}
            onClick={() => props.isMobile && props.closeMobileMenue()}><AnchorLink href='#careers'> CAREERS</AnchorLink></motion.li>
           <motion.li onClick={() => props.isMobile && props.closeMobileMenue()}><a href="/contactUs">CONTACT US</a> </motion.li>
       </ul>
       </div>
       </div>
    
  )
}

export default NavLinks