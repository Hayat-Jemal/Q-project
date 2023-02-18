import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import pic1 from "../Images/WhatsAppImage2.jpg"
import pic2 from "../Images/WhatsApp-Image.jpg"
import pic3 from "../Images/WhatsApp-Image10.jpg"
import  "./home.css"
import HomeContent from './HomeContent'

function Home() {
    return (
    <div className='home' id="home">
        <Carousel pause={false} indicators={false} fade={true}  style={{zIndex:"-1"}}>
          <Carousel.Item interval={4000}>
            <img  
              className="d-block w-100"
              src={pic1}
              alt="First slide"
            />
            <Carousel.Caption className='carouselCaption'>
              <HomeContent 
                  hint = "Announcing CIGNEX, Excellerent merge with Relevance Lab "
                  title = "A Global Powerhouse in Digital Transformation & Cloud Services." 
                  description = "Global delivery footprint now spans North America, Ethiopia & India"
                  href = "/about"
                  button = "Read More"
                  />
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={4000}>
            <img
              className="d-block w-100"
              src={pic2}
              alt="Second slide"
            />
            <Carousel.Caption className='carouselCaption'>
             <HomeContent 
                  hint = "Announcing CIGNEX, Excellerent merge with Relevance Lab "
                  title = "A Global Powerhouse in Digital Transformation & Cloud Services." 
                  description = "Global delivery footprint now spans North America, Ethiopia & India"
                  href = "/about"
                  button = "2Read More"
                  />
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={4000}>
            <img
              className="d-block w-100"
              src={pic3}
              alt="Third slide"
            />
            <Carousel.Caption className='carouselCaption'>
            <HomeContent 
                  hint = "Announcing CIGNEX, Excellerent merge with Relevance Lab "
                  title = "A Global Powerhouse in Digital Transformation & Cloud Services." 
                  description = "Global delivery footprint now spans North America, Ethiopia & India"
                  href = "/about"
                  button = "3Read More"
                  />
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </div>
      );
}

export default Home