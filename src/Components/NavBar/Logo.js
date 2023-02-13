import React from 'react'
import { Link } from 'react-router-dom'
import pic4 from "../Images/WhatsApp-Image11.jpg"
import "./logo.css"

function Logo() {
  return (
    <Link to="/">  
    <div className='logo'> 
        <img src={pic4}/> 
    </div>
    </Link>
  )
}

export default Logo