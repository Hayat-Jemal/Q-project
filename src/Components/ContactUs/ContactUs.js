// import React from 'react'
// import "./contactUs.css"

// function ContactUs() {
//   return (
//     <div className='contactUs'>
//            <h1>Contact us, LET'S BUILD SOMETHING</h1>

//     </div>
//   )
// }

// export default ContactUs

// import React from 'react'
// const ContactUs = () => {
//   const [formStatus, setFormStatus] = React.useState('Send')
//   const onSubmit = (e) => {
//     e.preventDefault()
//     setFormStatus('Submitting...')
//     const { name, email, message } = e.target.elements
//     let conFom = {
//       name: name.value,
//       email: email.value,
//       message: message.value,
//     }
//     console.log(conFom)
//   }
//   return (
//     <div className="container mt-5">
//       <h2 className="mb-3">React Contact Form Component Example</h2>
//       <form onSubmit={onSubmit}>
//         <div className="mb-3">
//           <label className="form-label" htmlFor="name">
//             Name
//           </label>
//           <input className="form-control" type="text" id="name" required />
//         </div>
//         <div className="mb-3">
//           <label className="form-label" htmlFor="email">
//             Email
//           </label>
//           <input className="form-control" type="email" id="email" required />
//         </div>
//         <div className="mb-3">
//           <label className="form-label" htmlFor="message">
//             Message
//           </label>
//           <textarea className="form-control" id="message" required />
//         </div>
//         <button className="btn btn-danger" type="submit">
//           {formStatus}
//         </button>
//       </form>
//     </div>
//   )
// }
// export default ContactUs


import React, { useRef } from 'react';
import { useNavigate } from "react-router-dom";
import emailjs from '@emailjs/browser';
import "./contactUs.css"
import image1 from "../Images/contact2.jpg"
import Footer from '../Footer/Footer';

export const ContactUs = () => {
  const form = useRef();
  const navigate = useNavigate()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_byj0u6h', 'template_52paw6b', form.current, '6E7WaAyFQU3juMfTJ')
      .then((result) => {
       // console.log(result.text)
      }, (error) => {
          // console.log(error.text);
      },);
      navigate("/");
  };

  return (
  
   <div className='contactUs' style={{ backgroundImage:`url(${image1})` ,backgroundRepeat:"no-repeat",backgroundSize:"cover",  opacity: "0.8", 
    }} id="contactus">
      <div className="container mt-5" >
    <h2 className="mb-3">Contact us</h2>
    <form ref={form} onSubmit={sendEmail}>
    <div className="mb-3">
      <label className="form-label">Name</label>
      <input className="form-control" type="text" name="user_name" />
      </div>
      <div className="mb-3">
      <label className="form-label">Email</label>
      <input className="form-control" type="email" name="user_email" />
      </div>
      <div className="mb-3">
      <label className="form-label">Message</label>
      <textarea className="form-control" name="message" />
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

// import React, { useRef } from "react";
// import emailjs from "@emailjs/browser";
// import styled from "styled-components";

// // npm i @emailjs/browser

// const Contact = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_byj0u6h",
//         "template_52paw6b",
//         form.current,
//         "6E7WaAyFQU3juMfTJ"
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//           console.log("message sent");
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );

//   };

//   return (
//     <StyledContactForm>
//       <form ref={form} onSubmit={sendEmail}>
//         <label>Name</label>
//         <input type="text" name="user_name" />
//         <label>Email</label>
//         <input type="email" name="user_email" />
//         <label>Message</label>
//         <textarea name="message" />
//         <input type="submit" value="Send" />
//       </form>
//     </StyledContactForm>
//   );
// };

// export default Contact;

// // Styles
// const StyledContactForm = styled.div`
//   width: 400px;
//   form {
//     display: flex;
//     align-items: flex-start;
//     flex-direction: column;
//     width: 100%;
//     font-size: 16px;
//     input {
//       width: 100%;
//       height: 35px;
//       padding: 7px;
//       outline: none;
//       border-radius: 5px;
//       border: 1px solid rgb(220, 220, 220);
//       &:focus {
//         border: 2px solid rgba(0, 206, 158, 1);
//       }
//     }
//     textarea {
//       max-width: 100%;
//       min-width: 100%;
//       width: 100%;
//       max-height: 100px;
//       min-height: 100px;
//       padding: 7px;
//       outline: none;
//       border-radius: 5px;
//       border: 1px solid rgb(220, 220, 220);
//       &:focus {
//         border: 2px solid rgba(0, 206, 158, 1);
//       }
//     }
//     label {
//       margin-top: 1rem;
//     }
//     input[type="submit"] {
//       margin-top: 2rem;
//       cursor: pointer;
//       background: rgb(249, 105, 14);
//       color: white;
//       border: none;
//     }
//   }
// `;
