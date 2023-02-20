import React from 'react'
import "./footer.css"
import {ImFacebook2} from 'react-icons/im'
import {FaInstagramSquare} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'
import {FaTelegramPlane} from 'react-icons/fa'
import {HashLink as Link} from "react-router-hash-link"

function Footer() {
  return (
    <div className='footer'>
        <div className='footerConainer'>
        <div className='footerList' >
            <p><u>Explore our website</u></p>
            <Link to="#home" smooth> Home </Link>
            <Link to="#about" smooth> About Us </Link>
            <Link to="#services"> Services </Link>
            <Link to="#withus"> Working with Us </Link>
            
        </div>
        <div className='footerList'>
            <p><u>Important for you</u></p>
            <Link to="#careers"> Careers </Link>
            <Link to="contactus"> Contact Us </Link>
            <Link to="contactus"> Contact Us </Link>
        </div>

        <div className='footerList'>
            <p><u> Follow us on</u></p>
            <Link to="careers"> Linkedin </Link>
            <Link to="contactUs"> Facebook </Link>
            <Link to="contactUs"> Telegram</Link>
            <Link to="contactUs"> Instgram</Link>
        </div>
        </div>
        <div className='footerIcons'>
        <a href="https://linkedin.com/in/hayat-jemal" target="_blank"><BsLinkedin  className='icon'/></a>
        <a href="https://linkedin.com/in/hayat-jemal" target="_blank"><ImFacebook2  className='icon'/></a>
        <a href="https://linkedin.com/in/hayat-jemal" target="_blank"><FaInstagramSquare className='icon'/></a>

        {/* <Link to={{ pathname: "https://linkedin.com/in/hayat-jemal" }} target="_blank"><BsLinkedin  className='icon'/></Link>
            <Link to="contactUs"><ImFacebook2  className='icon'/></Link>
            <Link to="contactUs"><FaTelegramPlane className='icon'/></Link>
            <Link to="contactUs"><FaInstagramSquare className='icon'/></Link> */}
            
        </div>
        <div className='footerCopyright'>
            <p>Copyright Ⓒ All rights reserved | Developed by Hayat</p>
        </div>
        
    </div>
  )
}

export default Footer