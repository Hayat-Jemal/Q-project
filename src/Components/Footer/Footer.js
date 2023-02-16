import React from 'react'
import { Link } from 'react-router-dom'
import "./footer.css"
import {BsFacebook} from 'react-icons/bs'
import {FaInstagramSquare} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'
function Footer() {
  return (
    <div className='footer'>
        <div className='footerConainer'>
        <div className='footerList' >
            <p>Explore our website:</p>
            <Link to="/"> Home </Link>
            <Link to="about"> About Us </Link>
            <Link to="services"> Services </Link>
            <Link to="withUs"> Working with Us </Link>
            
        </div>
        <div className='footerList'>
            <p>Important for you:</p>
            <Link to="careers"> Careers </Link>
            <Link to="contactUs"> Contact Us </Link>
            <Link to="contactUs"> Contact Us </Link>
        </div>
        
        <div className='footerList'>
            <p>Follow us on:</p>
            <Link to="careers"> Careers </Link>
            <Link to="contactUs"> Contact Us </Link>
            <Link to="contactUs"> Contact Us </Link>
        </div>
        </div>
        <div className='footerIcons'>
            <BsLinkedin />
            <BsFacebook />
            <FaInstagramSquare />
    
        </div>
        <div className='footerCopyright'>
            <p>Copyright Ⓒ All rights reserved | Developed by Hayat</p>
        </div>
        
    </div>
  )
}

export default Footer