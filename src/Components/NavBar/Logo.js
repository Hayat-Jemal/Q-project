import React from 'react'
import pic4 from "../Images/WhatsApp-Image11.jpg"
import {HashLink as Link} from "react-router-hash-link"
import "./logo.css"

function Logo() {
  return (
    <Link to="#home" smooth>  
    <div className='logo'> 
        <img src={pic4}/> 
    </div>
    </Link>
  )
}

export default Logo