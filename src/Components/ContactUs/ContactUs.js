import React, { useRef, useState } from 'react';
import {send} from "@emailjs/browser"
import "./contactUs.css"
import image1 from "../Images/contact2.jpg"
import Footer from '../Footer/Footer';

export const ContactUs = () => {
 const [toSend, setToSend] = useState({
  user_name: '',
  user_email: '',
  message: '',
 })
 const onSubmit = (e) => {
  e.preventDefault();

  send('service_byj0u6h', 'template_52paw6b', toSend, '6E7WaAyFQU3juMfTJ')
    .then((response) => {
     console.log("text", response.text, response.status)
    
    }, (error) => {
        console.log("failed" ,error.text);
    },);
    setToSend({user_name: '',  user_email: '', message: ''}) 
};

 const handleChange = (e) => {
  setToSend({ ...toSend,[e.target.name]: e.target.value});
  
}


  return (
  
   <div className='contactUs' style={{ backgroundImage:`url(${image1})` ,backgroundRepeat:"no-repeat",backgroundSize:"cover",  opacity: "0.8", 
    }} id="contactus">
      <div className="container mt-5" >
    <h2 className="mb-3">Contact us</h2>
    <form  onSubmit={onSubmit}>
    <div className="mb-3">
      <label className="form-label">Name</label>
      <input className="form-control"
             type="text"
             name="user_name" 
             minlength="2" 
             required="" 
             value={toSend.user_name}
             onChange={handleChange}
             />
      </div>
      <div className="mb-3">
      <label className="form-label">Email</label>
      <input className="form-control" 
             type="email" 
             name="user_email" 
             required=""
             value={toSend.user_email}
             onChange={handleChange}/>
      </div>
      <div className="mb-3">
      <label className="form-label">Message</label>
      <textarea className="form-control" 
                name="message" 
                required=""
                value={toSend.message}
                onChange={handleChange}
                />
      </div>
      <div>
      <input className="btn btn-danger" type="submit" value="Send" />
      </div>
    </form>
    </div>
    <Footer />
  </div>
  );
};

export default ContactUs



