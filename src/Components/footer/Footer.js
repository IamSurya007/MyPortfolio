import React from 'react'
import './Footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer_logo'>SURYA PILLUTLA</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experiance'>Experiance</a></li>
        <li><a href='#service'>Service</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer_socials'>
        <a href='https://facebook.com'><FaFacebookF/></a>
        <a href='https://instagram.com/iamsurya_007'><FiInstagram/></a>
        <a href='https://twitter.com/IamSurya_007'><IoLogoTwitter/></a>
      </div>

      <div className='footer_copyright'>
        <small>&copy; EDATOR Tutorials. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer