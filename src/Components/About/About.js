// import React from 'react'
// import "./about.css"
// import {motion} from "framer-motion"
// import image1 from "../Images/quran.jpg"
// function About() {
//   return (
//     <div className='about' id="about" style={{paddingTop:"80px"}}>
//         <div className='aboutContainer' >
//         <h1>What Makes Us</h1>
//         <motion.p
//         // initial= {{scale: 1}}
//         // animate= {{scale: 2}}
//         // transition= {{duration: 3}} 
//         className='title'>Different?
//         </motion.p>
//         <div className='aboutDescription'>
//         <p>Excellerent as a supporter of the UN Sustainable Development Goals has made a conscious decision to invest in a viable but historically underdeveloped country in Ethiopia to help develop local capacity, create technology jobs, and encourage higher education in technology while providing cost-effective solutions to our global clients at the uncompromised level of quality.</p>
//         <p>We create value for the businesses we serve on two fronts, viz. solutions driven by Design Thinking and by application of new technologies and business models to improve customer experience and achieve operational resilience.</p>
//         <p>Customer-centricity is the central theme of everything we do and we leverage our expertise in futuristic innovations offering future-proof solutions that helps business balance digital transformation with sustainability.</p>
//         </div>
//         </div>
//         <div className='aboutImage'>
//             <motion.img src={image1} alt="" 
//             whileHover={{scale: 1.1, y: 0}}
//             // initial= {{scale: -1}}
//             // animate= {{scale: 1}}
//             // transition= {{duration: 3}}
//             />
//         </div>
        
//     </div>
//   )
// }
// export default About




import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import image1 from "../Images/quran.jpg"
import "./about.css"
const squareVariants = {
  
  visible: { opacity: 1, scale: 1, transition: { duration: 1.3} },
  hidden: { opacity: 0, scale: 0 }
};
function About() {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <motion.div
    ref={ref}
    animate={controls}
    initial="hidden"
    variants={squareVariants}
    className="square"
  >
    <div className='about' id="about" style={{paddingTop:"80px"}}>
        <div className='aboutContainer' >
        <h1>What Makes Us</h1>
        <motion.p
        // initial= {{scale: 1}}
        // animate= {{scale: 2}}
        // transition= {{duration: 3}} 
        className='title'>Different?
        </motion.p>
        <div className='aboutDescription'>
        <p>Excellerent as a supporter of the UN Sustainable Development Goals has made a conscious decision to invest in a viable but historically underdeveloped country in Ethiopia to help develop local capacity, create technology jobs, and encourage higher education in technology while providing cost-effective solutions to our global clients at the uncompromised level of quality.</p>
        <p>We create value for the businesses we serve on two fronts, viz. solutions driven by Design Thinking and by application of new technologies and business models to improve customer experience and achieve operational resilience.</p>
        <p>Customer-centricity is the central theme of everything we do and we leverage our expertise in futuristic innovations offering future-proof solutions that helps business balance digital transformation with sustainability.</p>
        </div>
        </div>
        <div className='aboutImage'>
            <motion.img src={image1} alt="" 
            whileHover={{scale: 1.1, y: 0}}
            // initial= {{scale: -1}}
            // animate= {{scale: 1}}
            // transition= {{duration: 3}}
            />
        </div>
        
    </div>
    </motion.div>
  )
}

export default About