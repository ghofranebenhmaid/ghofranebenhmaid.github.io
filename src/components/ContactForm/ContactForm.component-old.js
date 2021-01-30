import React, { useState}from "react";

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:3000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };

  
  
  return (
    <form className='contact' onSubmit={handleSubmit}>
      <div className='input'>
        <label className='input__label' htmlFor="name">Name</label>
        <input className='input__name' type="text" id="name" placeholder='What´s your name?' name='name' required />
      </div>
      <div className='input'>
        <label className='input__label' htmlFor="subject">Subject</label>
        <input className='input__subject' type="text" id="subject" name='subject' required />
      </div>
      <div className='input'>
        <label className='input__label' htmlFor="email">Email</label>
        <input className='input__email' type="email" id="email" placeholder='What´s your email address?' name='email' required />
      </div>
      <div className='input'>
        <label className='input__label' htmlFor="message">Message</label>
        <textarea className='input__message'  id="message" name='message' required />
      </div>
      <button type="submit">{status}</button>
    </form>
  );
};

export default ContactForm;