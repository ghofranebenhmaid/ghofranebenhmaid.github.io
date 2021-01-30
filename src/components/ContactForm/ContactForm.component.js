import React, { useState }from "react";

import emailjs from 'emailjs-com';
import Button from "../Button/Button";
const ContactForm = () =>
{
  const [status, setStatus] = useState("Submit");
  
   function sendEmail(e) {
    e.preventDefault();
    setStatus("Sending...");

    emailjs.sendForm('service_e6uhurm', 'template_f9ebbhh', e.target, 'user_aXqQTrtBsF9IAVe3ZE6kQ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
     e.target.reset();
  }

  return (
       <form className='contact' onSubmit={sendEmail}>
      <div className='input'>
        <label className='input__label' htmlFor="name">Name</label>
        <input className='input__name' type="text" id="name" placeholder='What´s your name?' name='name' required />
      </div>
      <div className='input'>
        <label className='input__label' htmlFor="subject">Subject</label>
        <input className='input__subject' type="text" id="subject" name='subject' placeholder='Subject..' required />
      </div>
      <div className='input'>
        <label className='input__label' htmlFor="email">Email</label>
        <input className='input__email' type="email" id="email" placeholder='What´s your email address?' name='email' required />
      </div>
      <div className='input text--mb--s'>
        <label className='input__label' htmlFor="message">Message</label>
        <textarea className='input__message'  id="message" name='message' placeholder='What´s your message?' rows="1" required />
      </div>
      {/* <button type="submit">{ status }</button> */}
      <Button buttonSize='btn--simple' buttonStyle='btn--simple' type="submit" >{ status }</Button>
    </form>
  );

  
  
};

export default ContactForm;