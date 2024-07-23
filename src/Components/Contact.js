import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_b2r8u0s', 'template_rhncdtr', form.current, {
        publicKey: '_0U5YiC7wlnonl77k',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          toast("Message received successfully");
        },
        (error) => {
          console.log('FAILED... NOT PASSED', error.text);
        },
      );
  };
  return (
    <> 
    <div className='contactpage' id="contact" data-aos="fade-left"> 
      <div className="form_section"> 
      <h4 className='contactheading' data-aos="fade-up"><u>Contact Us</u></h4>
      <form ref={form} onSubmit={sendEmail}>
      <input className="inputfield"type="text" name="from_name" placeholder='Your Name' />
      <input className="inputfield"type="email" name="email_id" placeholder='Your email' />
      <textarea name="message" placeholder='Your message'rows={5} cols={50}/>
      <input className="send"type="submit" value="Send" />
    </form>
    </div>
    <div className="contact_image"></div>
    </div>
    </>
  )
}

export default Contact
