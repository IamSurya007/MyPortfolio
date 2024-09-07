import React from 'react'
import './Header.css'
import CTA from './CTA.jsx'
import HeaderSocials from './HeaderSocials'
import surya from '../../assets/Surya.jpeg'

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
      <h5>Hello I'm</h5>
      <h1>Surya</h1>
      <h5 className='text-light'>Fullstack Developer</h5>
      <CTA/>
      <HeaderSocials/>
      <div>
        {/* <img className='me' src={surya} alt='wakandaForever'/> */}
      </div>
    </div>
    </header>
  )
}

export default Header