import React, { useRef } from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessageLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'your_service_id',
        'your_template_id',
        form.current,
        'your_user_id' // public key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert('Failed to send message.');
        }
      );
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <MdOutlineEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>shaysajid20@gmial.com</h5>
            <a href='mailto:shaysajid20@gmail.com' target='_blank'>send a message</a>
          </article>
          <article className='contact_option'>
            <BsWhatsapp className='contact_option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+919949039557</h5>
            <a href="https://api.whatsapp.com/send?phone+919949039557" target='_blank'>send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
      <input type='text' name='name' placeholder='Your Full Name' required />
      <input type='email' name='mail' placeholder='Your Email' required />
      <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
      <button type='submit' className='btn btn-primary'>Send Message</button>
    </form>
      </div>
    </section>
  )
}

export default Contact