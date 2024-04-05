import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href='https:\\www.linkedin.com/in/surya-pillutla-b751b024a' target="_blank"><BsLinkedin/></a>
        <a href='https:\\github.com/Surya7864' target='_blank'><BsGithub/></a>
        <a href='https:\\instagram.com/iamsurya_007' target="_blank"><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials