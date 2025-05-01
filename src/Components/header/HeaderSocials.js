import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href='https://www.linkedin.com/in/sajid-ameer-shaik-266404229' target="_blank"><BsLinkedin/></a>
        <a href='https:\\github.com/SajidAmeer-07' target='_blank'><BsGithub/></a>
        <a href='https:\\instagram.com/shay_sajid_0711' target="_blank"><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials