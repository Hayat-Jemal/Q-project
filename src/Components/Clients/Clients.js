import React from 'react'
import "./clients.css"
import ClientsLogo from './ClientsLogo'
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

function Clients() {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, 100, { duration: 3 });

    return animation.stop;
  }, []);

  return (

    <div className='clientsContainer'>
        <div className='clientsTitlewrapper'>
            <h1>We Have Multiple Clients </h1>
            <h2>Across Verticals Who Look to Us to Deliver Best-in-class Industry Solutions.</h2>
        </div>
        <motion.h1 style={{color:"white"}}>{rounded}</motion.h1>; 
      {/* <ClientsLogo /> */}
      <div className="video__wrapper">
      
      <iframe 
            width="400" 
            height="315" 
            src="https://www.youtube.com/embed/MOg5nx7tiEk" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen>
      </iframe>
      <iframe 
           width="400" 
           height="315" 
           src="https://www.youtube.com/embed/XeOPbakOpJ0" 
           title="YouTube video player" 
           frameborder="0" 
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <iframe 
         width="400" 
         height="315" 
         src="https://www.youtube.com/embed/OX2CUfJk7xY" 
         title="YouTube video player" 
         frameborder="0" 
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
         allowfullscreen>
        
      </iframe>
      
        {/* <iframe
          src="https://www.youtube.com/embed/zeMr55Mxffc?autoplay=0&mute=0&color=red&controls=1&loop=0&rel=0&start=0&cc_load_policy=0&iv_load_policy=3"
          width="550"
          height="100%"
          style={{ border: "none", overflow: "hidden" }}
          scrolling="no"
          frameborder="0"
          allowfullscreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          allowTransparency="true"
          allow="encrypted-media"
        ></iframe> */}
      </div>
    </div>
  )
}

export default Clients